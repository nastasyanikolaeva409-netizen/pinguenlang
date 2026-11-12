/*!
 * пингвинёнок — Español (es)
 * ---------------------------------------------------------------
 * Formato: objetos anidados, acceso mediante I18N.t('path.to.key').
 * Plurales: { one, many, other } + Intl.PluralRules.
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.es = {
    pageTitle: 'Pingüino — aprende idiomas en 15 minutos al día',

    meta: {
      title: 'Pingüino — aprende idiomas en 15 minutos al día',
      description: 'Pingüino — ejercicios gratuitos, conversaciones reales y preparación para los exámenes rusos e IELTS. Aprende idiomas en 15 minutos al día.',
      ogTitle: 'Pingüino — aprende idiomas en 15 minutos al día',
      ogDescription: 'Ejercicios gratuitos, conversaciones reales y preparación para los exámenes rusos e IELTS.',
      ogLocale: 'es_ES'
    },

    a11y: {
      logoHome: 'Pingüino — inicio',
      primaryNav: 'Navegación principal',
      langToggle: 'Elegir el idioma del sitio',
      langMenu: 'Idioma del sitio',
      menuOpen: 'Abrir el menú',
      menuClose: 'Cerrar el menú',
      mobileMenu: 'Menú móvil',
      mobileNav: 'Navegación móvil',
      heroMascot: 'Pingüino con gorro azul leyendo un libro',
      exerciseAnswer: 'Traducción compuesta',
      examTabs: 'Tipo de examen',
      audienceTabs: 'Para quién es el servicio',
      rating: 'Valoración de 5 sobre 5',
      reviewPrev: 'Opinión anterior',
      reviewNext: 'Opinión siguiente',
      reviewsViewport: 'Opiniones de estudiantes',
      footerSections: 'Secciones',
      footerCourses: 'Cursos',
      addWord: 'Añadir la palabra «{word}»',
      removeWord: 'Quitar la palabra «{word}»'
    },

    skip: {
      link: 'Ir al contenido'
    },

    brand: {
      name: 'Pingüino',
      logoPrimary: 'Ping',
      logoAccent: 'üino',
      tagline: 'Aprende un idioma con Pingüino'
    },

    nav: {
      languages: 'Idiomas',
      how: 'Cómo funciona',
      exams: 'Exámenes',
      audience: 'Para quién',
      reviews: 'Opiniones',
      faq: 'Preguntas'
    },

    lang: {
      label: 'Idioma del sitio'
    },

    hero: {
      line1: 'Aprende idiomas',
      line2pre: 'con ',
      accent: 'Pingüino',
      line2post: ' —',
      line3: '15 minutos al día',
      subtitle: 'Ejercicios gratuitos, conversaciones reales y preparación para los exámenes rusos e IELTS.',
      pill1: '6 idiomas',
      pill2: 'Rachas diarias',
      pill3: 'Exámenes · IELTS'
    },

    btn: {
      start: 'Empezar gratis',
      account: 'Ya tengo cuenta'
    },

    flag: {
      en: 'Inglés',
      fr: 'Francés',
      de: 'Alemán',
      es: 'Español',
      it: 'Italiano',
      cn: 'Chino'
    },

    languages: {
      eyebrow: 'Elige un idioma',
      title: '¿Qué idioma te abrirá nuevas puertas?',
      lead: 'Cursos desde cero hasta la fluidez. Elige un idioma: la primera lección solo tarda unos minutos.',
      studentsTemplate: '{count} estudiantes',
      cards: {
        en: { name: 'Inglés', students: '12,4 M estudiantes' },
        fr: { name: 'Francés', students: '3,1 M estudiantes' },
        de: { name: 'Alemán', students: '2,7 M estudiantes' },
        es: { name: 'Español', students: '4,2 M estudiantes' },
        it: { name: 'Italiano', students: '1,5 M estudiantes' },
        cn: { name: 'Chino', students: '980.000 estudiantes' }
      }
    },

    method: {
      eyebrow: 'Ejercicios y entrenamientos',
      title: 'Divertido, rápido y basado en la ciencia',
      lead: 'Cada lección se siente como un pequeño juego. Pruébalo aquí mismo: compón la traducción con las palabras.',
      features: {
        short: {
          title: 'Ejercicios cortos',
          text: 'Lecciones de 3 a 5 minutos: traducción, comprensión auditiva, pronunciación y construcción de frases. Puedes aprender en el metro o en la cola.'
        },
        smart: {
          title: 'Entrenamientos inteligentes',
          text: 'El sistema recuerda tus errores y te devuelve las palabras difíciles justo cuando empiezas a olvidarlas.'
        },
        speaking: {
          title: 'Habla en voz alta',
          text: 'El entrenador de pronunciación te escucha y te dice qué sonidos conviene mejorar.'
        }
      }
    },

    exercise: {
      label: 'Traduce la frase',
      hint: 'Toca las palabras de abajo',
      check: 'Comprobar',
      reset: 'Reiniciar',
      feedbackEmpty: 'Primero compón la traducción con las palabras.',
      feedbackCorrect: '¡Correcto! «I love to travel» es exactamente así.',
      feedbackWrong: '¡Casi! Comprueba el orden de las palabras e inténtalo de nuevo.'
    },

    exams: {
      eyebrow: 'Preparación de exámenes',
      title: 'Consigue la puntuación EGE e IELTS que necesitas',
      tabs: {
        ege: 'EGE',
        oge: 'OGE',
        ielts: 'IELTS',
        toefl: 'TOEFL y más'
      },
      ege: {
        tag: 'Inglés, 11.º grado',
        score: '+23',
        unit: 'puntos',
        note: 'mejora media en 3 meses',
        text: 'Cubrimos las 4 secciones: comprensión auditiva, lectura, gramática y vocabulario, y expresión escrita. Tareas en formato EGE, corrección automática y análisis de cada error.'
      },
      oge: {
        tag: 'Inglés, 9.º grado',
        score: '+19',
        unit: 'puntos',
        note: 'mejora media en 3 meses',
        text: 'Preparación para el OGE en todas las secciones: comprensión auditiva, lectura, gramática y escritura. Formatos reales, temporizador y análisis de cada error.'
      },
      ielts: {
        tag: 'Inglés, 18+',
        score: '+1,5',
        unit: 'puntos',
        note: 'mejora media en 3 meses',
        text: 'Entrenamos los 4 módulos del IELTS: Listening, Reading, Writing y Speaking. Los ensayos se evalúan según los criterios y Speaking incluye comentarios.'
      },
      toefl: {
        tag: 'Inglés, 18+',
        score: '+22',
        unit: 'puntos',
        note: 'mejora media en 3 meses',
        text: 'Preparación para TOEFL, Duolingo English Test y otros exámenes internacionales: estrategias, simulacros y trabajo en tus puntos débiles.'
      },
      bullet1: '2.000+ tareas en formato de examen',
      bullet2: 'Simulacros con temporizador',
      bullet3: 'Plantillas para escritura y ensayos',
      cta: 'Hacer un simulacro',
      badgeScore: 'de 100 en el simulacro',
      badgeReady: 'Listo para el examen'
    },

    audience: {
      eyebrow: 'Para quién',
      title: 'Cualquiera puede aprender, a cualquier edad',
      tabs: {
        adults: 'Adultos',
        school: 'Estudiantes de colegio',
        students: 'Estudiantes universitarios',
        travellers: 'Viajeros',
        kids: 'Niños y padres'
      },
      adults: {
        title: 'Adultos — para el trabajo y la carrera',
        text: 'Correspondencia de empresa, llamadas, presentaciones y entrevistas. Cursos de vocabulario de negocios y entrenador para negociaciones.',
        bullet1: 'Inglés de negocios',
        bullet2: 'Preparación de entrevistas',
        bullet3: '10 minutos en el almuerzo',
        value: '10 minutos',
        label: 'durante la pausa del almuerzo'
      },
      school: {
        title: 'Estudiantes de colegio — notas y exámenes',
        text: 'Ayudamos con los deberes, mejoramos las notas y preparamos para el OGE y el EGE sin empollar, con tareas cortas.',
        bullet1: 'Programa de 5.º a 11.º grado',
        bullet2: 'Ayuda con los deberes',
        bullet3: 'Preparación para OGE y EGE',
        value: '+23 puntos',
        label: 'mejora media en el EGE'
      },
      students: {
        title: 'Estudiantes universitarios — estudios y prácticas',
        text: 'Inglés académico, vocabulario para clases y prácticas, preparación de IELTS y TOEFL para el máster.',
        bullet1: 'Vocabulario académico',
        bullet2: 'Ensayos y presentaciones',
        bullet3: 'IELTS y TOEFL',
        value: '7,0',
        label: 'puntuación IELTS objetivo'
      },
      travellers: {
        title: 'Viajeros — el idioma para el viaje',
        text: 'Cursos de conversación tipo guía de frases: aeropuerto, hotel, café y estación. Aprende en un par de semanas antes del viaje.',
        bullet1: 'Frases para viajar',
        bullet2: 'Comprensión auditiva',
        bullet3: 'Curso en 2 semanas',
        value: '2 semanas',
        label: 'hasta viajar con confianza'
      },
      kids: {
        title: 'Niños y padres — desde los 4 años',
        text: 'Lecciones divertidas con Pingüino: los niños aprenden solos y los padres ven el progreso en un informe.',
        bullet1: 'Tareas lúdicas',
        bullet2: 'Recompensas y rachas',
        bullet3: 'Informe para padres',
        value: 'desde los 4 años',
        label: 'divertido y sin presión'
      }
    },

    motivation: {
      eyebrow: 'Motivación',
      title: 'No lo dejarás — engancha',
      lead: 'Hemos convertido el aprendizaje en un juego: XP, rachas, ligas y recompensas. 15 minutos al día dan más que una hora a la semana.',
      items: {
        streaks: {
          title: 'Rachas de días',
          text: 'Estudia cada día y mantén tu racha: el hábito se crea solo.'
        },
        leagues: {
          title: 'Ligas y clasificaciones',
          text: 'Compite con estudiantes de todo el país y sube en las ligas.'
        },
        progress: {
          title: 'Progreso visible',
          text: 'Estadísticas de palabras, nivel y puntos: ves lo que ya has conseguido.'
        },
        reminders: {
          title: 'Recordatorios suaves',
          text: 'Te avisamos en el momento adecuado para que no olvides tu lección.'
        }
      }
    },

    streak: {
      label: 'Racha de días',
      days: {
        one: 'día seguido',
        many: 'días seguidos',
        other: 'días seguidos'
      },
      messageStart: 'Empieza tu racha: una lección hoy y el día cuenta.',
      messageWeek: '¡Una semana entera seguida! Sigue así y no pares.',
      messageKeep: 'Buen comienzo: ¡mantén tu racha!',
      done: 'Hacer una lección hoy',
      reset: 'Reiniciar demo'
    },

    weekdays: {
      mon: 'Lun',
      tue: 'Mar',
      wed: 'Mié',
      thu: 'Jue',
      fri: 'Vie',
      sat: 'Sáb',
      sun: 'Dom'
    },

    reviews: {
      eyebrow: 'Opiniones',
      title: 'A los estudiantes les encantamos',
      rating: '4,9',
      count: '120.000+ opiniones',
      countTemplate: '{count}+ opiniones',
      items: {
        anna: {
          avatar: 'A',
          name: 'Anna, 34',
          role: 'Responsable de marketing',
          quote: 'Estudié 15 minutos en la pausa del almuerzo. Seis meses después hice mi primera llamada con socios internacionales sin intérprete.'
        },
        misha: {
          avatar: 'M',
          name: 'Misha, 17',
          role: 'Recién graduado',
          quote: 'Me preparé sobre todo aquí para el EGE de inglés. Los simulacros con temporizador realmente me salvaron: saqué 91.'
        },
        olga: {
          avatar: 'O',
          name: 'Olga, 41',
          role: 'Mamá de Sonia (8 años)',
          quote: 'Mi hija me pide aprender por su cuenta: para ella es un juego. Y yo veo su progreso en el informe para padres.'
        },
        dmitry: {
          avatar: 'D',
          name: 'Dmitri, 22',
          role: 'Estudiante universitario',
          quote: 'Preparé el IELTS para un máster. La evaluación de los ensayos por criterios me ayudó a subir Writing de 5.5 a 7.0.'
        },
        irina: {
          avatar: 'I',
          name: 'Irina, 52',
          role: 'Viajera',
          quote: 'Antes de un viaje a Italia hice un curso de frases en dos semanas. En el café y en la estación me sentí segura.'
        },
        artem: {
          avatar: 'A',
          name: 'Artem, 29',
          role: 'Desarrollador',
          quote: 'Las rachas son geniales. 214 días seguidos sin faltar ni uno. Mi alemán ya es B1.'
        }
      }
    },

    faq: {
      eyebrow: 'Preguntas y respuestas',
      title: 'Preguntas frecuentes',
      items: {
        free: {
          question: '¿De verdad es gratis?',
          answer: 'Sí. Todos los cursos básicos, ejercicios y entrenamientos son gratis para siempre. Hay una suscripción Plus opcional: sin anuncios, con intentos ilimitados y simulacros ampliados.'
        },
        level: {
          question: '¿Desde qué nivel puedo empezar?',
          answer: 'Desde cualquiera. Un test corto de 3 minutos determina tu nivel y crea un programa: desde cero o desde donde lo dejaste. Puedes cambiar de nivel en cualquier momento.'
        },
        time: {
          question: '¿Cuánto tiempo necesito?',
          answer: 'Con 15 minutos al día es suficiente. Las lecciones son cortas, así que puedes estudiar de 3 a 5 minutos en el metro o en la cola, y tu racha no se romperá.'
        },
        exams: {
          question: '¿Me ayudará a aprobar el EGE o el IELTS?',
          answer: 'Sí. Las tareas siguen los formatos EGE e IELTS, con simulacros cronometrados, comentarios sobre la escritura y análisis de cada error. La mejora media en 3 meses es de +23 puntos.'
        },
        kids: {
          question: '¿El servicio es adecuado para niños?',
          answer: 'Sí, los niños pueden empezar a los 4 años. El modo infantil tiene tareas lúdicas y recompensas, y los padres reciben un informe de progreso y recomendaciones.'
        },
        offline: {
          question: '¿Se puede estudiar sin internet?',
          answer: 'Sí. Puedes descargar las lecciones en la app y estudiar sin conexión: el progreso se sincroniza en cuanto vuelves a estar en línea.'
        }
      }
    },

    cta: {
      title: 'Aprende un idioma con Pingüino',
      text: 'Tu primera lección en un minuto. Gratis, sin tarjeta ni compromiso.'
    },

    footer: {
      brandText: 'Ejercicios, entrenamientos y preparación de exámenes — para adultos, niños y todos los que aman los idiomas.',
      sectionsTitle: 'Secciones',
      coursesTitle: 'Cursos',
      contactsTitle: 'Contacto',
      support: 'Soporte 24/7 por chat',
      copyright: '© {year} Pingüino. Todos los derechos reservados.',
      copyrightSuffix: 'Pingüino. Todos los derechos reservados.'
    }
  };
})(window);
