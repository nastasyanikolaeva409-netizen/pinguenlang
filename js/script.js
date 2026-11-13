/* ==========================================================================
   пингвинёнок — site behaviour
   Vanilla JS: i18n engine (js/i18n.js), mobile menu, snow, tabs, FAQ.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. i18n helpers and state of dynamic blocks
     ------------------------------------------------------------------ */
  var currentExam = 'ege';
  var currentAudience = 'adults';

  var renderExam = function () {};
  var renderAudience = function () {};
  var renderNumbers = function () {};

  function t(key, vars) {
    if (window.I18N && typeof window.I18N.t === 'function') {
      return window.I18N.t(key, vars);
    }
    return key;
  }

  function getLang() {
    if (window.I18N && typeof window.I18N.getLang === 'function') {
      return window.I18N.getLang();
    }
    return 'ru';
  }

  function formatNumber(value, options) {
    try {
      return new Intl.NumberFormat(getLang(), options).format(value);
    } catch (error) {
      return null;
    }
  }

  function formatCompact(value) {
    return formatNumber(value, { notation: 'compact', maximumFractionDigits: 1 });
  }

  function formatSigned(value) {
    var formatted = formatNumber(value, { signDisplay: 'always', maximumFractionDigits: 1 });
    if (formatted == null) {
      return null;
    }
    var first = formatted.charAt(0);
    if (first !== '+' && first !== '-' && first !== '\u2212') {
      formatted = '+' + formatted;
    }
    return formatted;
  }

  /* Endonyms: language names are intentionally not translated. */
  var LANGUAGE_LABELS = {
    ru: 'Русский',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    zh: '中文'
  };

  var langCurrentEls = document.querySelectorAll('[data-lang-current]');
  var langOptionEls = document.querySelectorAll('[data-set-lang]');

  function syncLanguageControls(lang) {
    var label = LANGUAGE_LABELS[lang] || lang;
    langCurrentEls.forEach(function (element) {
      element.textContent = label;
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
  }

  function initLanguageSwitcher() {
    langOptionEls.forEach(function (element) {
      element.lang = element.getAttribute('data-set-lang');
      element.addEventListener('click', function () {
        var lang = element.getAttribute('data-set-lang');
        var afterChange = function () {
          closeLangMenu();
          if (langToggle && !element.closest('.drawer')) {
            langToggle.focus();
          }
        };

        if (window.I18N && typeof window.I18N.setLang === 'function') {
          var change = window.I18N.setLang(lang);
          if (change && typeof change.then === 'function') {
            change.then(afterChange, afterChange);
          } else {
            afterChange();
          }
        } else {
          afterChange();
        }
      });
    });

    syncLanguageControls(window.I18N ? window.I18N.getLang() : 'ru');
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

  function syncDrawerLabel() {
    if (!menuOpenBtn) {
      return;
    }
    var isOpen = drawer && drawer.classList.contains('is-open');
    menuOpenBtn.setAttribute('aria-label', t(isOpen ? 'a11y.menuClose' : 'a11y.menuOpen'));
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
    }
    syncDrawerLabel();
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
    }
    syncDrawerLabel();
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

    syncDrawerLabel();
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
     7. Exam tabs
     ------------------------------------------------------------------ */
  function initExamTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-exam]'));
    var panel = document.querySelector('[data-exam-panel]');
    if (!tabs.length || !panel) {
      return;
    }

    var data = {
      ege: {
        tag: 'exams.ege.tag',
        score: 23,
        unit: 'exams.ege.unit',
        note: 'exams.ege.note',
        text: 'exams.ege.text'
      },
      oge: {
        tag: 'exams.oge.tag',
        score: 19,
        unit: 'exams.oge.unit',
        note: 'exams.oge.note',
        text: 'exams.oge.text'
      },
      ielts: {
        tag: 'exams.ielts.tag',
        score: 1.5,
        unit: 'exams.ielts.unit',
        note: 'exams.ielts.note',
        text: 'exams.ielts.text'
      },
      toefl: {
        tag: 'exams.toefl.tag',
        score: 22,
        unit: 'exams.toefl.unit',
        note: 'exams.toefl.note',
        text: 'exams.toefl.text'
      }
    };

    var tagEl = panel.querySelector('[data-exam-tag]');
    var scoreEl = panel.querySelector('[data-exam-score]');
    var unitEl = panel.querySelector('[data-exam-unit]');
    var noteEl = panel.querySelector('[data-exam-note]');
    var textEl = panel.querySelector('[data-exam-text]');

    function renderExamState(key, animate) {
      var item = data[key];
      if (!item) {
        return;
      }
      currentExam = key;

      var activeTab = null;
      tabs.forEach(function (button) {
        var active = button.getAttribute('data-exam') === key;
        if (active) {
          activeTab = button;
        }
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
        button.setAttribute('tabindex', active ? '0' : '-1');
      });

      if (tagEl) {
        tagEl.textContent = t(item.tag);
      }
      if (scoreEl) {
        var formattedScore = formatSigned(item.score);
        scoreEl.textContent = formattedScore != null ? formattedScore : t('exams.' + key + '.score');
      }
      if (unitEl) {
        unitEl.textContent = t(item.unit);
      }
      if (noteEl) {
        noteEl.textContent = t(item.note);
      }
      if (textEl) {
        textEl.textContent = t(item.text);
      }
      if (activeTab) {
        panel.setAttribute('aria-labelledby', activeTab.id);
      }

      if (animate && !reduceMotion.matches && typeof panel.animate === 'function') {
        panel.animate(
          [{ opacity: 0.35, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 320, easing: 'ease-out' }
        );
      }
    }

    renderExam = renderExamState;

    function selectTab(tab) {
      renderExamState(tab.getAttribute('data-exam'), true);
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

    renderExamState(currentExam, false);
  }

  /* ------------------------------------------------------------------
     8. Audience tabs
     ------------------------------------------------------------------ */
  function initAudienceTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-audience]'));
    var panel = document.querySelector('[data-audience-panel]');
    if (!tabs.length || !panel) {
      return;
    }

    var data = {
      adults: {
        title: 'audience.adults.title',
        text: 'audience.adults.text',
        bullets: ['audience.adults.bullet1', 'audience.adults.bullet2', 'audience.adults.bullet3'],
        icon: 'i-clock',
        value: 'audience.adults.value',
        label: 'audience.adults.label'
      },
      school: {
        title: 'audience.school.title',
        text: 'audience.school.text',
        bullets: ['audience.school.bullet1', 'audience.school.bullet2', 'audience.school.bullet3'],
        icon: 'i-cap',
        value: 'audience.school.value',
        label: 'audience.school.label'
      },
      students: {
        title: 'audience.students.title',
        text: 'audience.students.text',
        bullets: ['audience.students.bullet1', 'audience.students.bullet2', 'audience.students.bullet3'],
        icon: 'i-target',
        value: 'audience.students.value',
        label: 'audience.students.label'
      },
      travellers: {
        title: 'audience.travellers.title',
        text: 'audience.travellers.text',
        bullets: ['audience.travellers.bullet1', 'audience.travellers.bullet2', 'audience.travellers.bullet3'],
        icon: 'i-globe',
        value: 'audience.travellers.value',
        label: 'audience.travellers.label'
      },
      kids: {
        title: 'audience.kids.title',
        text: 'audience.kids.text',
        bullets: ['audience.kids.bullet1', 'audience.kids.bullet2', 'audience.kids.bullet3'],
        icon: 'i-heart',
        value: 'audience.kids.value',
        label: 'audience.kids.label'
      }
    };

    var titleEl = panel.querySelector('[data-audience-title]');
    var textEl = panel.querySelector('[data-audience-text]');
    var bulletsEl = panel.querySelector('[data-audience-bullets]');
    var iconUse = panel.querySelector('[data-audience-icon-use]');
    var valueEl = panel.querySelector('[data-audience-stat-value]');
    var labelEl = panel.querySelector('[data-audience-stat-label]');

    function renderAudienceState(key, animate) {
      var item = data[key];
      if (!item) {
        return;
      }
      currentAudience = key;

      var activeTab = null;
      tabs.forEach(function (button) {
        var active = button.getAttribute('data-audience') === key;
        if (active) {
          activeTab = button;
        }
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
        button.setAttribute('tabindex', active ? '0' : '-1');
      });

      if (titleEl) {
        titleEl.textContent = t(item.title);
      }
      if (textEl) {
        textEl.textContent = t(item.text);
      }
      if (bulletsEl) {
        bulletsEl.innerHTML = '';
        item.bullets.forEach(function (bulletKey) {
          var li = document.createElement('li');
          var svgNS = 'http://www.w3.org/2000/svg';
          var icon = document.createElementNS(svgNS, 'svg');
          icon.setAttribute('class', 'icon check-list__icon');
          icon.setAttribute('aria-hidden', 'true');
          var use = document.createElementNS(svgNS, 'use');
          use.setAttribute('href', '#i-check');
          icon.appendChild(use);
          li.appendChild(icon);
          li.appendChild(document.createTextNode(t(bulletKey)));
          bulletsEl.appendChild(li);
        });
      }
      if (iconUse) {
        iconUse.setAttribute('href', '#' + item.icon);
      }
      if (valueEl) {
        valueEl.textContent = t(item.value);
      }
      if (labelEl) {
        labelEl.textContent = t(item.label);
      }
      if (activeTab) {
        panel.setAttribute('aria-labelledby', activeTab.id);
      }

      if (animate && !reduceMotion.matches && typeof panel.animate === 'function') {
        panel.animate(
          [{ opacity: 0.4, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 300, easing: 'ease-out' }
        );
      }
    }

    renderAudience = renderAudienceState;

    tabs.forEach(function (tab, index) {
      tab.id = tab.id || 'audience-tab-' + index;
      tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    panel.setAttribute('aria-labelledby', tabs[0].id);

    function selectTab(tab) {
      renderAudienceState(tab.getAttribute('data-audience'), true);
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

    renderAudienceState(currentAudience, false);
  }

  /* ------------------------------------------------------------------
     9. FAQ accordion
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
     10. Footer year
     ------------------------------------------------------------------ */
  function initYear() {
    var els = document.querySelectorAll('[data-year]');
    var year = String(new Date().getFullYear());
    els.forEach(function (element) {
      element.textContent = year;
    });
  }

  /* ------------------------------------------------------------------
     11. Intl: language student counts
     ------------------------------------------------------------------ */
  function initNumbers() {
    var studentMetaEls = document.querySelectorAll('.language-card__meta');
    var studentCounts = {
      en: 12400000,
      fr: 3100000,
      de: 2700000,
      es: 4200000,
      it: 1500000,
      cn: 980000
    };

    function render() {
      studentMetaEls.forEach(function (element) {
        var key = element.getAttribute('data-i18n') || '';
        var match = key.match(/^languages\.cards\.([a-z]+)\.students$/);
        if (!match) {
          return;
        }
        var code = match[1];
        var value = studentCounts[code];
        if (value == null) {
          return;
        }
        var compact = formatCompact(value);
        if (compact != null) {
          element.textContent = t('languages.studentsTemplate', { count: compact });
        }
      });
    }

    renderNumbers = render;
    render();
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function init() {
    var run = function () {
      var initializers = [
        initLanguageSwitcher,
        initLangMenu,
        initDrawer,
        initHeader,
        initReveal,
        initSnow,
        initExamTabs,
        initAudienceTabs,
        initFaq,
        initYear,
        initNumbers
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

      if (window.I18N && typeof window.I18N.onChange === 'function') {
        window.I18N.onChange(function () {
          syncLanguageControls(window.I18N.getLang());
          syncDrawerLabel();
          renderExam(currentExam, false);
          renderAudience(currentAudience, false);
          renderNumbers();
        });
      }
    };

    var onInitError = function (error) {
      if (window.console && typeof window.console.error === 'function') {
        window.console.error('[пингвинёнок] i18n init failed:', error);
      }
      run();
    };

    if (window.I18N && typeof window.I18N.init === 'function') {
      try {
        window.I18N.init().then(run, onInitError);
      } catch (error) {
        onInitError(error);
      }
    } else {
      run();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
