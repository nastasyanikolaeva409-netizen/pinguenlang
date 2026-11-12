/*!
 * пингвинёнок — Deutsch (de), частичный словарь
 * ---------------------------------------------------------------
 * Пока перенесены только исходные ключи шапки/hero/флагов.
 * Недостающие ключи автоматически берутся из ru (fallback).
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.de = {
    pageTitle: 'Pinguin — Sprachen lernen in 15 Minuten am Tag',
    meta: {
      title: 'Pinguin — Sprachen lernen in 15 Minuten am Tag'
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
      subtitle: 'Kostenlose Übungen, echte Gesprächspartner und Prüfungsvorbereitung für Abitur und IELTS.',
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
    }
  };
})(window);
