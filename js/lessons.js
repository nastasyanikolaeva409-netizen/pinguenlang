/* ==========================================================================
   пингвинёнок — lessons SPA
   Уроки 1–3 загружаются из JSON через js/app/course-loader.js.
   Уроки 4–11 пока остаются в старом inline-формате.
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'penguin-lessons-progress';

  /* Уроки 1–3 живут в languages/english/... и загружаются через fetch. */
  var lessonsData = [
    {
      id: 4,
      title: 'Числа: 1, 2, 3',
      type: 'numbers',
      theory: 'One — 1, two — 2, three — 3. Числа пригодятся, чтобы назвать возраст, время или количество.',
      tasks: [
        {
          question: 'Как переводится two?',
          options: ['1', '3', '2'],
          answer: 2
        },
        {
          question: 'Как сказать «три»?',
          options: ['One', 'Two', 'Three'],
          answer: 2
        },
        {
          question: 'Сколько будет one + two?',
          options: ['2', '3', '1'],
          answer: 1
        }
      ]
    },
    {
      id: 5,
      title: 'Цвета',
      type: 'vocabulary',
      theory: 'Урок скоро появится. Пока доступны уроки 1–4.',
      tasks: []
    },
    {
      id: 6,
      title: 'Семья',
      type: 'vocabulary',
      theory: 'Урок скоро появится.',
      tasks: []
    },
    {
      id: 7,
      title: 'Еда',
      type: 'vocabulary',
      theory: 'Урок скоро появится.',
      tasks: []
    },
    {
      id: 8,
      title: 'Дом',
      type: 'vocabulary',
      theory: 'Урок скоро появится.',
      tasks: []
    },
    {
      id: 9,
      title: 'Животные',
      type: 'vocabulary',
      theory: 'Урок скоро появится.',
      tasks: []
    },
    {
      id: 10,
      title: 'Погода',
      type: 'vocabulary',
      theory: 'Урок скоро появится.',
      tasks: []
    },
    {
      id: 11,
      title: 'Время',
      type: 'grammar',
      theory: 'Урок скоро появится.',
      tasks: []
    }
  ];

  var levelTest = [
    {
      question: 'Как переводится Hello?',
      options: ['Пока', 'Привет', 'Спасибо'],
      answer: 1
    },
    {
      question: 'Что означает two?',
      options: ['1', '3', '2'],
      answer: 2
    },
    {
      question: 'Как сказать «пока»?',
      options: ['Hello', 'Goodbye', 'Please'],
      answer: 1
    }
  ];

  var TYPE_LABELS = {
    alphabet: 'Алфавит',
    vocabulary: 'Слова',
    numbers: 'Числа',
    grammar: 'Грамматика'
  };

  var SCREEN_TITLES = {
    onboarding: 'Уроки — пингвинёнок',
    continue: 'Продолжить обучение — пингвинёнок',
    test: 'Мини-тест — пингвинёнок',
    theory: 'Теория — пингвинёнок',
    alphabet: 'Алфавит — пингвинёнок',
    lesson: 'Урок — пингвинёнок',
    loading: 'Загрузка — пингвинёнок',
    error: 'Ошибка — пингвинёнок',
    result: 'Результат — пингвинёнок'
  };

  var screens = document.querySelectorAll('[data-screen]');
  var refs = {
    continueLabel: document.querySelector('[data-continue-label]'),
    continueTitle: document.querySelector('[data-continue-title]'),
    continueText: document.querySelector('[data-continue-text]'),
    continueMeta: document.querySelector('[data-continue-meta]'),
    continueButton: document.querySelector('[data-continue-button]'),
    testCount: document.querySelector('[data-test-count]'),
    testQuestion: document.querySelector('[data-test-question]'),
    testOptions: document.querySelector('[data-test-options]'),
    testFeedback: document.querySelector('[data-test-feedback]'),
    testNext: document.querySelector('[data-test-next]'),
    testProgress: document.querySelector('[data-test-progress]'),
    testProgressWrap: document.querySelector('[data-test-progress-wrap]'),
    theoryType: document.querySelector('[data-theory-type]'),
    theoryTitle: document.querySelector('[data-theory-title]'),
    theoryContent: document.querySelector('[data-theory-content]'),
    theoryCount: document.querySelector('[data-theory-count]'),
    theoryBack: document.querySelector('[data-theory-back]'),
    theoryNext: document.querySelector('[data-theory-next]'),
    theoryProgress: document.querySelector('[data-theory-progress]'),
    theoryProgressWrap: document.querySelector('[data-theory-progress-wrap]'),
    alphabetGrid: document.querySelector('[data-alphabet-grid]'),
    alphabetStatus: document.querySelector('[data-alphabet-status]'),
    alphabetBack: document.querySelector('[data-alphabet-back]'),
    alphabetStartTasks: document.querySelector('[data-alphabet-start-tasks]'),
    lessonType: document.querySelector('[data-lesson-type]'),
    lessonTitle: document.querySelector('[data-lesson-title]'),
    lessonTheory: document.querySelector('[data-lesson-theory]'),
    lessonCount: document.querySelector('[data-lesson-count]'),
    lessonQuestion: document.querySelector('[data-lesson-question]'),
    lessonOptions: document.querySelector('[data-lesson-options]'),
    lessonFeedback: document.querySelector('[data-lesson-feedback]'),
    lessonCheck: document.querySelector('[data-lesson-check]'),
    lessonNext: document.querySelector('[data-lesson-next]'),
    lessonProgress: document.querySelector('[data-lesson-progress]'),
    lessonProgressWrap: document.querySelector('[data-lesson-progress-wrap]'),
    resultTitle: document.querySelector('[data-result-title]'),
    resultScore: document.querySelector('[data-result-score]'),
    resultText: document.querySelector('[data-result-text]'),
    resultNext: document.querySelector('[data-result-next]'),
    errorText: document.querySelector('[data-error-text]')
  };

  var state = {
    lesson: null,
    theoryIndex: 0,
    alphabetShown: false,
    taskIndex: 0,
    selected: [],
    correct: 0,
    answered: false,
    testIndex: 0,
    testCorrect: 0,
    testAnswered: false
  };

  var progress = loadProgress() || {
    currentLessonId: null,
    completed: []
  };

  var audioContext = null;
  var speechToken = 0;
  var catalog = null;
  var catalogPromise = null;
  var lessonCache = {};
  var pendingLessonId = null;

  function loadProgress() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object') {
        return null;
      }
      var current = Number(data.currentLessonId);
      return {
        currentLessonId: isFinite(current) && current > 0 ? current : null,
        completed: Array.isArray(data.completed)
          ? data.completed.map(Number).filter(function (id) {
            return isFinite(id) && id > 0;
          })
          : []
      };
    } catch (error) {
      return null;
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentLessonId: progress.currentLessonId,
        completed: progress.completed,
        updatedAt: Date.now()
      }));
    } catch (error) {
      /* localStorage may be unavailable */
    }
  }

  function isCompleted(id) {
    return progress.completed.indexOf(Number(id)) !== -1;
  }

  function findLegacyLesson(id) {
    var numericId = Number(id);
    for (var i = 0; i < lessonsData.length; i += 1) {
      if (lessonsData[i].id === numericId) {
        return lessonsData[i];
      }
    }
    return null;
  }

  function findCatalogLesson(id) {
    var numericId = Number(id);
    if (!catalog) {
      return null;
    }
    for (var i = 0; i < catalog.length; i += 1) {
      if (catalog[i].id === numericId) {
        return catalog[i];
      }
    }
    return null;
  }

  function taskCount(lesson) {
    if (!lesson) {
      return 0;
    }
    if (Array.isArray(lesson.tasks)) {
      return lesson.tasks.length;
    }
    var count = Number(lesson.taskCount);
    return isFinite(count) ? count : 0;
  }

  function normalizeLesson(raw, fallbackId) {
    var rawTheory = raw.theory;
    var theory = rawTheory;
    var theorySteps = [];

    if (Array.isArray(rawTheory)) {
      theorySteps = rawTheory.map(function (step) {
        if (typeof step === 'string') {
          return { title: '', text: step, html: '' };
        }
        return {
          title: String(step.title || ''),
          text: String(step.text || ''),
          html: String(step.html || '')
        };
      }).filter(function (step) {
        return step.text || step.html;
      });
    }

    var rawAlphabet = Array.isArray(raw.alphabet) ? raw.alphabet : [];
    var alphabet = rawAlphabet.map(function (item) {
      var letter = String(item.letter || '').toUpperCase();
      return {
        letter: letter,
        lower: String(item.lower || letter.toLowerCase()),
        transcriptionRu: String(item.transcriptionRu || ''),
        speech: String(item.speech || letter)
      };
    }).filter(function (item) {
      return item.letter;
    });

    var rawTasks = Array.isArray(raw.tasks) ? raw.tasks : [];
    var tasks = rawTasks.map(function (task) {
      var options = Array.isArray(task.options) ? task.options.map(String) : [];
      var rawCorrect = task.correct != null ? task.correct : task.answer;
      var correctValues = Array.isArray(rawCorrect) ? rawCorrect : [rawCorrect];
      var correct = correctValues.map(function (value) {
        if (typeof value === 'number') {
          return value;
        }
        return options.indexOf(String(value));
      }).filter(function (index, position, all) {
        return isFinite(index) && index >= 0 && index < options.length && all.indexOf(index) === position;
      });

      if (!correct.length) {
        correct = [0];
      }

      return {
        question: String(task.question || ''),
        options: options,
        correct: correct,
        type: task.type === 'multiple' || correct.length > 1 ? 'multiple' : 'single'
      };
    }).filter(function (task) {
      return task.question && task.options.length > 0;
    });

    return {
      id: Number(raw.id) || fallbackId,
      title: String(raw.title || ''),
      type: raw.type || 'vocabulary',
      uiType: raw.uiType || (raw.type === 'alphabet' ? 'alphabet' : ''),
      theory: theory,
      theorySteps: theorySteps,
      alphabet: alphabet,
      tasks: tasks
    };
  }

  function loadCatalog() {
    if (catalog) {
      return Promise.resolve(catalog);
    }
    if (catalogPromise) {
      return catalogPromise;
    }
    if (!window.CourseLoader || typeof window.CourseLoader.loadCourse !== 'function') {
      return Promise.reject(new Error('CourseLoader не подключён. Подключите js/app/course-loader.js перед js/lessons.js.'));
    }

    catalogPromise = window.CourseLoader.loadCourse().then(function (course) {
      var remoteLessons = Array.isArray(course.lessons) ? course.lessons : [];
      var legacyIds = {};
      lessonsData.forEach(function (lesson) {
        legacyIds[lesson.id] = true;
      });

      var merged = remoteLessons.filter(function (lesson) {
        return !legacyIds[lesson.id];
      }).concat(lessonsData);

      merged.sort(function (a, b) {
        return a.id - b.id;
      });

      catalog = merged;
      return catalog;
    }).catch(function (error) {
      catalogPromise = null;
      throw error;
    });

    return catalogPromise;
  }

  function getLessonData(id) {
    var numericId = Number(id);
    if (lessonCache[numericId]) {
      return Promise.resolve(lessonCache[numericId]);
    }

    var legacy = findLegacyLesson(numericId);
    if (legacy) {
      var normalizedLegacy = normalizeLesson(legacy, numericId);
      lessonCache[numericId] = normalizedLegacy;
      return Promise.resolve(normalizedLegacy);
    }

    if (!window.CourseLoader || typeof window.CourseLoader.loadLesson !== 'function') {
      return Promise.reject(new Error('CourseLoader не подключён.'));
    }

    return window.CourseLoader.loadLesson(numericId).then(function (raw) {
      var lesson = normalizeLesson(raw, numericId);
      lessonCache[numericId] = lesson;
      return lesson;
    });
  }

  function availableLessons() {
    return (catalog || []).filter(function (lesson) {
      return taskCount(lesson) > 0;
    });
  }

  function nextAvailableLesson(id) {
    var available = availableLessons();
    var i;
    for (i = 0; i < available.length; i += 1) {
      if (available[i].id > id && !isCompleted(available[i].id)) {
        return available[i];
      }
    }
    for (i = 0; i < available.length; i += 1) {
      if (!isCompleted(available[i].id)) {
        return available[i];
      }
    }
    return null;
  }

  function resumeLessonId() {
    var current = findCatalogLesson(progress.currentLessonId);
    if (current && taskCount(current) > 0 && !isCompleted(current.id)) {
      return current.id;
    }
    var available = availableLessons();
    var i;
    for (i = 0; i < available.length; i += 1) {
      if (!isCompleted(available[i].id)) {
        return available[i].id;
      }
    }
    if (current && taskCount(current) > 0) {
      return current.id;
    }
    return available.length ? available[0].id : 1;
  }

  function showScreen(name) {
    Array.prototype.forEach.call(screens, function (screen) {
      screen.hidden = screen.getAttribute('data-screen') !== name;
    });

    if ((name === 'lesson' || name === 'theory' || name === 'alphabet') && state.lesson) {
      var suffix = name === 'theory' ? ' — теория' : name === 'alphabet' ? ' — алфавит' : '';
      document.title = state.lesson.title + suffix + ' — пингвинёнок';
    } else {
      document.title = SCREEN_TITLES[name] || SCREEN_TITLES.onboarding;
    }

    var active = document.querySelector('[data-screen="' + name + '"]');
    if (active) {
      var heading = active.querySelector('h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        try {
          heading.focus({ preventScroll: true });
        } catch (error) {
          heading.focus();
        }
      }
    }

    window.scrollTo(0, 0);
  }

  function showError(message) {
    if (refs.errorText) {
      refs.errorText.textContent = message;
    }
    showScreen('error');
  }

  function updateProgress(bar, wrap, index, total, answered) {
    var percent = total ? Math.round(((index + (answered ? 1 : 0)) / total) * 100) : 0;
    bar.style.width = percent + '%';
    if (wrap) {
      wrap.setAttribute('aria-valuenow', String(percent));
    }
  }

  function playSound(correct) {
    try {
      var AudioCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtor) {
        return;
      }
      if (!audioContext) {
        audioContext = new AudioCtor();
      }
      if (audioContext.state === 'suspended' && typeof audioContext.resume === 'function') {
        audioContext.resume();
      }
      var oscillator = audioContext.createOscillator();
      var gain = audioContext.createGain();
      var now = audioContext.currentTime;
      oscillator.type = 'sine';
      oscillator.frequency.value = correct ? 880 : 220;
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.2);
    } catch (error) {
      /* звук необязателен */
    }
  }

  function markOptions(container, selectedIndices, correctIndices) {
    var selected = Array.isArray(selectedIndices) ? selectedIndices : [selectedIndices];
    var correct = Array.isArray(correctIndices) ? correctIndices : [correctIndices];

    Array.prototype.forEach.call(container.children, function (button, index) {
      button.disabled = true;
      button.classList.remove('is-selected');
      button.setAttribute('aria-pressed', 'false');
      if (correct.indexOf(index) !== -1) {
        button.classList.add('is-correct');
      } else if (selected.indexOf(index) !== -1) {
        button.classList.add('is-wrong');
      }
    });
  }

  function renderContinue() {
    var lesson = findCatalogLesson(resumeLessonId());
    if (!lesson) {
      showScreen('onboarding');
      return;
    }

    var allCompleted = availableLessons().every(function (item) {
      return isCompleted(item.id);
    });
    var completed = isCompleted(lesson.id);

    refs.continueLabel.textContent = allCompleted
      ? 'Все доступные уроки пройдены'
      : completed
        ? 'Повторить урок'
        : 'Продолжить обучение';
    refs.continueTitle.textContent = lesson.title;
    refs.continueText.textContent = allCompleted
      ? 'Вы прошли все доступные уроки. Новые появятся скоро.'
      : 'Вы остановились здесь. Продолжим с этого места.';
    refs.continueMeta.textContent = 'Урок ' + lesson.id + ' · ' +
      (TYPE_LABELS[lesson.type] || lesson.type) + ' · заданий: ' + taskCount(lesson);
    refs.continueButton.textContent = completed || allCompleted
      ? 'Повторить урок'
      : 'Продолжить урок';
    refs.continueButton.setAttribute('data-continue-id', String(lesson.id));
  }

  function startLesson(id) {
    var lessonId = Number(id);
    if (!isFinite(lessonId) || lessonId <= 0) {
      showScreen('onboarding');
      return;
    }

    pendingLessonId = lessonId;
    showScreen('loading');

    loadCatalog().then(function () {
      return getLessonData(lessonId);
    }).then(function (lesson) {
      if (!lesson || taskCount(lesson) === 0) {
        throw new Error('Урок не содержит заданий');
      }
      state.lesson = lesson;
      state.theoryIndex = 0;
      state.alphabetShown = false;
      state.taskIndex = 0;
      state.selected = [];
      state.correct = 0;
      state.answered = false;
      progress.currentLessonId = lesson.id;
      saveProgress();

      if (lesson.theorySteps.length > 0) {
        renderTheory();
        showScreen('theory');
      } else {
        var tasksReady = renderLesson();
        showScreen(tasksReady ? 'lesson' : 'alphabet');
      }
    }).catch(function (error) {
      if (window.console && typeof window.console.error === 'function') {
        window.console.error('[lessons] lesson load failed:', error);
      }
      showError('Не удалось загрузить урок. Проверьте, что сайт открыт через локальный сервер (например, Live Server), и попробуйте снова.');
    });
  }

  function escapeHtml(value) {
    var replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return String(value).replace(/[&<>"']/g, function (character) {
      return replacements[character];
    });
  }

  function theoryStepHtml(step) {
    if (typeof step === 'string') {
      return '<p>' + escapeHtml(step) + '</p>';
    }
    if (!step || typeof step !== 'object') {
      return '';
    }

    var title = step.title ? '<h3>' + escapeHtml(step.title) + '</h3>' : '';
    var body = '';

    if (step.html) {
      body = String(step.html);
    } else if (step.text) {
      body = '<p>' + escapeHtml(step.text) + '</p>';
    } else {
      body = Object.keys(step).filter(function (key) {
        return key !== 'title' && key !== 'text' && key !== 'html';
      }).map(function (key) {
        var value = step[key];
        if (value == null) {
          return '';
        }
        if (Array.isArray(value)) {
          value = value.join(', ');
        } else if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        return '<p><strong>' + escapeHtml(key) + ':</strong> ' + escapeHtml(value) + '</p>';
      }).join('');
    }

    if (!title && !body) {
      return '';
    }
    return '<div class="theory-inline-step">' + title + body + '</div>';
  }

  function buildTheoryHtml(theory) {
    if (!theory) {
      return '';
    }
    if (Array.isArray(theory)) {
      return theory.map(theoryStepHtml).join('');
    }
    return theoryStepHtml(theory);
  }

  function renderTheory() {
    var lesson = state.lesson;
    var step = lesson.theorySteps[state.theoryIndex];

    refs.theoryType.textContent = TYPE_LABELS[lesson.type] || lesson.type;
    refs.theoryTitle.textContent = step.title || lesson.title;
    refs.theoryContent.innerHTML = '';
    if (step.html) {
      refs.theoryContent.innerHTML = step.html;
    } else {
      refs.theoryContent.textContent = step.text;
    }
    refs.theoryCount.textContent = 'Страница ' + (state.theoryIndex + 1) + ' из ' + lesson.theorySteps.length;
    refs.theoryBack.disabled = state.theoryIndex === 0;
    refs.theoryNext.textContent = state.theoryIndex === lesson.theorySteps.length - 1
      ? (lesson.uiType === 'alphabet' ? 'К алфавиту' : 'К практике')
      : 'Далее';

    updateProgress(
      refs.theoryProgress,
      refs.theoryProgressWrap,
      state.theoryIndex,
      lesson.theorySteps.length,
      true
    );
  }

  function clearAlphabetSpeaking() {
    if (!refs.alphabetGrid) {
      return;
    }
    Array.prototype.forEach.call(
      refs.alphabetGrid.querySelectorAll('.alphabet-letter.is-speaking'),
      function (button) {
        button.classList.remove('is-speaking');
      }
    );
  }

  function speakLetterItem(item, button) {
    if (!window.Speech || typeof window.Speech.speakLetter !== 'function' || !window.Speech.isSupported()) {
      refs.alphabetStatus.textContent = 'Озвучивание не поддерживается этим браузером. Попробуйте Chrome, Edge или Safari.';
      refs.alphabetStatus.className = 'alphabet-status is-warning';
      return;
    }

    speechToken += 1;
    var token = speechToken;
    clearAlphabetSpeaking();
    button.classList.add('is-speaking');
    refs.alphabetStatus.textContent = 'Звучит: ' + item.letter + ' — «' + item.transcriptionRu + '»';
    refs.alphabetStatus.className = 'alphabet-status is-success';

    window.Speech.speakLetter(item, {
      onEnd: function () {
        if (token === speechToken) {
          button.classList.remove('is-speaking');
        }
      },
      onError: function () {
        if (token !== speechToken) {
          return;
        }
        button.classList.remove('is-speaking');
        refs.alphabetStatus.textContent = 'Не удалось озвучить букву. Попробуйте Chrome, Edge или Safari.';
        refs.alphabetStatus.className = 'alphabet-status is-warning';
      }
    });
  }

  function renderAlphabetLesson() {
    var lesson = state.lesson;
    var letters = Array.isArray(lesson.alphabet) ? lesson.alphabet : [];

    refs.alphabetGrid.innerHTML = '';
    refs.alphabetStatus.textContent = '';
    refs.alphabetStatus.className = 'alphabet-status';

    if (!letters.length) {
      refs.alphabetStatus.textContent = 'В уроке пока нет букв для озвучки.';
      refs.alphabetStatus.className = 'alphabet-status is-warning';
      return;
    }

    letters.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'alphabet-letter';
      button.setAttribute('role', 'listitem');
      button.setAttribute('data-alphabet-letter', item.letter);
      button.setAttribute('aria-label', 'Буква ' + item.letter + ', произносится «' + item.transcriptionRu + '»');

      var char = document.createElement('span');
      char.className = 'alphabet-letter__char';
      char.textContent = item.letter + ' ' + item.lower;

      var transcription = document.createElement('span');
      transcription.className = 'alphabet-letter__transcription';
      transcription.textContent = item.transcriptionRu;

      button.appendChild(char);
      button.appendChild(transcription);
      refs.alphabetGrid.appendChild(button);

      button.addEventListener('click', function () {
        speakLetterItem(item, button);
      });
    });
  }

  function renderLesson() {
    var lesson = state.lesson;

    if (lesson.uiType === 'alphabet' && !state.alphabetShown) {
      renderAlphabetLesson();
      return false;
    }

    var task = lesson.tasks[state.taskIndex];

    refs.lessonType.textContent = TYPE_LABELS[lesson.type] || lesson.type;
    refs.lessonTitle.textContent = lesson.title;

    var theoryHtml = lesson.theorySteps && lesson.theorySteps.length
      ? ''
      : buildTheoryHtml(lesson.theory);
    refs.lessonTheory.innerHTML = theoryHtml;
    refs.lessonTheory.hidden = !theoryHtml;

    refs.lessonCount.textContent = 'Задание ' + (state.taskIndex + 1) + ' из ' + lesson.tasks.length;
    refs.lessonQuestion.textContent = task.question;
    refs.lessonOptions.innerHTML = '';
    refs.lessonFeedback.textContent = '';
    refs.lessonFeedback.className = 'lesson-feedback';
    refs.lessonCheck.hidden = task.type !== 'multiple';
    refs.lessonCheck.textContent = 'Проверить';
    refs.lessonNext.hidden = true;
    refs.lessonNext.textContent = state.taskIndex === lesson.tasks.length - 1
      ? 'Завершить урок'
      : 'Далее';
    state.selected = [];

    task.options.forEach(function (option, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-option';
      button.textContent = option;
      button.setAttribute('data-lesson-option', String(index));
      if (task.type === 'multiple') {
        button.setAttribute('aria-pressed', 'false');
      }
      refs.lessonOptions.appendChild(button);
    });

    updateProgress(
      refs.lessonProgress,
      refs.lessonProgressWrap,
      state.taskIndex,
      lesson.tasks.length,
      state.answered
    );
    return true;
  }

  function selectLessonOption(index) {
    if (state.answered || !state.lesson) {
      return;
    }
    var task = state.lesson.tasks[state.taskIndex];

    if (task.type === 'multiple') {
      var position = state.selected.indexOf(index);
      var optionButton = refs.lessonOptions.children[index];
      if (position === -1) {
        state.selected.push(index);
      } else {
        state.selected.splice(position, 1);
      }
      if (optionButton) {
        optionButton.classList.toggle('is-selected', position === -1);
        optionButton.setAttribute('aria-pressed', position === -1 ? 'true' : 'false');
      }
      refs.lessonFeedback.textContent = '';
      refs.lessonFeedback.className = 'lesson-feedback';
      return;
    }

    var correct = task.correct.indexOf(index) !== -1;
    state.answered = true;
    if (correct) {
      state.correct += 1;
    }

    markOptions(refs.lessonOptions, [index], task.correct);
    refs.lessonFeedback.textContent = correct
      ? 'Верно!'
      : 'Не совсем. Правильный ответ: ' + task.options[task.correct[0]];
    refs.lessonFeedback.classList.toggle('is-success', correct);
    refs.lessonFeedback.classList.toggle('is-error', !correct);
    refs.lessonNext.hidden = false;
    updateProgress(
      refs.lessonProgress,
      refs.lessonProgressWrap,
      state.taskIndex,
      state.lesson.tasks.length,
      true
    );
    playSound(correct);
  }

  function checkLessonAnswer() {
    if (state.answered || !state.lesson) {
      return;
    }
    var task = state.lesson.tasks[state.taskIndex];
    if (task.type !== 'multiple') {
      return;
    }
    if (!state.selected.length) {
      refs.lessonFeedback.textContent = 'Выберите хотя бы один вариант.';
      refs.lessonFeedback.className = 'lesson-feedback is-error';
      return;
    }

    var selected = state.selected.slice().sort(function (a, b) { return a - b; });
    var correct = task.correct.slice().sort(function (a, b) { return a - b; });
    var isCorrect = selected.length === correct.length && selected.every(function (index, position) {
      return index === correct[position];
    });

    state.answered = true;
    if (isCorrect) {
      state.correct += 1;
    }

    markOptions(refs.lessonOptions, state.selected, task.correct);
    refs.lessonFeedback.textContent = isCorrect
      ? 'Верно!'
      : 'Не совсем. Правильные ответы: ' + task.correct.map(function (index) {
        return task.options[index];
      }).join(', ');
    refs.lessonFeedback.classList.toggle('is-success', isCorrect);
    refs.lessonFeedback.classList.toggle('is-error', !isCorrect);
    refs.lessonCheck.hidden = true;
    refs.lessonNext.hidden = false;
    updateProgress(
      refs.lessonProgress,
      refs.lessonProgressWrap,
      state.taskIndex,
      state.lesson.tasks.length,
      true
    );
    playSound(isCorrect);
  }

  function finishLesson() {
    var lesson = state.lesson;
    if (!isCompleted(lesson.id)) {
      progress.completed.push(lesson.id);
    }
    var next = nextAvailableLesson(lesson.id);
    progress.currentLessonId = next ? next.id : lesson.id;
    saveProgress();
    renderResult(lesson, next);
    showScreen('result');
  }

  function renderResult(lesson, next) {
    var total = lesson.tasks.length;
    refs.resultTitle.textContent = state.correct === total ? 'Идеально!' : 'Урок пройден!';
    refs.resultScore.textContent = 'Правильно ' + state.correct + ' из ' + total;
    refs.resultText.textContent = next
      ? 'Следующий урок: ' + next.title
      : 'Вы прошли все доступные уроки. Новые появятся скоро.';
    refs.resultNext.textContent = next
      ? 'Следующий урок'
      : 'Пройти ещё раз';
    refs.resultNext.setAttribute('data-next-id', String(next ? next.id : lesson.id));
  }

  function startTest() {
    state.testIndex = 0;
    state.testCorrect = 0;
    state.testAnswered = false;
    renderTest();
    showScreen('test');
  }

  function renderTest() {
    var task = levelTest[state.testIndex];

    refs.testCount.textContent = 'Вопрос ' + (state.testIndex + 1) + ' из ' + levelTest.length;
    refs.testQuestion.textContent = task.question;
    refs.testOptions.innerHTML = '';
    refs.testFeedback.textContent = '';
    refs.testFeedback.className = 'lesson-feedback';
    refs.testNext.hidden = true;
    refs.testNext.textContent = state.testIndex === levelTest.length - 1
      ? 'Завершить тест'
      : 'Далее';

    task.options.forEach(function (option, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-option';
      button.textContent = option;
      button.setAttribute('data-test-option', String(index));
      refs.testOptions.appendChild(button);
    });

    updateProgress(
      refs.testProgress,
      refs.testProgressWrap,
      state.testIndex,
      levelTest.length,
      state.testAnswered
    );
  }

  function selectTestOption(index) {
    if (state.testAnswered) {
      return;
    }
    var task = levelTest[state.testIndex];
    var correct = index === task.answer;

    state.testAnswered = true;
    if (correct) {
      state.testCorrect += 1;
    }

    markOptions(refs.testOptions, index, task.answer);
    refs.testFeedback.textContent = correct
      ? 'Верно!'
      : 'Правильный ответ: ' + task.options[task.answer];
    refs.testFeedback.classList.toggle('is-success', correct);
    refs.testFeedback.classList.toggle('is-error', !correct);
    refs.testNext.hidden = false;
    updateProgress(
      refs.testProgress,
      refs.testProgressWrap,
      state.testIndex,
      levelTest.length,
      true
    );
    playSound(correct);
  }

  function resetProgress() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      /* localStorage may be unavailable */
    }
    progress = {
      currentLessonId: null,
      completed: []
    };
    pendingLessonId = null;
    showScreen('onboarding');
  }

  function boot() {
    if (progress.currentLessonId || progress.completed.length) {
      showScreen('loading');
      loadCatalog().then(function () {
        renderContinue();
        showScreen('continue');
      }).catch(function (error) {
        if (window.console && typeof window.console.error === 'function') {
          window.console.error('[lessons] course load failed:', error);
        }
        showError('Не удалось загрузить программу. Проверьте, что сайт открыт через локальный сервер (например, Live Server), и попробуйте снова.');
      });
    } else {
      showScreen('onboarding');
    }
  }

  document.addEventListener('click', function (event) {
    var actionElement = event.target.closest('[data-action]');
    if (actionElement) {
      var action = actionElement.getAttribute('data-action');
      if (action === 'start-zero') {
        startLesson(1);
      } else if (action === 'start-test') {
        startTest();
      } else if (action === 'continue') {
        var id = Number(actionElement.getAttribute('data-continue-id'));
        startLesson(id || resumeLessonId());
      } else if (action === 'retry') {
        if (pendingLessonId) {
          startLesson(pendingLessonId);
        } else {
          boot();
        }
      } else if (action === 'reset') {
        resetProgress();
      } else if (action === 'exit') {
        renderContinue();
        showScreen('continue');
      }
      return;
    }

    var testOption = event.target.closest('[data-test-option]');
    if (testOption) {
      selectTestOption(Number(testOption.getAttribute('data-test-option')));
      return;
    }

    var lessonOption = event.target.closest('[data-lesson-option]');
    if (lessonOption) {
      selectLessonOption(Number(lessonOption.getAttribute('data-lesson-option')));
    }
  });

  refs.testNext.addEventListener('click', function () {
    if (!state.testAnswered) {
      return;
    }
    if (state.testIndex < levelTest.length - 1) {
      state.testIndex += 1;
      state.testAnswered = false;
      renderTest();
    } else {
      startLesson(state.testCorrect === levelTest.length ? 2 : 1);
    }
  });

  refs.theoryNext.addEventListener('click', function () {
    if (!state.lesson || !state.lesson.theorySteps.length) {
      return;
    }
    if (state.theoryIndex < state.lesson.theorySteps.length - 1) {
      state.theoryIndex += 1;
      renderTheory();
    } else {
      var tasksReady = renderLesson();
      showScreen(tasksReady ? 'lesson' : 'alphabet');
    }
  });

  refs.theoryBack.addEventListener('click', function () {
    if (!state.lesson || state.theoryIndex <= 0) {
      return;
    }
    state.theoryIndex -= 1;
    renderTheory();
  });

  refs.alphabetBack.addEventListener('click', function () {
    if (!state.lesson) {
      return;
    }
    if (window.Speech && typeof window.Speech.cancel === 'function') {
      window.Speech.cancel();
    }
    clearAlphabetSpeaking();
    state.alphabetShown = false;
    if (state.lesson.theorySteps.length) {
      state.theoryIndex = state.lesson.theorySteps.length - 1;
      renderTheory();
      showScreen('theory');
    }
  });

  refs.alphabetStartTasks.addEventListener('click', function () {
    if (!state.lesson || state.lesson.uiType !== 'alphabet') {
      return;
    }
    if (window.Speech && typeof window.Speech.cancel === 'function') {
      window.Speech.cancel();
    }
    clearAlphabetSpeaking();
    state.alphabetShown = true;
    state.taskIndex = 0;
    state.selected = [];
    state.correct = 0;
    state.answered = false;
    var tasksReady = renderLesson();
    if (tasksReady) {
      showScreen('lesson');
    }
  });

  refs.lessonCheck.addEventListener('click', checkLessonAnswer);

  refs.lessonNext.addEventListener('click', function () {
    if (!state.answered || !state.lesson) {
      return;
    }
    if (state.taskIndex < state.lesson.tasks.length - 1) {
      state.taskIndex += 1;
      state.answered = false;
      renderLesson();
    } else {
      finishLesson();
    }
  });

  refs.resultNext.addEventListener('click', function () {
    var id = Number(refs.resultNext.getAttribute('data-next-id'));
    if (id) {
      startLesson(id);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
