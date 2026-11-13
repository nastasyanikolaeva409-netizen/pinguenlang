/*!
 * пингвинёнок — Français (fr)
 * ---------------------------------------------------------------
 * Format : objets imbriqués, accès via I18N.t('path.to.key').
 * Pluriels : { one, many, other } + Intl.PluralRules.
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.fr = {
    pageTitle: 'Pingouin — apprenez les langues en 15 minutes par jour',

    meta: {
      title: 'Pingouin — apprenez les langues en 15 minutes par jour',
      description: "Pingouin — exercices gratuits, vrais interlocuteurs et préparation aux examens russes et à l'IELTS. Apprenez les langues en 15 minutes par jour.",
      ogTitle: 'Pingouin — apprenez les langues en 15 minutes par jour',
      ogDescription: "Exercices gratuits, vrais interlocuteurs et préparation aux examens russes et à l'IELTS.",
      ogLocale: 'fr_FR'
    },

    a11y: {
      logoHome: "Pingouin — accueil",
      primaryNav: 'Navigation principale',
      langToggle: 'Choisir la langue du site',
      langMenu: 'Langue du site',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      mobileMenu: 'Menu mobile',
      mobileNav: 'Navigation mobile',
      heroMascot: 'Pingouin avec un bonnet bleu lisant un livre',
      exerciseAnswer: 'Traduction assemblée',
      examTabs: "Type d'examen",
      audienceTabs: "À qui s'adresse le service",
      rating: 'Note de 5 sur 5',
      reviewPrev: 'Avis précédent',
      reviewNext: 'Avis suivant',
      reviewsViewport: 'Avis des apprenants',
      footerSections: 'Sections',
      footerCourses: 'Cours',
      addWord: 'Ajouter le mot « {word} »',
      removeWord: 'Retirer le mot « {word} »'
    },

    skip: {
      link: 'Aller au contenu'
    },

    brand: {
      name: 'Pingouin',
      logoPrimary: 'Ping',
      logoAccent: 'ouin',
      tagline: 'Apprenez une langue avec Pingouin'
    },

    nav: {
      languages: 'Langues',
      how: 'Comment ça marche',
      exams: 'Examens',
      audience: 'Pour qui',
      reviews: 'Avis',
      faq: 'FAQ'
    },

    lang: {
      label: 'Langue du site'
    },

    hero: {
      line1: 'Apprenez les langues',
      line2pre: 'avec ',
      accent: 'Pingouin',
      line2post: ' —',
      line3: '15 minutes par jour',
      subtitle: "Exercices gratuits, vrais interlocuteurs et préparation aux examens russes et à l'IELTS.",
      pill1: '6 langues',
      pill2: 'Séries quotidiennes',
      pill3: 'Examens · IELTS'
    },

    btn: {
      start: 'Commencer gratuitement',
      account: "J'ai déjà un compte"
    },

    flag: {
      en: 'Anglais',
      fr: 'Français',
      de: 'Allemand',
      es: 'Espagnol',
      it: 'Italien',
      cn: 'Chinois'
    },

    languages: {
      eyebrow: 'Choisissez une langue',
      title: 'Quelle langue vous ouvrira de nouvelles portes ?',
      lead: 'Des cours du niveau débutant à la maîtrise. Choisissez une langue — la première leçon ne prend que quelques minutes.',
      inDevelopment: 'En développement',
      studentsTemplate: '{count} apprenants',
      cards: {
        en: { name: 'Anglais', students: '12,4 M apprenants' },
        fr: { name: 'Français', students: '3,1 M apprenants' },
        de: { name: 'Allemand', students: '2,7 M apprenants' },
        es: { name: 'Espagnol', students: '4,2 M apprenants' },
        it: { name: 'Italien', students: '1,5 M apprenants' },
        cn: { name: 'Chinois', students: '980 000 apprenants' }
      }
    },

    method: {
      eyebrow: 'Exercices et entraînements',
      title: 'Ludique, rapide et fondé sur la science',
      lead: "Chaque leçon ressemble à un petit jeu. Essayez tout de suite — composez la traduction à partir des mots.",
      features: {
        short: {
          title: 'Exercices courts',
          text: "Des leçons de 3 à 5 minutes : traduction, écoute, prononciation et construction de phrases. On peut apprendre dans le métro ou dans une file d'attente."
        },
        smart: {
          title: 'Entraînements intelligents',
          text: 'Le système retient vos erreurs et fait revenir les mots difficiles juste au moment où vous commencez à les oublier.'
        },
        speaking: {
          title: 'Parlez à voix haute',
          text: "L'entraîneur de prononciation vous écoute et vous indique les sons à travailler."
        }
      }
    },

    exercise: {
      label: 'Traduisez la phrase',
      hint: 'Touchez les mots ci-dessous',
      check: 'Vérifier',
      reset: 'Réinitialiser',
      feedbackEmpty: "Composez d'abord la traduction à partir des mots.",
      feedbackCorrect: 'Correct ! « I love to travel », c’est exactement ça.',
      feedbackWrong: "Presque ! Vérifiez l'ordre des mots et réessayez."
    },

    exams: {
      eyebrow: 'Préparation aux examens',
      title: "Obtenez le score EGE et IELTS dont vous avez besoin",
      tabs: {
        ege: 'EGE',
        oge: 'OGE',
        ielts: 'IELTS',
        toefl: 'TOEFL et plus'
      },
      ege: {
        tag: 'Anglais, 11e année',
        score: '+23',
        unit: 'points',
        note: 'progression moyenne en 3 mois',
        text: "Nous couvrons les 4 sections : compréhension orale, lecture, grammaire et vocabulaire, et expression écrite. Des exercices au format EGE, une correction automatique et une analyse de chaque erreur."
      },
      oge: {
        tag: 'Anglais, 9e année',
        score: '+19',
        unit: 'points',
        note: 'progression moyenne en 3 mois',
        text: "Préparation à l'OGE dans toutes les sections : compréhension orale, lecture, grammaire et expression écrite. Formats réels, chronomètre et analyse de chaque erreur."
      },
      ielts: {
        tag: 'Anglais, 18+',
        score: '+1,5',
        unit: 'points',
        note: 'progression moyenne en 3 mois',
        text: "Nous entraînons les 4 modules de l'IELTS : Listening, Reading, Writing et Speaking. Les essais sont évalués selon les critères, et le Speaking donne lieu à un retour."
      },
      toefl: {
        tag: 'Anglais, 18+',
        score: '+22',
        unit: 'points',
        note: 'progression moyenne en 3 mois',
        text: "Préparation au TOEFL, au Duolingo English Test et à d'autres examens internationaux : stratégies, tests blancs et travail sur vos points faibles."
      },
      bullet1: '2 000+ exercices au format examen',
      bullet2: 'Tests blancs chronométrés',
      bullet3: "Modèles pour l'écrit et les essais",
      cta: 'Passer un test blanc',
      badgeScore: 'sur 100 au test blanc',
      badgeReady: "Prêt pour l'examen"
    },

    audience: {
      eyebrow: 'Pour qui',
      title: "Tout le monde peut apprendre — à tout âge",
      tabs: {
        adults: 'Adultes',
        school: 'Élèves',
        students: 'Étudiants',
        travellers: 'Voyageurs',
        kids: 'Enfants et parents'
      },
      adults: {
        title: 'Adultes — pour le travail et la carrière',
        text: 'Correspondance professionnelle, appels, présentations et entretiens. Cours de vocabulaire business et entraîneur pour les négociations.',
        bullet1: 'Anglais des affaires',
        bullet2: 'Préparation aux entretiens',
        bullet3: '10 minutes à midi',
        value: '10 minutes',
        label: 'pendant la pause déjeuner'
      },
      school: {
        title: 'Élèves — notes et examens',
        text: "Nous aidons pour les devoirs, améliorons les notes et préparons à l'OGE et à l'EGE sans bachotage — avec des exercices courts.",
        bullet1: 'Programme des classes 5 à 11',
        bullet2: 'Aide aux devoirs',
        bullet3: "Préparation à l'OGE et à l'EGE",
        value: '+23 points',
        label: "progression moyenne à l'EGE"
      },
      students: {
        title: 'Étudiants — études et stages',
        text: "Anglais académique, vocabulaire pour les cours et les stages, préparation à l'IELTS et au TOEFL pour le master.",
        bullet1: 'Vocabulaire académique',
        bullet2: 'Essais et présentations',
        bullet3: 'IELTS et TOEFL',
        value: '7,0',
        label: 'score IELTS visé'
      },
      travellers: {
        title: 'Voyageurs — la langue en voyage',
        text: "Des cours de conversation façon guide de phrases : aéroport, hôtel, café et gare. Apprenez en quelques semaines avant le départ.",
        bullet1: 'Phrases de voyage',
        bullet2: 'Compréhension orale',
        bullet3: 'Cours en 2 semaines',
        value: '2 semaines',
        label: 'avant de partir sereinement'
      },
      kids: {
        title: 'Enfants et parents — dès 4 ans',
        text: "Des leçons ludiques avec Pingouin : l'enfant apprend seul et les parents voient les progrès dans un rapport.",
        bullet1: 'Activités ludiques',
        bullet2: 'Récompenses et séries',
        bullet3: 'Rapport parent',
        value: 'dès 4 ans',
        label: 'dans la bonne humeur, sans pression'
      }
    },

    motivation: {
      eyebrow: 'Motivation',
      title: "Vous ne décrocherez pas — c'est addictif",
      lead: "Nous avons transformé l'apprentissage en jeu : XP, séries, ligues et récompenses. 15 minutes par jour apportent plus qu'une heure par semaine.",
      items: {
        streaks: {
          title: 'Séries de jours',
          text: "Travaillez chaque jour et gardez votre série — l'habitude se crée toute seule."
        },
        leagues: {
          title: 'Ligues et classements',
          text: "Affrontez des apprenants de tout le pays et montez dans les ligues."
        },
        progress: {
          title: 'Progrès visibles',
          text: 'Des statistiques sur les mots, le niveau et les points — vous voyez ce que vous avez déjà accompli.'
        },
        reminders: {
          title: 'Rappels en douceur',
          text: "Nous vous rappelons au bon moment pour que vous n'oubliiez pas votre leçon."
        }
      }
    },

    streak: {
      label: 'Série de jours',
      days: {
        one: "jour d'affilée",
        many: "jours d'affilée",
        other: "jours d'affilée"
      },
      messageStart: "Lancez votre série — une leçon aujourd'hui et la journée compte.",
      messageWeek: "Une semaine entière d'affilée ! Continuez comme ça.",
      messageKeep: 'Bon départ — gardez votre série !',
      done: "Faire une leçon aujourd'hui",
      reset: 'Réinitialiser la démo'
    },

    weekdays: {
      mon: 'Lun',
      tue: 'Mar',
      wed: 'Mer',
      thu: 'Jeu',
      fri: 'Ven',
      sat: 'Sam',
      sun: 'Dim'
    },

    reviews: {
      eyebrow: 'Avis',
      title: 'Les apprenants nous adorent',
      rating: '4,9',
      count: '120 000+ avis',
      countTemplate: '{count}+ avis',
      items: {
        anna: {
          avatar: 'A',
          name: 'Anna, 34',
          role: 'Responsable marketing',
          quote: "J'ai étudié 15 minutes à la pause déjeuner. Six mois plus tard, j'ai fait mon premier appel avec des partenaires internationaux sans interprète."
        },
        misha: {
          avatar: 'M',
          name: 'Micha, 17',
          role: 'Diplômé du lycée',
          quote: "Je me suis surtout préparé ici à l'EGE d'anglais. Les tests blancs chronométrés m'ont vraiment sauvé — j'ai obtenu 91."
        },
        olga: {
          avatar: 'O',
          name: 'Olga, 41',
          role: 'Maman de Sonia (8 ans)',
          quote: "Ma fille demande elle-même à s'entraîner — pour elle, c'est un jeu. Et je vois ses progrès dans le rapport parent."
        },
        dmitry: {
          avatar: 'D',
          name: 'Dmitri, 22',
          role: 'Étudiant',
          quote: "Je préparais l'IELTS pour un master. Les retours sur les essais selon les critères m'ont aidé à faire passer Writing de 5.5 à 7.0."
        },
        irina: {
          avatar: 'I',
          name: 'Irina, 52',
          role: 'Voyageuse',
          quote: "Avant un voyage en Italie, j'ai suivi un cours de phrases pendant deux semaines. Au café et à la gare, je me sentais à l'aise."
        },
        artem: {
          avatar: 'A',
          name: 'Artem, 29',
          role: 'Développeur',
          quote: "Les séries sont géniales. 214 jours d'affilée, pas un seul manqué. Mon allemand est maintenant B1."
        }
      }
    },

    faq: {
      eyebrow: 'Questions et réponses',
      title: 'Questions fréquentes',
      items: {
        free: {
          question: 'Est-ce vraiment gratuit ?',
          answer: "Oui. Tous les cours de base, exercices et entraînements sont gratuits pour toujours. Il existe un abonnement Plus facultatif — sans publicité, avec des tentatives illimitées et des tests blancs étendus."
        },
        level: {
          question: 'À quel niveau puis-je commencer ?',
          answer: "À n'importe quel niveau. Un court test de 3 minutes détermine votre niveau et construit un programme — depuis zéro ou à partir de votre point actuel. Vous pouvez changer de niveau à tout moment."
        },
        time: {
          question: 'Combien de temps faut-il ?',
          answer: "15 minutes par jour suffisent. Les leçons sont courtes : vous pouvez donc travailler 3 à 5 minutes dans le métro ou dans une file d'attente — votre série ne sera pas interrompue."
        },
        exams: {
          question: "Cela aide-t-il à réussir l'EGE ou l'IELTS ?",
          answer: "Oui. Les exercices suivent les formats EGE et IELTS, avec des tests blancs chronométrés, un retour sur l'écrit et une analyse de chaque erreur. La progression moyenne en 3 mois est de +23 points."
        },
        kids: {
          question: 'Le service convient-il aux enfants ?',
          answer: "Oui, les enfants peuvent commencer dès 4 ans. Le mode enfant propose des activités ludiques et des récompenses, tandis que les parents reçoivent un rapport de progrès et des recommandations."
        },
        offline: {
          question: 'Peut-on apprendre sans Internet ?',
          answer: "Oui. Vous pouvez télécharger les leçons dans l'application et apprendre hors ligne — la progression se synchronise dès que vous êtes de nouveau connecté."
        }
      }
    },

    cta: {
      title: 'Apprenez une langue avec Pingouin',
      text: 'Votre première leçon en une minute. Gratuit, sans carte ni engagement.'
    },

    footer: {
      brandText: 'Exercices, entraînements et préparation aux examens — pour les adultes, les enfants et tous ceux qui aiment les langues.',
      sectionsTitle: 'Sections',
      coursesTitle: 'Cours',
      contactsTitle: 'Contacts',
      support: 'Assistance 24h/24 et 7j/7 par chat',
      copyright: '© {year} Pingouin. Tous droits réservés.',
      copyrightSuffix: 'Pingouin. Tous droits réservés.'
    }
  };
})(window);
