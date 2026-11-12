/*!
 * пингвинёнок — Español (es), diccionario parcial
 * ---------------------------------------------------------------
 * Por ahora solo se han trasladado las claves originales de la cabecera,
 * el hero y las banderas. Las claves que faltan usan ru como respaldo.
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.es = {
    pageTitle: 'Pingüino — aprende idiomas en 15 minutos al día',
    meta: {
      title: 'Pingüino — aprende idiomas en 15 minutos al día'
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
      subtitle: 'Ejercicios gratuitos, conversaciones reales y preparación de exámenes e IELTS.',
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
    }
  };
})(window);
