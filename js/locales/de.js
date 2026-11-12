/*!
 * пингвинёнок — Deutsch (de)
 * ---------------------------------------------------------------
 * Формат: вложенные объекты, доступ через I18N.t('path.to.key').
 * Плюрализация: { one, other } + Intl.PluralRules.
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.de = {
    pageTitle: 'Pinguin — Sprachen lernen in 15 Minuten am Tag',

    meta: {
      title: 'Pinguin — Sprachen lernen in 15 Minuten am Tag',
      description: 'Pinguin — kostenlose Übungen, echte Gesprächspartner und Vorbereitung auf EGE und IELTS. Lerne Sprachen in 15 Minuten am Tag.',
      ogTitle: 'Pinguin — Sprachen lernen in 15 Minuten am Tag',
      ogDescription: 'Kostenlose Übungen, echte Gesprächspartner und Vorbereitung auf EGE und IELTS.',
      ogLocale: 'de_DE'
    },

    a11y: {
      logoHome: 'Pinguin — zur Startseite',
      primaryNav: 'Hauptnavigation',
      langToggle: 'Sprache der Website wählen',
      langMenu: 'Sprache der Website',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      mobileMenu: 'Mobiles Menü',
      mobileNav: 'Mobile Navigation',
      heroMascot: 'Pinguin mit blauer Mütze liest ein Buch',
      exerciseAnswer: 'Zusammengesetzte Übersetzung',
      examTabs: 'Prüfungsart',
      audienceTabs: 'Für wen der Dienst ist',
      rating: 'Bewertung: 5 von 5',
      reviewPrev: 'Vorherige Bewertung',
      reviewNext: 'Nächste Bewertung',
      reviewsViewport: 'Bewertungen der Lernenden',
      footerSections: 'Bereiche',
      footerCourses: 'Kurse',
      addWord: 'Wort „{word}“ hinzufügen',
      removeWord: 'Wort „{word}“ entfernen'
    },

    skip: {
      link: 'Zum Inhalt springen'
    },

    brand: {
      name: 'Pinguin',
      logoPrimary: 'Ping',
      logoAccent: 'uin',
      tagline: 'Lerne eine Sprache mit Pinguin'
    },

    nav: {
      languages: 'Sprachen',
      how: "So funktioniert's",
      exams: 'Prüfungen',
      audience: 'Für wen',
      reviews: 'Bewertungen',
      faq: 'FAQ'
    },

    lang: {
      label: 'Sprache der Website'
    },

    hero: {
      line1: 'Sprachen lernen',
      line2pre: 'mit ',
      accent: 'Pinguin',
      line2post: ' —',
      line3: 'nur 15 Minuten am Tag',
      subtitle: 'Kostenlose Übungen, echte Gesprächspartner und Vorbereitung auf EGE und IELTS.',
      pill1: '6 Sprachen',
      pill2: 'Tägliche Serien',
      pill3: 'Prüfungen · IELTS'
    },

    btn: {
      start: 'Kostenlos starten',
      account: 'Ich habe schon ein Konto'
    },

    flag: {
      en: 'Englisch',
      fr: 'Französisch',
      de: 'Deutsch',
      es: 'Spanisch',
      it: 'Italienisch',
      cn: 'Chinesisch'
    },

    languages: {
      eyebrow: 'Wähle eine Sprache',
      title: 'Welche Sprache öffnet dir neue Türen?',
      lead: 'Kurse von null bis zur fließenden Beherrschung. Wähle eine Sprache — die erste Lektion dauert nur ein paar Minuten.',
      studentsTemplate: '{count} Lernende',
      cards: {
        en: { name: 'Englisch', students: '12,4 Mio. Lernende' },
        fr: { name: 'Französisch', students: '3,1 Mio. Lernende' },
        de: { name: 'Deutsch', students: '2,7 Mio. Lernende' },
        es: { name: 'Spanisch', students: '4,2 Mio. Lernende' },
        it: { name: 'Italienisch', students: '1,5 Mio. Lernende' },
        cn: { name: 'Chinesisch', students: '980.000 Lernende' }
      }
    },

    method: {
      eyebrow: 'Übungen und Trainer',
      title: 'Spaßig, schnell und wissenschaftlich fundiert',
      lead: 'Jede Lektion fühlt sich wie ein kleines Spiel an. Probier es gleich hier aus — setze die Übersetzung aus Wörtern zusammen.',
      features: {
        short: {
          title: 'Kurze Übungen',
          text: 'Lektionen von 3–5 Minuten: Übersetzen, Hören, Aussprache und Sätze bauen. Lernen geht in der U-Bahn oder in der Warteschlange.'
        },
        smart: {
          title: 'Intelligente Trainer',
          text: 'Das System merkt sich deine Fehler und wiederholt schwierige Wörter genau dann, wenn du sie zu vergessen beginnst.'
        },
        speaking: {
          title: 'Sprich laut',
          text: 'Der Aussprachetrainer hört dir zu und zeigt, welche Laute du noch üben solltest.'
        }
      }
    },

    exercise: {
      label: 'Übersetze den Satz',
      hint: 'Tippe die Wörter unten an',
      check: 'Prüfen',
      reset: 'Zurücksetzen',
      feedbackEmpty: 'Setze zuerst die Übersetzung aus den Wörtern zusammen.',
      feedbackCorrect: 'Richtig! „I love to travel“ — genau so.',
      feedbackWrong: 'Fast! Prüfe die Wortstellung und versuche es noch einmal.'
    },

    exams: {
      eyebrow: 'Prüfungsvorbereitung',
      title: 'Erreiche im EGE und IELTS genau die Punktzahl, die du brauchst',
      tabs: {
        ege: 'EGE',
        oge: 'OGE',
        ielts: 'IELTS',
        toefl: 'TOEFL & mehr'
      },
      ege: {
        tag: 'Englisch, 11. Klasse',
        score: '+23',
        unit: 'Punkte',
        note: 'durchschnittliche Verbesserung in 3 Monaten',
        text: 'Wir behandeln alle 4 Bereiche: Hören, Lesen, Grammatik und Wortschatz sowie Schreiben. Aufgaben im EGE-Format, automatische Prüfung und eine Auswertung jedes Fehlers.'
      },
      oge: {
        tag: 'Englisch, 9. Klasse',
        score: '+19',
        unit: 'Punkte',
        note: 'durchschnittliche Verbesserung in 3 Monaten',
        text: 'Vorbereitung auf das OGE in allen Bereichen: Hören, Lesen, Grammatik und Schreiben. Echte Aufgabenformate, Timer und eine Auswertung jedes Fehlers.'
      },
      ielts: {
        tag: 'Englisch, 18+',
        score: '+1,5',
        unit: 'Punkte',
        note: 'durchschnittliche Verbesserung in 3 Monaten',
        text: 'Wir trainieren alle 4 IELTS-Module: Listening, Reading, Writing und Speaking. Aufsätze werden nach Kriterien bewertet, Speaking gibt es mit Feedback.'
      },
      toefl: {
        tag: 'Englisch, 18+',
        score: '+22',
        unit: 'Punkte',
        note: 'durchschnittliche Verbesserung in 3 Monaten',
        text: 'Vorbereitung auf TOEFL, den Duolingo English Test und andere internationale Prüfungen: Strategien, Probetests und Arbeit an deinen Schwächen.'
      },
      bullet1: '2.000+ Aufgaben im Prüfungsformat',
      bullet2: 'Probetests mit Timer',
      bullet3: 'Vorlagen für Schreiben und Aufsätze',
      cta: 'Probetest machen',
      badgeScore: 'von 100 im Probestest',
      badgeReady: 'Prüfungsbereit'
    },

    audience: {
      eyebrow: 'Für wen',
      title: 'Jeder kann lernen — in jedem Alter',
      tabs: {
        adults: 'Erwachsene',
        school: 'Schülerinnen und Schüler',
        students: 'Studierende',
        travellers: 'Reisende',
        kids: 'Kinder und Eltern'
      },
      adults: {
        title: 'Erwachsene — für Beruf und Karriere',
        text: 'Geschäftliche Korrespondenz, Calls, Präsentationen und Vorstellungsgespräche. Kurse zu Business-Wortschatz und ein Trainer für Verhandlungen.',
        bullet1: 'Business-Englisch',
        bullet2: 'Vorbereitung auf Vorstellungsgespräche',
        bullet3: '10 Minuten in der Mittagspause',
        value: '10 Minuten',
        label: 'in der Mittagspause'
      },
      school: {
        title: 'Schülerinnen und Schüler — Noten und Prüfungen',
        text: 'Wir helfen bei den Hausaufgaben, verbessern die Noten und bereiten ohne Pauken auf OGE und EGE vor — mit kurzen Aufgaben.',
        bullet1: 'Lehrplan der Klassen 5–11',
        bullet2: 'Hilfe bei Hausaufgaben',
        bullet3: 'Vorbereitung auf OGE und EGE',
        value: '+23 Punkte',
        label: 'durchschnittliche EGE-Verbesserung'
      },
      students: {
        title: 'Studierende — Studium und Praktika',
        text: 'Akademisches Englisch, Wortschatz für Vorlesungen und Praktika, Vorbereitung auf IELTS und TOEFL für den Master.',
        bullet1: 'Akademischer Wortschatz',
        bullet2: 'Aufsätze und Präsentationen',
        bullet3: 'IELTS und TOEFL',
        value: '7,0',
        label: 'Zielpunktzahl IELTS'
      },
      travellers: {
        title: 'Reisende — Sprache für unterwegs',
        text: 'Konversationskurse als Sprachführer: Flughafen, Hotel, Café und Bahnhof. Lerne in ein paar Wochen vor der Reise.',
        bullet1: 'Reisefloskeln',
        bullet2: 'Hörverstehen',
        bullet3: 'Kurs in 2 Wochen',
        value: '2 Wochen',
        label: 'bis zur sicheren Reise'
      },
      kids: {
        title: 'Kinder und Eltern — ab 4 Jahren',
        text: 'Spielerische Lektionen mit Pinguin: Kinder lernen selbstständig, Eltern sehen den Fortschritt im Bericht.',
        bullet1: 'Spielerische Aufgaben',
        bullet2: 'Belohnungen und Serien',
        bullet3: 'Elternbericht',
        value: 'ab 4 Jahren',
        label: 'mit Spaß und ohne Druck'
      }
    },

    motivation: {
      eyebrow: 'Motivation',
      title: 'Du bleibst dran — weil es süchtig macht',
      lead: 'Wir haben Lernen in ein Spiel verwandelt: XP, Serien, Ligen und Belohnungen. 15 Minuten am Tag bringen mehr als eine Stunde pro Woche.',
      items: {
        streaks: {
          title: 'Tagessträhnen',
          text: 'Lerne jeden Tag und halte deine Serie am Leben — die Gewohnheit entsteht von selbst.'
        },
        leagues: {
          title: 'Ligen und Ranglisten',
          text: 'Tritt gegen Lernende aus dem ganzen Land an und steige in den Ligen auf.'
        },
        progress: {
          title: 'Sichtbarer Fortschritt',
          text: 'Statistiken zu Wörtern, Niveau und Punkten — du siehst, was du schon geschafft hast.'
        },
        reminders: {
          title: 'Sanfte Erinnerungen',
          text: 'Wir erinnern dich zur passenden Zeit, damit du deine Lektion nicht vergisst.'
        }
      }
    },

    streak: {
      label: 'Tagessträhne',
      days: {
        one: 'Tag in Folge',
        other: 'Tage in Folge'
      },
      messageStart: 'Starte deine Serie — eine Lektion heute und der Tag zählt.',
      messageWeek: 'Eine ganze Woche in Folge! Bleib dran und hör nicht auf.',
      messageKeep: 'Guter Start — halte deine Serie am Leben!',
      done: 'Heute eine Lektion machen',
      reset: 'Demo zurücksetzen'
    },

    weekdays: {
      mon: 'Mo',
      tue: 'Di',
      wed: 'Mi',
      thu: 'Do',
      fri: 'Fr',
      sat: 'Sa',
      sun: 'So'
    },

    reviews: {
      eyebrow: 'Bewertungen',
      title: 'Lernende lieben uns',
      rating: '4,9',
      count: '120.000+ Bewertungen',
      countTemplate: '{count}+ Bewertungen',
      items: {
        anna: {
          avatar: 'A',
          name: 'Anna, 34',
          role: 'Marketing-Managerin',
          quote: 'Ich habe mittags 15 Minuten gelernt. Ein halbes Jahr später führte ich mein erstes Gespräch mit internationalen Partnern ohne Dolmetscher.'
        },
        misha: {
          avatar: 'M',
          name: 'Mischa, 17',
          role: 'Schulabgänger',
          quote: 'Ich habe mich vor allem hier auf das EGE in Englisch vorbereitet. Die Probetests mit Timer haben mir wirklich geholfen — ich habe 91 Punkte erreicht.'
        },
        olga: {
          avatar: 'O',
          name: 'Olga, 41',
          role: 'Mama von Sonja (8)',
          quote: 'Meine Tochter bittet selbst darum, lernen zu dürfen — für sie ist es ein Spiel. Und ich sehe ihren Fortschritt im Elternbericht.'
        },
        dmitry: {
          avatar: 'D',
          name: 'Dmitri, 22',
          role: 'Student',
          quote: 'Ich habe mich für ein Masterstudium auf IELTS vorbereitet. Das kriterienbasierte Feedback zu Aufsätzen hat mir geholfen, Writing von 5.5 auf 7.0 zu steigern.'
        },
        irina: {
          avatar: 'I',
          name: 'Irina, 52',
          role: 'Reisende',
          quote: 'Vor einer Reise nach Italien habe ich in zwei Wochen einen Sprachführer-Kurs gemacht. Im Café und am Bahnhof fühlte ich mich sicher.'
        },
        artem: {
          avatar: 'A',
          name: 'Artem, 29',
          role: 'Entwickler',
          quote: 'Die Serien sind genial. 214 Tage in Folge, keinen einzigen verpasst. Mein Deutsch ist jetzt B1.'
        }
      }
    },

    faq: {
      eyebrow: 'Fragen und Antworten',
      title: 'Häufig gestellte Fragen',
      items: {
        free: {
          question: 'Ist das wirklich kostenlos?',
          answer: 'Ja. Alle Basiskurse, Übungen und Trainer sind dauerhaft kostenlos. Es gibt ein optionales Plus-Abo — ohne Werbung, mit unbegrenzten Versuchen und erweiterten Probetests.'
        },
        level: {
          question: 'Auf welchem Niveau kann ich starten?',
          answer: 'Auf jedem. Ein kurzer Test von 3 Minuten bestimmt dein Niveau und stellt ein Programm zusammen — von null oder ab dem passenden Punkt. Du kannst jederzeit das Niveau wechseln.'
        },
        time: {
          question: 'Wie viel Zeit brauche ich?',
          answer: '15 Minuten am Tag reichen. Die Lektionen sind kurz, du kannst also 3–5 Minuten in der U-Bahn oder in der Warteschlange lernen — deine Serie bleibt erhalten.'
        },
        exams: {
          question: 'Hilft das beim EGE oder IELTS?',
          answer: 'Ja. Die Aufgaben folgen dem EGE- und IELTS-Format, es gibt Probetests mit Timer, Feedback zum Schreiben und eine Auswertung jedes Fehlers. Die durchschnittliche Verbesserung in 3 Monaten beträgt +23 Punkte.'
        },
        kids: {
          question: 'Ist der Dienst für Kinder geeignet?',
          answer: 'Ja, Kinder können ab 4 Jahren starten. Im Kindermodus gibt es spielerische Aufgaben und Belohnungen, Eltern erhalten einen Fortschrittsbericht und Empfehlungen.'
        },
        offline: {
          question: 'Kann ich ohne Internet lernen?',
          answer: 'Ja. Du kannst Lektionen in der App herunterladen und offline lernen — der Fortschritt wird synchronisiert, sobald du wieder online bist.'
        }
      }
    },

    cta: {
      title: 'Lerne eine Sprache mit Pinguin',
      text: 'Deine erste Lektion in einer Minute. Kostenlos, ohne Karte und Verpflichtung.'
    },

    footer: {
      brandText: 'Übungen, Trainer und Prüfungsvorbereitung — für Erwachsene, Kinder und alle, die Sprachen lieben.',
      sectionsTitle: 'Bereiche',
      coursesTitle: 'Kurse',
      contactsTitle: 'Kontakt',
      support: '24/7-Support im Chat',
      copyright: '© {year} Pinguin. Alle Rechte vorbehalten.',
      copyrightSuffix: 'Pinguin. Alle Rechte vorbehalten.'
    }
  };
})(window);
