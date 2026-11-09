/* ==========================================================================
   пингвинёнок — site behaviour
   Vanilla JS: i18n, mobile menu, snow, tabs, exercise, streak, carousel, FAQ.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. Translations (header + hero, per brief)
     ------------------------------------------------------------------ */
  var translations = {
    ru: {
      pageTitle: 'пингвинёнок — учите языки по 15 минут в день',
      'nav.languages': 'Языки',
      'nav.how': 'Как это работает',
      'nav.exams': 'Экзамены',
      'nav.audience': 'Для кого',
      'nav.reviews': 'Отзывы',
      'nav.faq': 'Вопросы',
      'lang.label': 'Язык сайта',
      'hero.line1': 'Учите языки',
      'hero.line2pre': 'с ',
      'hero.accent': 'пингвинёнком',
      'hero.line2post': ' —',
      'hero.line3': 'по 15 минут в день',
      'hero.subtitle': 'Бесплатные тренажёры, живые собеседники и подготовка к ЕГЭ и IELTS.',
      'hero.pill1': '6 языков',
      'hero.pill2': 'Серии каждый день',
      'hero.pill3': 'ЕГЭ · IELTS',
      'btn.start': 'Начать бесплатно',
      'btn.account': 'У меня уже есть аккаунт',
      'flag.en': 'Английский',
      'flag.fr': 'Французский',
      'flag.de': 'Немецкий',
      'flag.es': 'Испанский',
      'flag.it': 'Итальянский',
      'flag.cn': 'Китайский'
    },
    en: {
      pageTitle: 'Penguin — learn languages in 15 minutes a day',
      'nav.languages': 'Languages',
      'nav.how': 'How it works',
      'nav.exams': 'Exams',
      'nav.audience': "Who it's for",
      'nav.reviews': 'Reviews',
      'nav.faq': 'FAQ',
      'lang.label': 'Site language',
      'hero.line1': 'Learn languages',
      'hero.line2pre': 'with ',
      'hero.accent': 'Penguin',
      'hero.line2post': ' —',
      'hero.line3': 'just 15 minutes a day',
      'hero.subtitle': 'Free drills, live conversation partners and exam prep for IELTS and school exams.',
      'hero.pill1': '6 languages',
      'hero.pill2': 'Daily streaks',
      'hero.pill3': 'Exams · IELTS',
      'btn.start': 'Start for free',
      'btn.account': 'I already have an account',
      'flag.en': 'English',
      'flag.fr': 'French',
      'flag.de': 'German',
      'flag.es': 'Spanish',
      'flag.it': 'Italian',
      'flag.cn': 'Chinese'
    },
    de: {
      pageTitle: 'Pinguin — Sprachen lernen in 15 Minuten am Tag',
      'nav.languages': 'Sprachen',
      'nav.how': "So funktioniert's",
      'nav.exams': 'Prüfungen',
      'nav.audience': 'Für wen',
      'nav.reviews': 'Bewertungen',
      'nav.faq': 'FAQ',
      'lang.label': 'Sprache der Website',
      'hero.line1': 'Sprachen lernen',
      'hero.line2pre': 'mit ',
      'hero.accent': 'Pinguin',
      'hero.line2post': ' —',
      'hero.line3': 'nur 15 Minuten am Tag',
      'hero.subtitle': 'Kostenlose Übungen, echte Gesprächspartner und Prüfungsvorbereitung für Abitur und IELTS.',
      'hero.pill1': '6 Sprachen',
      'hero.pill2': 'Tägliche Serien',
      'hero.pill3': 'Prüfungen · IELTS',
      'btn.start': 'Kostenlos starten',
      'btn.account': 'Ich habe schon ein Konto',
      'flag.en': 'Englisch',
      'flag.fr': 'Französisch',
      'flag.de': 'Deutsch',
      'flag.es': 'Spanisch',
      'flag.it': 'Italienisch',
      'flag.cn': 'Chinesisch'
    },
    fr: {
      pageTitle: 'Pingouin — apprenez les langues en 15 minutes par jour',
      'nav.languages': 'Langues',
      'nav.how': 'Comment ça marche',
      'nav.exams': 'Examens',
      'nav.audience': 'Pour qui',
      'nav.reviews': 'Avis',
      'nav.faq': 'FAQ',
      'lang.label': 'Langue du site',
      'hero.line1': 'Apprenez les langues',
      'hero.line2pre': 'avec ',
      'hero.accent': 'Pingouin',
      'hero.line2post': ' —',
      'hero.line3': '15 minutes par jour',
      'hero.subtitle': "Des exercices gratuits, de vrais interlocuteurs et une préparation aux examens et à l'IELTS.",
      'hero.pill1': '6 langues',
      'hero.pill2': 'Séries quotidiennes',
      'hero.pill3': 'Examens · IELTS',
      'btn.start': 'Commencer gratuitement',
      'btn.account': "J'ai déjà un compte",
      'flag.en': 'Anglais',
      'flag.fr': 'Français',
      'flag.de': 'Allemand',
      'flag.es': 'Espagnol',
      'flag.it': 'Italien',
      'flag.cn': 'Chinois'
    },
    es: {
      pageTitle: 'Pingüino — aprende idiomas en 15 minutos al día',
      'nav.languages': 'Idiomas',
      'nav.how': 'Cómo funciona',
      'nav.exams': 'Exámenes',
      'nav.audience': 'Para quién',
      'nav.reviews': 'Opiniones',
      'nav.faq': 'Preguntas',
      'lang.label': 'Idioma del sitio',
      'hero.line1': 'Aprende idiomas',
      'hero.line2pre': 'con ',
      'hero.accent': 'Pingüino',
      'hero.line2post': ' —',
      'hero.line3': '15 minutos al día',
      'hero.subtitle': 'Ejercicios gratuitos, conversaciones reales y preparación de exámenes e IELTS.',
      'hero.pill1': '6 idiomas',
      'hero.pill2': 'Rachas diarias',
      'hero.pill3': 'Exámenes · IELTS',
      'btn.start': 'Empezar gratis',
      'btn.account': 'Ya tengo cuenta',
      'flag.en': 'Inglés',
      'flag.fr': 'Francés',
      'flag.de': 'Alemán',
      'flag.es': 'Español',
      'flag.it': 'Italiano',
      'flag.cn': 'Chino'
    },
    zh: {
      pageTitle: '企鹅 — 每天 15 分钟学语言',
      'nav.languages': '语言',
      'nav.how': '学习方法',
      'nav.exams': '考试',
      'nav.audience': '适合人群',
      'nav.reviews': '评价',
      'nav.faq': '常见问题',
      'lang.label': '网站语言',
      'hero.line1': '学语言',
      'hero.line2pre': '和',
      'hero.accent': '企鹅',
      'hero.line2post': '一起 —',
      'hero.line3': '每天只需 15 分钟',
      'hero.subtitle': '免费练习、真人语伴，以及考试和 IELTS 备考。',
      'hero.pill1': '6 种语言',
      'hero.pill2': '每日连练',
      'hero.pill3': '考试 · IELTS',
      'btn.start': '免费开始',
      'btn.account': '我已有账户',
      'flag.en': '英语',
      'flag.fr': '法语',
      'flag.de': '德语',
      'flag.es': '西班牙语',
      'flag.it': '意大利语',
      'flag.cn': '中文'
    }
  };

  var LANGUAGE_NAMES = {
    ru: 'Русский',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    zh: '中文'
  };

  var STORAGE_KEY = 'penguin-language';
  var DEFAULT_LANG = 'ru';
  var currentLang = DEFAULT_LANG;

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      /* localStorage can be unavailable (private mode, file protocol) */
    }
  }

  var langCurrentEls = document.querySelectorAll('[data-lang-current]');
  var langOptionEls = document.querySelectorAll('[data-set-lang]');

  function applyLanguage(lang) {
    if (!translations[lang]) {
      lang = DEFAULT_LANG;
    }
    currentLang = lang;
    var dictionary = translations[lang];
    var fallback = translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      var value = dictionary[key];
      if (typeof value !== 'string') {
        value = fallback[key];
      }
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    document.documentElement.lang = lang;
    document.title = dictionary.pageTitle || fallback.pageTitle;

    langCurrentEls.forEach(function (element) {
      element.textContent = LANGUAGE_NAMES[lang];
      element.lang = lang;
    });

    langOptionEls.forEach(function (element) {
      var isActive = element.getAttribute('data-set-lang') === lang;
      if (element.getAttribute('role') === 'option') {
        element.setAttribute('aria-selected', String(isActive));
      } else {
        element.setAttribute('aria-pressed', String(isActive));
      }
    });

    safeSet(STORAGE_KEY, lang);
  }

  function initLanguage() {
    var saved = safeGet(STORAGE_KEY);
    applyLanguage(translations[saved] ? saved : DEFAULT_LANG);

    langOptionEls.forEach(function (element) {
      element.lang = element.getAttribute('data-set-lang');
      element.addEventListener('click', function () {
        applyLanguage(element.getAttribute('data-set-lang'));
        closeLangMenu();
        if (langToggle && !element.closest('.drawer')) {
          langToggle.focus();
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     2. Language dropdown
     ------------------------------------------------------------------ */
  var langToggle = document.querySelector('[data-lang-toggle]');
  var langMenu = document.querySelector('[data-lang-menu]');
  var langSwitcher = document.querySelector('[data-lang-switcher]');

  function isLangMenuOpen() {
    return langMenu != null && !langMenu.hasAttribute('hidden');
  }

  function openLangMenu() {
    if (!langMenu || !langToggle) {
      return;
    }
    langMenu.removeAttribute('hidden');
    langToggle.setAttribute('aria-expanded', 'true');
    var selected = langMenu.querySelector('[aria-selected="true"]') || langMenu.querySelector('[role="option"]');
    if (selected) {
      selected.focus();
    }
  }

  function closeLangMenu(returnFocus) {
    if (!langMenu || !langToggle || !isLangMenuOpen()) {
      return;
    }
    langMenu.setAttribute('hidden', '');
    langToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) {
      langToggle.focus();
    }
  }

  function initLangMenu() {
    if (!langToggle || !langMenu) {
      return;
    }

    langToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      if (isLangMenuOpen()) {
        closeLangMenu();
      } else {
        openLangMenu();
      }
    });

    langToggle.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openLangMenu();
      }
    });

    langMenu.addEventListener('keydown', function (event) {
      var options = Array.prototype.slice.call(langMenu.querySelectorAll('[role="option"]'));
      var index = options.indexOf(document.activeElement);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        options[(index + 1) % options.length].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        options[(index - 1 + options.length) % options.length].focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        options[0].focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        options[options.length - 1].focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeLangMenu(true);
      } else if (event.key === 'Tab') {
        closeLangMenu();
      }
    });

    document.addEventListener('click', function (event) {
      if (langSwitcher && !langSwitcher.contains(event.target)) {
        closeLangMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isLangMenuOpen()) {
        closeLangMenu(true);
      }
    });
  }

  /* ------------------------------------------------------------------
     3. Mobile drawer
     ------------------------------------------------------------------ */
  var drawer = document.getElementById('mobile-menu');
  var menuOpenBtn = document.querySelector('[data-menu-open]');
  var drawerOverlay = document.querySelector('[data-drawer-overlay]');
  var menuCloseBtn = document.querySelector('[data-menu-close]');
  var drawerLinks = document.querySelectorAll('[data-drawer-link]');
  var lastFocusedElement = null;

  function getDrawerFocusable() {
    if (!drawer) {
      return [];
    }
    return Array.prototype.slice.call(
      drawer.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')
    );
  }

  function openDrawer() {
    if (!drawer) {
      return;
    }
    lastFocusedElement = document.activeElement;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    if (drawerOverlay) {
      drawerOverlay.classList.add('is-visible');
      drawerOverlay.setAttribute('aria-hidden', 'false');
    }
    if (menuOpenBtn) {
      menuOpenBtn.setAttribute('aria-expanded', 'true');
      menuOpenBtn.setAttribute('aria-label', 'Закрыть меню');
    }
    var focusable = getDrawerFocusable();
    if (focusable.length) {
      focusable[0].focus();
    }
  }

  function closeDrawer() {
    if (!drawer || !drawer.classList.contains('is-open')) {
      return;
    }
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    if (drawerOverlay) {
      drawerOverlay.classList.remove('is-visible');
      drawerOverlay.setAttribute('aria-hidden', 'true');
    }
    if (menuOpenBtn) {
      menuOpenBtn.setAttribute('aria-expanded', 'false');
      menuOpenBtn.setAttribute('aria-label', 'Открыть меню');
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function initDrawer() {
    if (!drawer) {
      return;
    }

    if (menuOpenBtn) {
      menuOpenBtn.addEventListener('click', function () {
        if (drawer.classList.contains('is-open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }
    if (menuCloseBtn) {
      menuCloseBtn.addEventListener('click', closeDrawer);
    }
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', closeDrawer);
    }
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    drawer.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== 'Tab') {
        return;
      }
      var focusable = getDrawerFocusable();
      if (!focusable.length) {
        return;
      }
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) {
        closeDrawer();
      }
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ------------------------------------------------------------------
     4. Header shadow on scroll
     ------------------------------------------------------------------ */
  function initHeader() {
    var header = document.querySelector('[data-header]');
    if (!header) {
      return;
    }
    var update = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ------------------------------------------------------------------
     5. Snowfall
     ------------------------------------------------------------------ */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initSnow() {
    var layer = document.querySelector('[data-snow]');
    if (!layer) {
      return;
    }
    var stage = layer.closest('.hero__stage');
    var isMobile = window.matchMedia('(max-width: 767px)');
    var resizeTimer = null;

    function build() {
      layer.innerHTML = '';
      if (reduceMotion.matches) {
        return;
      }
      var count = isMobile.matches ? 12 : 28;
      var fall = (stage ? stage.offsetHeight : window.innerHeight) + 80;
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < count; i += 1) {
        var flake = document.createElement('span');
        var isWhite = Math.random() < 0.28;
        flake.className = 'snowflake ' + (isWhite ? 'snowflake--white' : 'snowflake--blue');
        var size = (5 + Math.random() * 9).toFixed(1);
        var duration = 9 + Math.random() * 10;
        var delay = -Math.random() * duration;
        flake.style.setProperty('--x', (Math.random() * 100).toFixed(2) + '%');
        flake.style.setProperty('--size', size + 'px');
        flake.style.setProperty('--drift', (Math.random() * 120 - 60).toFixed(1) + 'px');
        flake.style.setProperty('--duration', duration.toFixed(2) + 's');
        flake.style.setProperty('--delay', delay.toFixed(2) + 's');
        flake.style.setProperty('--opacity', (0.35 + Math.random() * 0.55).toFixed(2));
        flake.style.setProperty('--fall', fall + 'px');
        fragment.appendChild(flake);
      }
      layer.appendChild(fragment);
    }

    build();

    window.addEventListener('resize', function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 250);
    }, { passive: true });

    window.addEventListener('load', build);

    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', build);
    }
    if (typeof isMobile.addEventListener === 'function') {
      isMobile.addEventListener('change', build);
    }
  }

  /* ------------------------------------------------------------------
     6. Reveal on scroll
     ------------------------------------------------------------------ */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) {
      return;
    }
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (element) {
        element.classList.add('is-visible');
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (element) {
      element.classList.add('reveal-pending');
      observer.observe(element);
    });
  }

  /* ------------------------------------------------------------------
     7. Method — word-building exercise
     ------------------------------------------------------------------ */
  function initExercise() {
    var root = document.querySelector('[data-exercise]');
    if (!root) {
      return;
    }
    var bankEl = root.querySelector('[data-exercise-bank]');
    var answerEl = root.querySelector('[data-exercise-answer]');
    var countEl = root.querySelector('[data-exercise-count]');
    var feedbackEl = root.querySelector('[data-exercise-feedback]');
    var checkBtn = root.querySelector('[data-exercise-check]');
    var resetBtn = root.querySelector('[data-exercise-reset]');
    if (!bankEl || !answerEl) {
      return;
    }

    var words = ['travel', 'I', 'go', 'love', 'to', 'like'];
    var target = 'I love to travel';
    var used = words.map(function () {
      return false;
    });
    var selection = [];

    function render() {
      bankEl.innerHTML = '';
      words.forEach(function (word, index) {
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'word-chip' + (used[index] ? ' is-used' : '');
        chip.textContent = word;
        chip.setAttribute('data-bank-index', String(index));
        chip.setAttribute('aria-label', 'Добавить слово «' + word + '»');
        bankEl.appendChild(chip);
      });

      answerEl.innerHTML = '';
      selection.forEach(function (bankIndex, position) {
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'word-chip';
        chip.textContent = words[bankIndex];
        chip.setAttribute('data-answer-pos', String(position));
        chip.setAttribute('aria-label', 'Убрать слово «' + words[bankIndex] + '»');
        answerEl.appendChild(chip);
      });

      if (countEl) {
        countEl.textContent = String(selection.length);
      }
    }

    function setFeedback(message, state) {
      if (!feedbackEl) {
        return;
      }
      feedbackEl.textContent = message;
      feedbackEl.classList.remove('is-success', 'is-error');
      if (state) {
        feedbackEl.classList.add(state);
      }
    }

    bankEl.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-bank-index]');
      if (!chip) {
        return;
      }
      var index = Number(chip.getAttribute('data-bank-index'));
      if (used[index]) {
        return;
      }
      used[index] = true;
      selection.push(index);
      root.classList.remove('is-solved');
      setFeedback('', null);
      render();
    });

    answerEl.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-answer-pos]');
      if (!chip) {
        return;
      }
      var position = Number(chip.getAttribute('data-answer-pos'));
      var bankIndex = selection[position];
      used[bankIndex] = false;
      selection.splice(position, 1);
      root.classList.remove('is-solved');
      setFeedback('', null);
      render();
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        if (!selection.length) {
          setFeedback('Сначала соберите перевод из слов.', 'is-error');
          return;
        }
        var attempt = selection.map(function (index) {
          return words[index];
        }).join(' ');
        if (attempt === target) {
          root.classList.add('is-solved');
          setFeedback('Верно! I love to travel — именно так.', 'is-success');
        } else {
          setFeedback('Почти! Проверьте порядок слов и попробуйте снова.', 'is-error');
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        used = words.map(function () {
          return false;
        });
        selection = [];
        root.classList.remove('is-solved');
        setFeedback('', null);
        render();
      });
    }

    render();
  }

  /* ------------------------------------------------------------------
     8. Exam tabs
     ------------------------------------------------------------------ */
  function initExamTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-exam]'));
    var panel = document.querySelector('[data-exam-panel]');
    if (!tabs.length || !panel) {
      return;
    }

    var data = {
      ege: {
        tag: 'Английский, 11 класс',
        score: '+23',
        unit: 'балла',
        text: 'Разбираем все 4 раздела: аудирование, чтение, грамматику и лексику, письмо. Задания в формате ФИПИ, автопроверка и разбор каждой ошибки.'
      },
      oge: {
        tag: 'Английский, 9 класс',
        score: '+19',
        unit: 'баллов',
        text: 'Готовим к ОГЭ по всем разделам: аудирование, чтение, грамматика и письмо. Реальные форматы заданий, таймер и разбор каждой ошибки.'
      },
      ielts: {
        tag: 'Английский, 18+',
        score: '+1,5',
        unit: 'балла',
        text: 'Тренируем все 4 модуля IELTS: Listening, Reading, Writing, Speaking. Эссе проверяются по критериям, Speaking — с обратной связью.'
      },
      toefl: {
        tag: 'Английский, 18+',
        score: '+22',
        unit: 'балла',
        text: 'Подготовка к TOEFL, Duolingo English Test и другим международным экзаменам: стратегии, пробники и работа над слабыми местами.'
      }
    };

    var tagEl = panel.querySelector('[data-exam-tag]');
    var scoreEl = panel.querySelector('[data-exam-score]');
    var unitEl = panel.querySelector('[data-exam-unit]');
    var textEl = panel.querySelector('[data-exam-text]');

    function selectTab(tab) {
      var key = tab.getAttribute('data-exam');
      var item = data[key];
      if (!item) {
        return;
      }
      tabs.forEach(function (button) {
        var active = button === tab;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
        button.setAttribute('tabindex', active ? '0' : '-1');
      });
      if (tagEl) {
        tagEl.textContent = item.tag;
      }
      if (scoreEl) {
        scoreEl.textContent = item.score;
      }
      if (unitEl) {
        unitEl.textContent = item.unit;
      }
      if (textEl) {
        textEl.textContent = item.text;
      }
      panel.setAttribute('aria-labelledby', tab.id);
      if (!reduceMotion.matches && typeof panel.animate === 'function') {
        panel.animate(
          [{ opacity: 0.35, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 320, easing: 'ease-out' }
        );
      }
    }

    tabs.forEach(function (tab, index) {
      tab.tabIndex = index === 0 ? 0 : -1;
      tab.addEventListener('click', function () {
        selectTab(tab);
      });
      tab.addEventListener('keydown', function (event) {
        var current = tabs.indexOf(tab);
        var next = null;
        if (event.key === 'ArrowRight') {
          next = tabs[(current + 1) % tabs.length];
        } else if (event.key === 'ArrowLeft') {
          next = tabs[(current - 1 + tabs.length) % tabs.length];
        } else if (event.key === 'Home') {
          next = tabs[0];
        } else if (event.key === 'End') {
          next = tabs[tabs.length - 1];
        }
        if (next) {
          event.preventDefault();
          next.focus();
          selectTab(next);
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     9. Audience tabs
     ------------------------------------------------------------------ */
  function initAudienceTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-audience]'));
    var panel = document.querySelector('[data-audience-panel]');
    if (!tabs.length || !panel) {
      return;
    }

    var data = {
      adults: {
        title: 'Взрослым — для работы и карьеры',
        text: 'Деловая переписка, созвоны, презентации и собеседования. Курсы по бизнес-лексике и тренажёр для переговоров.',
        bullets: ['Бизнес-английский', 'Подготовка к собеседованию', '10 минут в обед'],
        icon: 'i-clock',
        value: '10 минут',
        label: 'в обеденный перерыв'
      },
      school: {
        title: 'Школьникам — оценки и экзамены',
        text: 'Помогаем с домашкой, подтягиваем оценки и готовим к ОГЭ и ЕГЭ без зубрёжки — короткими заданиями.',
        bullets: ['Программа 5–11 класса', 'Разбор домашних заданий', 'Подготовка к ОГЭ и ЕГЭ'],
        icon: 'i-cap',
        value: '+23 балла',
        label: 'средний прирост на ЕГЭ'
      },
      students: {
        title: 'Студентам — учёба и стажировки',
        text: 'Академический английский, лексика для лекций и стажировок, подготовка к IELTS и TOEFL для магистратуры.',
        bullets: ['Академическая лексика', 'Эссе и презентации', 'IELTS и TOEFL'],
        icon: 'i-target',
        value: '7.0',
        label: 'целевой балл IELTS'
      },
      travellers: {
        title: 'Путешественникам — язык в дорогу',
        text: 'Разговорные курсы-разговорники: аэропорт, отель, кафе и вокзал. Учитесь перед поездкой за пару недель.',
        bullets: ['Фразы для поездок', 'Аудирование на слух', 'Курс за 2 недели'],
        icon: 'i-globe',
        value: '2 недели',
        label: 'до уверенной поездки'
      },
      kids: {
        title: 'Детям и родителям — от 4 лет',
        text: 'Игровые уроки с пингвинёнком: ребёнок занимается сам, а родители видят прогресс в отчёте.',
        bullets: ['Игровые задания', 'Награды и серии', 'Родительский отчёт'],
        icon: 'i-heart',
        value: 'с 4 лет',
        label: 'весело и без давления'
      }
    };

    var titleEl = panel.querySelector('[data-audience-title]');
    var textEl = panel.querySelector('[data-audience-text]');
    var bulletsEl = panel.querySelector('[data-audience-bullets]');
    var iconUse = panel.querySelector('[data-audience-icon-use]');
    var valueEl = panel.querySelector('[data-audience-stat-value]');
    var labelEl = panel.querySelector('[data-audience-stat-label]');

    tabs.forEach(function (tab, index) {
      tab.id = tab.id || 'audience-tab-' + index;
      tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    panel.setAttribute('aria-labelledby', tabs[0].id);

    function selectTab(tab) {
      var key = tab.getAttribute('data-audience');
      var item = data[key];
      if (!item) {
        return;
      }
      tabs.forEach(function (button) {
        var active = button === tab;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
        button.setAttribute('tabindex', active ? '0' : '-1');
      });

      if (titleEl) {
        titleEl.textContent = item.title;
      }
      if (textEl) {
        textEl.textContent = item.text;
      }
      if (bulletsEl) {
        bulletsEl.innerHTML = '';
        item.bullets.forEach(function (bullet) {
          var li = document.createElement('li');
          var svgNS = 'http://www.w3.org/2000/svg';
          var icon = document.createElementNS(svgNS, 'svg');
          icon.setAttribute('class', 'icon check-list__icon');
          icon.setAttribute('aria-hidden', 'true');
          var use = document.createElementNS(svgNS, 'use');
          use.setAttribute('href', '#i-check');
          icon.appendChild(use);
          li.appendChild(icon);
          li.appendChild(document.createTextNode(bullet));
          bulletsEl.appendChild(li);
        });
      }
      if (iconUse) {
        iconUse.setAttribute('href', '#' + item.icon);
      }
      if (valueEl) {
        valueEl.textContent = item.value;
      }
      if (labelEl) {
        labelEl.textContent = item.label;
      }
      panel.setAttribute('aria-labelledby', tab.id);

      if (!reduceMotion.matches && typeof panel.animate === 'function') {
        panel.animate(
          [{ opacity: 0.4, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 300, easing: 'ease-out' }
        );
      }
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectTab(tab);
      });
      tab.addEventListener('keydown', function (event) {
        var index = tabs.indexOf(tab);
        var next = null;
        if (event.key === 'ArrowRight') {
          next = tabs[(index + 1) % tabs.length];
        } else if (event.key === 'ArrowLeft') {
          next = tabs[(index - 1 + tabs.length) % tabs.length];
        } else if (event.key === 'Home') {
          next = tabs[0];
        } else if (event.key === 'End') {
          next = tabs[tabs.length - 1];
        }
        if (next) {
          event.preventDefault();
          next.focus();
          selectTab(next);
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     10. Streak demo
     ------------------------------------------------------------------ */
  function initStreak() {
    var root = document.querySelector('[data-streak]');
    if (!root) {
      return;
    }
    var countEl = root.querySelector('[data-streak-count]');
    var wordEl = root.querySelector('[data-streak-word]');
    var messageEl = root.querySelector('[data-streak-message]');
    var daysEl = root.querySelector('[data-streak-days]');
    var doneBtn = root.querySelector('[data-streak-done]');
    var resetBtn = root.querySelector('[data-streak-reset]');
    var streakKey = 'penguin-streak';
    var maxDays = 7;
    var streak = 4;

    var saved = safeGet(streakKey);
    if (saved !== null) {
      var storedStreak = Number(saved);
      if (!Number.isNaN(storedStreak) && storedStreak >= 0) {
        streak = Math.min(storedStreak, maxDays);
      }
    }

    function plural(n, one, few, many) {
      var mod10 = n % 10;
      var mod100 = n % 100;
      if (mod10 === 1 && mod100 !== 11) {
        return one;
      }
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
        return few;
      }
      return many;
    }

    function render() {
      if (countEl) {
        countEl.textContent = String(streak);
      }
      if (wordEl) {
        wordEl.textContent = plural(streak, 'день', 'дня', 'дней') + ' подряд';
      }
      if (daysEl) {
        Array.prototype.forEach.call(daysEl.children, function (day, index) {
          day.classList.toggle('is-done', index < streak);
        });
      }
      if (messageEl) {
        if (streak === 0) {
          messageEl.textContent = 'Начните серию — один урок сегодня, и день засчитан.';
        } else if (streak >= maxDays) {
          messageEl.textContent = 'Целая неделя подряд! Так держать и не останавливайтесь.';
        } else {
          messageEl.textContent = 'Отличный старт — не прерывайте серию!';
        }
      }
    }

    if (doneBtn) {
      doneBtn.addEventListener('click', function () {
        streak = Math.min(streak + 1, maxDays);
        safeSet(streakKey, String(streak));
        render();
        if (!reduceMotion.matches && typeof countEl.animate === 'function') {
          countEl.animate(
            [{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }],
            { duration: 320, easing: 'ease-out' }
          );
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        streak = 0;
        safeSet(streakKey, '0');
        render();
      });
    }

    render();
  }

  /* ------------------------------------------------------------------
     11. Reviews carousel
     ------------------------------------------------------------------ */
  function initReviews() {
    var viewport = document.querySelector('[data-reviews-viewport]');
    if (!viewport) {
      return;
    }
    var prevBtn = document.querySelector('[data-review-prev]');
    var nextBtn = document.querySelector('[data-review-next]');
    var card = viewport.querySelector('.review-card');

    function updateButtons() {
      var maxScroll = viewport.scrollWidth - viewport.clientWidth;
      if (prevBtn) {
        prevBtn.disabled = viewport.scrollLeft <= 2;
      }
      if (nextBtn) {
        nextBtn.disabled = viewport.scrollLeft >= maxScroll - 2;
      }
    }

    function scrollByCard(direction) {
      var gap = 16;
      var amount = (card ? card.getBoundingClientRect().width : viewport.clientWidth) + gap;
      viewport.scrollBy({
        left: amount * direction,
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollByCard(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollByCard(1);
      });
    }

    viewport.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    viewport.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollByCard(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollByCard(-1);
      }
    });

    updateButtons();
  }

  /* ------------------------------------------------------------------
     12. FAQ accordion
     ------------------------------------------------------------------ */
  function initFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));
    if (!items.length) {
      return;
    }

    function setItem(item, open) {
      var button = item.querySelector('.faq__question');
      var answer = item.querySelector('.faq__answer');
      item.classList.toggle('is-open', open);
      if (button) {
        button.setAttribute('aria-expanded', String(open));
      }
      if (answer) {
        answer.setAttribute('aria-hidden', String(!open));
      }
    }

    items.forEach(function (item) {
      setItem(item, false);
      var button = item.querySelector('.faq__question');
      if (!button) {
        return;
      }
      button.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        items.forEach(function (other) {
          setItem(other, other === item ? willOpen : false);
        });
      });
    });
  }

  /* ------------------------------------------------------------------
     13. Footer year
     ------------------------------------------------------------------ */
  function initYear() {
    var els = document.querySelectorAll('[data-year]');
    var year = String(new Date().getFullYear());
    els.forEach(function (element) {
      element.textContent = year;
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function init() {
    var initializers = [
      initLanguage,
      initLangMenu,
      initDrawer,
      initHeader,
      initReveal,
      initSnow,
      initExercise,
      initExamTabs,
      initAudienceTabs,
      initStreak,
      initReviews,
      initFaq,
      initYear
    ];
    initializers.forEach(function (initializer) {
      try {
        initializer();
      } catch (error) {
        if (window.console && typeof window.console.error === 'function') {
          window.console.error('[пингвинёнок] init failed:', error);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
