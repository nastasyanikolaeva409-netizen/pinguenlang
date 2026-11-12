/*!
 * пингвинёнок — English dictionary (en)
 * ---------------------------------------------------------------
 * Format: nested objects, accessed via I18N.t('path.to.key').
 * Plurals: { one, few, many, other } object, selected by Intl.PluralRules.
 * Interpolation: {word}, {year}, {n} and any named values.
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.en = {
    /* Kept for compatibility with the old script.js.
       New code should use meta.title. */
    pageTitle: 'Penguin — learn languages in 15 minutes a day',

    meta: {
      title: 'Penguin — learn languages in 15 minutes a day',
      description: 'Penguin — free drills, live conversation partners and exam prep for IELTS and Russian state exams. Learn languages in 15 minutes a day.',
      ogTitle: 'Penguin — learn languages in 15 minutes a day',
      ogDescription: 'Free drills, live conversation partners and exam prep for IELTS and Russian state exams.',
      ogLocale: 'en_US'
    },

    a11y: {
      logoHome: 'Penguin — home',
      primaryNav: 'Main navigation',
      langToggle: 'Choose site language',
      langMenu: 'Site language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      mobileMenu: 'Mobile menu',
      mobileNav: 'Mobile navigation',
      heroMascot: 'Penguin in a blue hat reading a book',
      exerciseAnswer: 'Your translation',
      examTabs: 'Exam type',
      audienceTabs: 'Who the service is for',
      rating: 'Rated 5 out of 5',
      reviewPrev: 'Previous review',
      reviewNext: 'Next review',
      reviewsViewport: 'Student reviews',
      footerSections: 'Sections',
      footerCourses: 'Courses',
      addWord: 'Add the word “{word}”',
      removeWord: 'Remove the word “{word}”'
    },

    skip: {
      link: 'Skip to content'
    },

    brand: {
      name: 'Penguin',
      tagline: 'Learn a language with Penguin'
    },

    nav: {
      languages: 'Languages',
      how: 'How it works',
      exams: 'Exams',
      audience: "Who it's for",
      reviews: 'Reviews',
      faq: 'FAQ'
    },

    lang: {
      label: 'Site language'
    },

    hero: {
      line1: 'Learn languages',
      line2pre: 'with ',
      accent: 'Penguin',
      line2post: ' —',
      line3: 'just 15 minutes a day',
      subtitle: 'Free drills, live conversation partners and exam prep for IELTS and school exams.',
      pill1: '6 languages',
      pill2: 'Daily streaks',
      pill3: 'Exams · IELTS'
    },

    btn: {
      start: 'Start for free',
      account: 'I already have an account'
    },

    flag: {
      en: 'English',
      fr: 'French',
      de: 'German',
      es: 'Spanish',
      it: 'Italian',
      cn: 'Chinese'
    },

    languages: {
      eyebrow: 'Choose a language',
      title: 'Which language will open new doors for you?',
      lead: 'Courses from beginner to fluent. Pick a language — your first lesson takes just a couple of minutes.',
      cards: {
        en: { name: 'English', students: '12.4M learners' },
        fr: { name: 'French', students: '3.1M learners' },
        de: { name: 'German', students: '2.7M learners' },
        es: { name: 'Spanish', students: '4.2M learners' },
        it: { name: 'Italian', students: '1.5M learners' },
        cn: { name: 'Chinese', students: '980K learners' }
      }
    },

    method: {
      eyebrow: 'Exercises and drills',
      title: 'Fun, fast and backed by science',
      lead: 'Every lesson feels like a little game. Try it right here — build the translation from the words.',
      features: {
        short: {
          title: 'Short exercises',
          text: 'Lessons of 3–5 minutes: translation, listening, pronunciation and phrase building. You can study on the subway or in a queue.'
        },
        smart: {
          title: 'Smart drills',
          text: 'The system remembers your mistakes and brings difficult words back exactly when you start to forget them.'
        },
        speaking: {
          title: 'Speak out loud',
          text: 'The pronunciation trainer listens to you and suggests which sounds to work on.'
        }
      }
    },

    exercise: {
      label: 'Translate the phrase',
      hint: 'Tap the words below',
      check: 'Check',
      reset: 'Reset',
      feedbackEmpty: 'First, build the translation from the words.',
      feedbackCorrect: 'Correct! “I love to travel” is exactly right.',
      feedbackWrong: 'Almost! Check the word order and try again.'
    },

    exams: {
      eyebrow: 'Exam preparation',
      title: 'Get the Russian State Exam (EGE) and IELTS score you need',
      tabs: {
        ege: 'EGE',
        oge: 'OGE',
        ielts: 'IELTS',
        toefl: 'TOEFL & more'
      },
      ege: {
        tag: 'English, grade 11',
        score: '+23',
        unit: 'points',
        note: 'average gain in 3 months',
        text: 'We cover all 4 sections: listening, reading, grammar and vocabulary, and writing. Tasks follow the Russian State Exam (EGE) format, with automatic checking and a breakdown of every mistake.'
      },
      oge: {
        tag: 'English, grade 9',
        score: '+19',
        unit: 'points',
        note: 'average gain in 3 months',
        text: 'Preparation for the OGE across all sections: listening, reading, grammar and writing. Real task formats, a timer and a breakdown of every mistake.'
      },
      ielts: {
        tag: 'English, 18+',
        score: '+1.5',
        unit: 'points',
        note: 'average gain in 3 months',
        text: 'We train all 4 IELTS modules: Listening, Reading, Writing and Speaking. Essays are scored against the criteria, and Speaking comes with feedback.'
      },
      toefl: {
        tag: 'English, 18+',
        score: '+22',
        unit: 'points',
        note: 'average gain in 3 months',
        text: 'Preparation for TOEFL, the Duolingo English Test and other international exams: strategies, mock tests and work on your weak spots.'
      },
      bullet1: '2,000+ exam-format tasks',
      bullet2: 'Timed mock tests',
      bullet3: 'Writing and essay templates',
      cta: 'Take a practice test',
      badgeScore: 'out of 100 on a mock test',
      badgeReady: 'Exam ready'
    },

    audience: {
      eyebrow: "Who it's for",
      title: 'Anyone can learn — at any age',
      tabs: {
        adults: 'Adults',
        school: 'School students',
        students: 'University students',
        travellers: 'Travellers',
        kids: 'Kids and parents'
      },
      adults: {
        title: 'Adults — for work and career',
        text: 'Business correspondence, calls, presentations and interviews. Business vocabulary courses and a negotiation trainer.',
        bullet1: 'Business English',
        bullet2: 'Interview preparation',
        bullet3: '10 minutes at lunch',
        value: '10 minutes',
        label: 'during your lunch break'
      },
      school: {
        title: 'School students — grades and exams',
        text: 'We help with homework, improve grades and prepare for the OGE and EGE without cramming — with short tasks.',
        bullet1: 'Grades 5–11 curriculum',
        bullet2: 'Homework help',
        bullet3: 'OGE and EGE preparation',
        value: '+23 points',
        label: 'average EGE gain'
      },
      students: {
        title: 'University students — studies and internships',
        text: "Academic English, vocabulary for lectures and internships, and preparation for IELTS and TOEFL for master's programmes.",
        bullet1: 'Academic vocabulary',
        bullet2: 'Essays and presentations',
        bullet3: 'IELTS and TOEFL',
        value: '7.0',
        label: 'target IELTS score'
      },
      travellers: {
        title: 'Travellers — language for the road',
        text: 'Conversational phrasebook courses: airport, hotel, café and train station. Learn before your trip in just a couple of weeks.',
        bullet1: 'Travel phrases',
        bullet2: 'Listening practice',
        bullet3: 'Two-week course',
        value: '2 weeks',
        label: 'to travel with confidence'
      },
      kids: {
        title: 'Kids and parents — from age 4',
        text: 'Playful lessons with Penguin: children learn on their own while parents see progress in a report.',
        bullet1: 'Game-based tasks',
        bullet2: 'Rewards and streaks',
        bullet3: 'Parent report',
        value: 'from age 4',
        label: 'fun and pressure-free'
      }
    },

    motivation: {
      eyebrow: 'Motivation',
      title: "You won't quit — it's addictive",
      lead: 'We turned learning into a game: XP, streaks, leagues and rewards. 15 minutes a day gives you more than an hour once a week.',
      items: {
        streaks: {
          title: 'Day streaks',
          text: 'Study every day and keep your streak alive — the habit builds itself.'
        },
        leagues: {
          title: 'Leagues and rankings',
          text: 'Compete with learners from all over the country and climb the leagues.'
        },
        progress: {
          title: 'Visible progress',
          text: 'Stats for words, level and points — you can see what you have already achieved.'
        },
        reminders: {
          title: 'Gentle reminders',
          text: 'We will nudge you at a convenient time so you do not forget your lesson.'
        }
      }
    },

    streak: {
      label: 'Day streak',
      /* Suffix only: the number is rendered separately in data-streak-count. */
      days: {
        one: 'day in a row',
        other: 'days in a row'
      },
      messageStart: 'Start your streak — one lesson today and the day counts.',
      messageWeek: 'A whole week in a row! Keep it up and do not stop.',
      messageKeep: 'Great start — keep your streak alive!',
      done: 'Complete a lesson today',
      reset: 'Reset demo'
    },

    weekdays: {
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat',
      sun: 'Sun'
    },

    reviews: {
      eyebrow: 'Reviews',
      title: 'Students love us',
      rating: '4.9',
      count: '120,000+ ratings',
      items: {
        anna: {
          avatar: 'A',
          name: 'Anna, 34',
          role: 'Marketing manager',
          quote: 'I studied for 15 minutes at lunch. Six months later I had my first call with international partners without an interpreter.'
        },
        misha: {
          avatar: 'M',
          name: 'Misha, 17',
          role: 'School graduate',
          quote: 'I mostly prepared for the EGE in English here. The timed mock tests really saved me — I scored 91.'
        },
        olga: {
          avatar: 'O',
          name: 'Olga, 41',
          role: "Sonia's mum, 8",
          quote: 'My daughter asks to study herself — for her it is a game. And I can see her progress in the parent report.'
        },
        dmitry: {
          avatar: 'D',
          name: 'Dmitry, 22',
          role: 'University student',
          quote: "I prepared for IELTS for my master's degree. The criteria-based essay feedback helped me raise Writing from 5.5 to 7.0."
        },
        irina: {
          avatar: 'I',
          name: 'Irina, 52',
          role: 'Traveller',
          quote: 'Before a trip to Italy I took a two-week phrasebook course. I felt confident in cafés and at the train station.'
        },
        artem: {
          avatar: 'A',
          name: 'Artem, 29',
          role: 'Developer',
          quote: 'Streaks are genius. 214 days in a row and I have not missed one. My German is now B1.'
        }
      }
    },

    faq: {
      eyebrow: 'Questions and answers',
      title: 'Frequently asked questions',
      items: {
        free: {
          question: 'Is it really free?',
          answer: 'Yes. All core courses, exercises and drills are free forever. There is an optional Plus subscription — no ads, unlimited attempts and extended exam mock tests.'
        },
        level: {
          question: 'What level can I start at?',
          answer: 'Any level. A short 3-minute test will determine your level and build a programme — from scratch or from where you left off. You can switch levels at any time.'
        },
        time: {
          question: 'How much time do I need?',
          answer: '15 minutes a day is enough. Lessons are short, so you can study for 3–5 minutes on the subway or in a queue — and your streak will not break.'
        },
        exams: {
          question: 'Will this help me pass the EGE or IELTS?',
          answer: 'Yes. Tasks follow the EGE and IELTS formats, with timed mock tests, writing feedback and a breakdown of every mistake. The average gain over 3 months is +23 points.'
        },
        kids: {
          question: 'Is the service suitable for children?',
          answer: 'Yes, children can start at age 4. Kids mode has game-based tasks and rewards, while parents receive a progress report and recommendations.'
        },
        offline: {
          question: 'Can I study without the internet?',
          answer: 'Yes. You can download lessons in the app and study offline — your progress syncs as soon as you are back online.'
        }
      }
    },

    cta: {
      title: 'Learn a language with Penguin',
      text: 'Your first lesson in a minute. Free, no card and no commitment.'
    },

    footer: {
      brandText: 'Exercises, drills and exam preparation — for adults, children and everyone who loves languages.',
      sectionsTitle: 'Sections',
      coursesTitle: 'Courses',
      contactsTitle: 'Contacts',
      support: '24/7 chat support',
      copyright: '© {year} Penguin. All rights reserved.'
    }
  };
})(window);
