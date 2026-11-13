/* ==========================================================================
   пингвинёнок — course loader
   Загружает course.json, chapter.json и lesson.json через fetch.
   Все пути относительные: ./languages/... и ./data/...
   ========================================================================== */
(function (global) {
  'use strict';

  var COURSE_ROOT = './languages/english/';
  var LANGUAGES_PATH = './data/languages.json';

  var coursePromise = null;
  var languagesPromise = null;
  var lessonPromises = {};

  function fetchJson(path) {
    if (typeof global.fetch !== 'function') {
      return Promise.reject(new Error('fetch не поддерживается этим браузером'));
    }
    return global.fetch(path, { cache: 'no-cache' }).then(function (response) {
      if (!response.ok) {
        throw new Error('Не удалось загрузить ' + path + ': HTTP ' + response.status);
      }
      return response.json();
    });
  }

  function loadCourse() {
    if (coursePromise) {
      return coursePromise;
    }

    coursePromise = fetchJson(COURSE_ROOT + 'course.json').then(function (course) {
      var chapters = Array.isArray(course.chapters) ? course.chapters : [];

      return Promise.all(chapters.map(function (chapter) {
        var chapterSlug = chapter.slug || chapter.id;
        var chapterPath = COURSE_ROOT + 'chapters/' + chapterSlug + '/chapter.json';

        return fetchJson(chapterPath).then(function (chapterData) {
          var lessons = Array.isArray(chapterData.lessons) ? chapterData.lessons : [];

          var mapped = lessons.map(function (lesson) {
            var lessonSlug = lesson.slug || lesson.id;
            var taskCount = lesson.taskCount != null
              ? Number(lesson.taskCount)
              : (Array.isArray(lesson.tasks) ? lesson.tasks.length : 0);

            return {
              id: Number(lesson.id),
              title: lesson.title || '',
              type: lesson.type || 'vocabulary',
              slug: lessonSlug,
              chapterSlug: chapterSlug,
              chapterTitle: chapterData.title || chapter.title || '',
              taskCount: isFinite(taskCount) ? taskCount : 0,
              path: COURSE_ROOT + 'chapters/' + chapterSlug +
                '/lessons/' + lessonSlug + '/lesson.json'
            };
          });

          return {
            id: chapterData.id || chapterSlug,
            slug: chapterSlug,
            title: chapterData.title || chapter.title || '',
            lessons: mapped
          };
        });
      })).then(function (chaptersData) {
        var lessons = [];
        chaptersData.forEach(function (chapter) {
          lessons = lessons.concat(chapter.lessons);
        });

        return {
          id: course.id,
          language: course.language,
          title: course.title,
          description: course.description,
          level: course.level,
          chapters: chaptersData,
          lessons: lessons
        };
      });
    }).catch(function (error) {
      coursePromise = null;
      throw error;
    });

    return coursePromise;
  }

  function loadLesson(lessonId) {
    var id = Number(lessonId);
    if (!isFinite(id) || id <= 0) {
      return Promise.reject(new Error('Некорректный id урока: ' + lessonId));
    }
    if (lessonPromises[id]) {
      return lessonPromises[id];
    }

    lessonPromises[id] = loadCourse().then(function (course) {
      var summary = null;
      for (var i = 0; i < course.lessons.length; i += 1) {
        if (course.lessons[i].id === id) {
          summary = course.lessons[i];
          break;
        }
      }
      if (!summary) {
        throw new Error('Урок ' + id + ' не найден в course.json');
      }

      return fetchJson(summary.path).then(function (lesson) {
        if (lesson.id == null) {
          lesson.id = summary.id;
        }
        if (!lesson.title) {
          lesson.title = summary.title;
        }
        if (!lesson.type) {
          lesson.type = summary.type;
        }
        return lesson;
      });
    }).catch(function (error) {
      delete lessonPromises[id];
      throw error;
    });

    return lessonPromises[id];
  }

  function loadLanguages() {
    if (languagesPromise) {
      return languagesPromise;
    }
    languagesPromise = fetchJson(LANGUAGES_PATH).catch(function (error) {
      languagesPromise = null;
      throw error;
    });
    return languagesPromise;
  }

  function clearCache() {
    coursePromise = null;
    languagesPromise = null;
    lessonPromises = {};
  }

  global.CourseLoader = {
    courseRoot: COURSE_ROOT,
    loadCourse: loadCourse,
    loadLesson: loadLesson,
    loadLanguages: loadLanguages,
    clearCache: clearCache
  };
})(window);
