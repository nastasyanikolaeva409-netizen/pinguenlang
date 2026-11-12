/*!
 * пингвинёнок — i18n engine (vanilla JS, no build step)
 * ---------------------------------------------------------------
 * Подключается ПЕРЕД script.js:
 *   <script src="js/i18n.js" defer></script>
 *   <script src="js/locales/ru.js" defer></script>
 *   <script src="js/locales/en.js" defer></script>
 *   <script src="js/script.js" defer></script>
 *
 * По умолчанию движок пассивен: он ничего не переводит, пока не вызван
 * I18N.init() / I18N.setLang(). Это сделано намеренно, чтобы не
 * конфликтовать со старым applyLanguage() в script.js во время миграции.
 *
 * Автозапуск можно включить атрибутом <html data-i18n-auto>.
 *
 * API:
 *   I18N.t(key, vars)            — строка перевода + {подстановки}
 *   I18N.has(key)                — есть ли ключ
 *   I18N.apply(root?)            — применить переводы к DOM
 *   I18N.setLang(lang)           — загрузить язык, применить, сохранить
 *   I18N.init(options?)          — старт с сохранённым/указанным языком
 *   I18N.getLang()               — текущий язык
 *   I18N.getAvailable()          — загруженные языки
 *   I18N.onChange(fn)            — подписка, возвращает unsubscribe
 *   I18N.offChange(fn)
 *   I18N.load(lang)              — загрузить словарь без применения
 *   I18N.setLocalesPath(path)    — переопределить путь к словарям
 *
 * Разметка:
 *   <h2 data-i18n="languages.title">…</h2>
 *   <button data-i18n-attr="aria-label:a11y.menuOpen">…</button>
 *   <meta name="description" data-i18n-attr="content:meta.description">
 *   <div data-i18n-attr="data-hint:exercise.hint">…</div>
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var DEFAULT_LANG = 'ru';
  var STORAGE_KEY = 'penguin-language';
  var VERSION = '1.0.0';

  var DATA = global.I18N_DATA = global.I18N_DATA || {};
  var currentLang = DEFAULT_LANG;
  var localesPath = 'js/locales/';
  var listeners = [];
  var localePromises = {};
  var pluralRulesCache = {};
  var warned = {};
  var RTL_LANGS = { ar: true, he: true, fa: true, ur: true };

  /* ------------------------------------------------------------------
     Путь к словарям: берём из src самого i18n.js, чтобы работать и из
     корня, и из вложенных страниц. Если currentScript недоступен —
     остаётся js/locales/.
     ------------------------------------------------------------------ */
  try {
    var thisScript = document.currentScript;
    if (thisScript && thisScript.src) {
      localesPath = thisScript.src.replace(/i18n\.js(?:\?.*)?$/, 'locales/');
    }
  } catch (error) {
    /* document.currentScript может быть недоступен */
  }

  function warn(message) {
    if (global.console && typeof global.console.warn === 'function') {
      global.console.warn('[i18n] ' + message);
    }
  }

  function error(message, cause) {
    if (global.console && typeof global.console.error === 'function') {
      global.console.error('[i18n] ' + message, cause || '');
    }
  }

  /* ------------------------------------------------------------------
     Доступ к вложенным ключам: 'exams.ege.text' -> data.en.exams.ege.text
     ------------------------------------------------------------------ */
  function getPath(object, path) {
    var parts = String(path).split('.');
    var value = object;
    for (var i = 0; i < parts.length; i += 1) {
      if (value == null || typeof value !== 'object') {
        return undefined;
      }
      value = value[parts[i]];
    }
    return value;
  }

  function interpolate(template, vars) {
    if (!vars) {
      return template;
    }
    return template.replace(/\{(\w+)\}/g, function (match, name) {
      return Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match;
    });
  }

  /* ------------------------------------------------------------------
     Плюрализация: объект { one, few, many, other } + Intl.PluralRules.
     Например: I18N.t('streak.days', { n: 4 }) -> 'дня подряд'.
     ------------------------------------------------------------------ */
  function getPluralRules(lang) {
    if (!global.Intl || typeof global.Intl.PluralRules !== 'function') {
      return null;
    }
    if (!pluralRulesCache[lang]) {
      try {
        pluralRulesCache[lang] = new global.Intl.PluralRules(lang);
      } catch (rulesError) {
        pluralRulesCache[lang] = null;
      }
    }
    return pluralRulesCache[lang];
  }

  function pickPlural(form, n, lang) {
    if (!form || typeof form !== 'object') {
      return undefined;
    }
    var category = 'other';
    var rules = getPluralRules(lang);
    if (rules) {
      try {
        category = rules.select(n);
      } catch (selectError) {
        category = 'other';
      }
    }
    return form[category] || form.other || form.many || form.one;
  }

  /* ------------------------------------------------------------------
     Базовое разрешение ключа: текущий язык -> ru -> undefined.
     undefined означает «не трогать DOM», чтобы не затереть fallback.
     ------------------------------------------------------------------ */
  function resolve(key, vars) {
    var value = getPath(DATA[currentLang], key);
    var valueLang = currentLang;
    if (value == null) {
      value = getPath(DATA[DEFAULT_LANG], key);
      valueLang = DEFAULT_LANG;
    }
    if (value == null) {
      return undefined;
    }
    if (typeof value === 'object') {
      var n = vars && vars.n != null ? Number(vars.n) : 0;
      value = pickPlural(value, isNaN(n) ? 0 : n, valueLang);
    }
    if (typeof value !== 'string') {
      return undefined;
    }
    return interpolate(value, vars);
  }

  function t(key, vars) {
    var value = resolve(key, vars);
    if (value == null) {
      if (!warned[key]) {
        warned[key] = true;
        warn('missing key "' + key + '" for language "' + currentLang + '"');
      }
      return key;
    }
    return value;
  }

  function has(key) {
    return resolve(key) != null;
  }

  /* ------------------------------------------------------------------
     Применение переводов к DOM.
     ------------------------------------------------------------------ */
  function eachMatch(root, selector, callback) {
    if (!root) {
      return;
    }
    if (root.nodeType === 1 && typeof root.matches === 'function' && root.matches(selector)) {
      callback(root);
    }
    if (typeof root.querySelectorAll === 'function') {
      var nodes = root.querySelectorAll(selector);
      for (var i = 0; i < nodes.length; i += 1) {
        callback(nodes[i]);
      }
    }
  }

  function applyAttributes(element) {
    var raw = element.getAttribute('data-i18n-attr');
    if (!raw) {
      return;
    }
    var pairs = raw.split(';');
    for (var i = 0; i < pairs.length; i += 1) {
      var pair = pairs[i];
      var separator = pair.indexOf(':');
      if (separator === -1) {
        continue;
      }
      var attribute = pair.slice(0, separator).trim();
      var key = pair.slice(separator + 1).trim();
      if (!attribute || !key) {
        continue;
      }
      var value = resolve(key);
      if (value != null) {
        element.setAttribute(attribute, value);
      }
    }
  }

  function apply(root) {
    root = root || document;
    var isDocument = root === document || root.nodeType === 9;

    /* textContent, а не innerHTML: переводы не должны исполнять разметку.
       Не вешайте data-i18n на контейнеры с дочерними элементами — они
       будут заменены текстом. Переводите листовые узлы. */
    eachMatch(root, '[data-i18n]', function (element) {
      var key = element.getAttribute('data-i18n');
      if (!key) {
        return;
      }
      var value = resolve(key);
      if (value != null) {
        element.textContent = value;
      }
    });

    eachMatch(root, '[data-i18n-attr]', applyAttributes);

    if (!isDocument) {
      return;
    }

    var title = resolve('meta.title') || resolve('pageTitle');
    if (title != null) {
      document.title = title;
    }

    var metaMap = {
      'meta[name="description"]': 'meta.description',
      'meta[property="og:title"]': 'meta.ogTitle',
      'meta[property="og:description"]': 'meta.ogDescription',
      'meta[property="og:locale"]': 'meta.ogLocale'
    };

    Object.keys(metaMap).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (!element) {
        return;
      }
      var value = resolve(metaMap[selector]);
      if (value != null) {
        element.setAttribute('content', value);
      }
    });

    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('data-lang', currentLang);
    document.documentElement.dir = RTL_LANGS[currentLang] ? 'rtl' : 'ltr';
  }

  /* ------------------------------------------------------------------
     Загрузка словаря: <script src="js/locales/<lang>.js">.
     Работает по file://, в отличие от fetch/JSON.
     ------------------------------------------------------------------ */
  function loadLocale(lang) {
    if (DATA[lang]) {
      return Promise.resolve(DATA[lang]);
    }
    if (localePromises[lang]) {
      return localePromises[lang];
    }

    localePromises[lang] = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = localesPath + lang + '.js';
      script.async = false;
      script.charset = 'utf-8';
      script.onload = function () {
        if (DATA[lang]) {
          resolve(DATA[lang]);
        } else {
          reject(new Error('Locale "' + lang + '" did not register I18N_DATA'));
        }
      };
      script.onerror = function () {
        reject(new Error('Failed to load locale "' + lang + '" from ' + script.src));
      };
      document.head.appendChild(script);
    }).catch(function (loadError) {
      delete localePromises[lang];
      throw loadError;
    });

    return localePromises[lang];
  }

  function saveLang(lang) {
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (storageError) {
      /* localStorage может быть недоступен (private mode, file://) */
    }
  }

  function emit(lang) {
    for (var i = 0; i < listeners.length; i += 1) {
      try {
        listeners[i](lang);
      } catch (listenerError) {
        error('listener failed', listenerError);
      }
    }

    try {
      var event;
      if (typeof global.CustomEvent === 'function') {
        event = new global.CustomEvent('i18n:change', { detail: { lang: lang } });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('i18n:change', false, false, { lang: lang });
      }
      document.dispatchEvent(event);
    } catch (eventError) {
      /* CustomEvent может быть недоступен */
    }
  }

  function normalizeLang(lang) {
    var value = String(lang == null ? '' : lang).toLowerCase();
    var short = value.split(/[-_]/)[0];
    return short || DEFAULT_LANG;
  }

  function finishSetLang(lang) {
    currentLang = lang;
    apply(document);
    saveLang(lang);
    emit(lang);
    return lang;
  }

  function setLang(lang) {
    var target = normalizeLang(lang);

    if (DATA[target]) {
      return Promise.resolve(finishSetLang(target));
    }

    return loadLocale(target).then(function () {
      return finishSetLang(target);
    }).catch(function (loadError) {
      warn(loadError.message);

      if (target !== DEFAULT_LANG) {
        if (DATA[DEFAULT_LANG]) {
          return finishSetLang(DEFAULT_LANG);
        }
        return loadLocale(DEFAULT_LANG).then(function () {
          return finishSetLang(DEFAULT_LANG);
        }).catch(function (fallbackError) {
          warn(fallbackError.message);
          return currentLang;
        });
      }

      return currentLang;
    });
  }

  function init(options) {
    options = options || {};

    var saved = null;
    try {
      saved = global.localStorage.getItem(STORAGE_KEY);
    } catch (storageError) {
      saved = null;
    }

    var lang = normalizeLang(options.lang || saved || DEFAULT_LANG);

    if (document.readyState === 'loading') {
      return new Promise(function (resolve) {
        var onReady = function () {
          document.removeEventListener('DOMContentLoaded', onReady);
          resolve(setLang(lang));
        };
        document.addEventListener('DOMContentLoaded', onReady);
      });
    }

    return setLang(lang);
  }

  function onChange(listener) {
    if (typeof listener !== 'function') {
      return function () {};
    }
    listeners.push(listener);
    return function () {
      offChange(listener);
    };
  }

  function offChange(listener) {
    var index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  function getLang() {
    return currentLang;
  }

  function getAvailable() {
    return Object.keys(DATA);
  }

  function setLocalesPath(path) {
    if (!path) {
      return;
    }
    localesPath = /\/$/.test(path) ? path : path + '/';
  }

  /* ------------------------------------------------------------------
     Публичный API
     ------------------------------------------------------------------ */
  global.I18N = {
    version: VERSION,
    DEFAULT_LANG: DEFAULT_LANG,
    STORAGE_KEY: STORAGE_KEY,
    t: t,
    has: has,
    apply: apply,
    setLang: setLang,
    init: init,
    getLang: getLang,
    getAvailable: getAvailable,
    onChange: onChange,
    offChange: offChange,
    load: loadLocale,
    setLocalesPath: setLocalesPath
  };

  /* Опциональный автозапуск: <html data-i18n-auto>.
     Не включаем по умолчанию, чтобы не конфликтовать со старым
     applyLanguage() до переписывания script.js. */
  function autoInit() {
    if (document.documentElement.hasAttribute('data-i18n-auto')) {
      init();
    }
  }

  if (document.readyState === 'complete') {
    autoInit();
  } else {
    document.addEventListener('DOMContentLoaded', autoInit);
  }
})(window);
