/*!
 * пингвинёнок — 中文 (zh)，部分词典
 * ---------------------------------------------------------------
 * 目前只迁移了原来的页眉、hero 和语言旗帜键。
 * 缺失的键会自动回退到 ru。
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.zh = {
    pageTitle: '企鹅 — 每天 15 分钟学语言',
    meta: {
      title: '企鹅 — 每天 15 分钟学语言'
    },
    brand: {
      name: '企鹅',
      logoPrimary: '企',
      logoAccent: '鹅',
      tagline: '和企鹅一起学语言'
    },
    nav: {
      languages: '语言',
      how: '学习方法',
      exams: '考试',
      audience: '适合人群',
      reviews: '评价',
      faq: '常见问题'
    },
    lang: {
      label: '网站语言'
    },
    hero: {
      line1: '学语言',
      line2pre: '和',
      accent: '企鹅',
      line2post: '一起 —',
      line3: '每天只需 15 分钟',
      subtitle: '免费练习、真人语伴，以及考试和 IELTS 备考。',
      pill1: '6 种语言',
      pill2: '每日连练',
      pill3: '考试 · IELTS'
    },
    btn: {
      start: '免费开始',
      account: '我已有账户'
    },
    flag: {
      en: '英语',
      fr: '法语',
      de: '德语',
      es: '西班牙语',
      it: '意大利语',
      cn: '中文'
    },
    languages: {
      studentsTemplate: '{count}名学习者'
    },
    reviews: {
      countTemplate: '{count}+ 条评价'
    }
  };
})(window);
