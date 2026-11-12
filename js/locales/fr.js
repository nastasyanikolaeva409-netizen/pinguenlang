/*!
 * пингвинёнок — Français (fr), dictionnaire partiel
 * ---------------------------------------------------------------
 * Pour l'instant, seules les clés d'origine (en-tête, hero, drapeaux)
 * sont reprises. Les clés manquantes tombent en repli sur le russe (ru).
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.fr = {
    pageTitle: 'Pingouin — apprenez les langues en 15 minutes par jour',
    meta: {
      title: 'Pingouin — apprenez les langues en 15 minutes par jour'
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
      subtitle: "Des exercices gratuits, de vrais interlocuteurs et une préparation aux examens et à l'IELTS.",
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
      studentsTemplate: '{count} apprenants'
    },
    reviews: {
      countTemplate: '{count}+ avis'
    }
  };
})(window);
