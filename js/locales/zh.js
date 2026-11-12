/*!
 * пингвинёнок — 中文 (zh)
 * ---------------------------------------------------------------
 * 格式：嵌套对象，通过 I18N.t('path.to.key') 访问。
 * 复数：中文没有数词变化，只使用 { other }。
 * ---------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var data = global.I18N_DATA = global.I18N_DATA || {};

  data.zh = {
    pageTitle: '企鹅 — 每天 15 分钟学语言',

    meta: {
      title: '企鹅 — 每天 15 分钟学语言',
      description: '企鹅——免费练习、真人语伴，以及俄罗斯国家考试和 IELTS 备考。每天 15 分钟学语言。',
      ogTitle: '企鹅 — 每天 15 分钟学语言',
      ogDescription: '免费练习、真人语伴，以及俄罗斯国家考试和 IELTS 备考。',
      ogLocale: 'zh_CN'
    },

    a11y: {
      logoHome: '企鹅——返回首页',
      primaryNav: '主导航',
      langToggle: '选择网站语言',
      langMenu: '网站语言',
      menuOpen: '打开菜单',
      menuClose: '关闭菜单',
      mobileMenu: '移动端菜单',
      mobileNav: '移动端导航',
      heroMascot: '戴着蓝色帽子看书的企鹅',
      exerciseAnswer: '已组成的翻译',
      examTabs: '考试类型',
      audienceTabs: '适合人群',
      rating: '评分 5 分（满分 5 分）',
      reviewPrev: '上一条评价',
      reviewNext: '下一条评价',
      reviewsViewport: '学员评价',
      footerSections: '栏目',
      footerCourses: '课程',
      addWord: '添加单词“{word}”',
      removeWord: '移除单词“{word}”'
    },

    skip: {
      link: '跳到主要内容'
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
      subtitle: '免费练习、真人语伴，以及俄罗斯国家考试和 IELTS 备考。',
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
      eyebrow: '选择语言',
      title: '哪门语言会为你打开新的大门？',
      lead: '从零基础到流利水平的课程。选择一门语言——第一节课只需几分钟。',
      studentsTemplate: '{count}名学习者',
      cards: {
        en: { name: '英语', students: '1240 万学习者' },
        fr: { name: '法语', students: '310 万学习者' },
        de: { name: '德语', students: '270 万学习者' },
        es: { name: '西班牙语', students: '420 万学习者' },
        it: { name: '意大利语', students: '150 万学习者' },
        cn: { name: '中文', students: '98 万学习者' }
      }
    },

    method: {
      eyebrow: '练习与训练',
      title: '有趣、高效、有科学依据',
      lead: '每节课都像一个小游戏。现在就试试——用单词拼出翻译。',
      features: {
        short: {
          title: '短练习',
          text: '每节课 3–5 分钟：翻译、听力、发音和组句。在地铁里或排队时都能学。'
        },
        smart: {
          title: '智能训练',
          text: '系统会记住你的错误，并在你快要忘记时重新出现难词。'
        },
        speaking: {
          title: '大声说出来',
          text: '发音训练会听你朗读，并提示哪些音需要加强。'
        }
      }
    },

    exercise: {
      label: '翻译这句话',
      hint: '点击下方的单词',
      check: '检查',
      reset: '重置',
      feedbackEmpty: '请先用单词拼出翻译。',
      feedbackCorrect: '正确！就是“I love to travel”。',
      feedbackWrong: '差一点！检查一下词序，再试一次。'
    },

    exams: {
      eyebrow: '考试备考',
      title: '在 EGE 和 IELTS 中拿到你需要的分数',
      tabs: {
        ege: 'EGE',
        oge: 'OGE',
        ielts: 'IELTS',
        toefl: 'TOEFL 等'
      },
      ege: {
        tag: '英语，11 年级',
        score: '+23',
        unit: '分',
        note: '3 个月平均提分',
        text: '覆盖全部 4 个部分：听力、阅读、语法与词汇、写作。题目采用 EGE 格式，自动批改并逐题解析错误。'
      },
      oge: {
        tag: '英语，9 年级',
        score: '+19',
        unit: '分',
        note: '3 个月平均提分',
        text: '针对 OGE 全部分项备考：听力、阅读、语法和写作。真实题型、计时器和逐题解析。'
      },
      ielts: {
        tag: '英语，18+',
        score: '+1.5',
        unit: '分',
        note: '3 个月平均提分',
        text: '训练 IELTS 全部 4 个模块：Listening、Reading、Writing、Speaking。作文按评分标准批改，Speaking 提供反馈。'
      },
      toefl: {
        tag: '英语，18+',
        score: '+22',
        unit: '分',
        note: '3 个月平均提分',
        text: '备考 TOEFL、Duolingo English Test 及其他国际考试：策略、模拟题和薄弱项训练。'
      },
      bullet1: '2,000+ 道考试格式练习题',
      bullet2: '带计时的模拟考试',
      bullet3: '写作与作文模板',
      cta: '参加模拟考试',
      badgeScore: '模拟考试满分 100 分',
      badgeReady: '备考完成'
    },

    audience: {
      eyebrow: '适合人群',
      title: '任何年龄都可以学习',
      tabs: {
        adults: '成年人',
        school: '中小学生',
        students: '大学生',
        travellers: '旅行者',
        kids: '儿童与家长'
      },
      adults: {
        title: '成年人——工作与职业发展',
        text: '商务邮件、电话会议、演示和面试。商务词汇课程和谈判训练。',
        bullet1: '商务英语',
        bullet2: '面试准备',
        bullet3: '午休 10 分钟',
        value: '10 分钟',
        label: '午休时间'
      },
      school: {
        title: '中小学生——成绩与考试',
        text: '辅导作业、提升成绩，并用短练习备考 OGE 和 EGE，不用死记硬背。',
        bullet1: '5–11 年级课程',
        bullet2: '作业辅导',
        bullet3: 'OGE 与 EGE 备考',
        value: '+23 分',
        label: 'EGE 平均提分'
      },
      students: {
        title: '大学生——学业与实习',
        text: '学术英语、讲座与实习词汇，以及硕士申请所需的 IELTS 和 TOEFL 备考。',
        bullet1: '学术词汇',
        bullet2: '论文与演示',
        bullet3: 'IELTS 与 TOEFL',
        value: '7.0',
        label: '目标 IELTS 分数'
      },
      travellers: {
        title: '旅行者——出行必备语言',
        text: '情景会话课程：机场、酒店、咖啡馆和火车站。出发前两周就能学完。',
        bullet1: '旅行常用语',
        bullet2: '听力练习',
        bullet3: '两周课程',
        value: '2 周',
        label: '自信出行'
      },
      kids: {
        title: '儿童与家长——4 岁起',
        text: '和企鹅一起玩游戏式课程：孩子独立学习，家长可在报告中查看进度。',
        bullet1: '游戏化练习',
        bullet2: '奖励与连续学习',
        bullet3: '家长报告',
        value: '4 岁起',
        label: '轻松无压力'
      }
    },

    motivation: {
      eyebrow: '学习动力',
      title: '不会半途而废——因为根本停不下来',
      lead: '我们把学习变成了游戏：经验值、连续学习、联赛和奖励。每天 15 分钟，比每周学一小时更有效。',
      items: {
        streaks: {
          title: '连续学习天数',
          text: '每天坚持学习，别中断连续记录——习惯会自然养成。'
        },
        leagues: {
          title: '联赛与排行榜',
          text: '和全国的学习者一起比拼，在联赛中不断升级。'
        },
        progress: {
          title: '看得见的进步',
          text: '单词、等级和积分统计——清楚看到自己的成果。'
        },
        reminders: {
          title: '温和提醒',
          text: '在合适的时间提醒你，别忘记上课。'
        }
      }
    },

    streak: {
      label: '连续学习天数',
      days: {
        other: '天连续学习'
      },
      messageStart: '开始连续学习——今天完成一节课，就算一天。',
      messageWeek: '整整一周连续学习！继续保持，不要停下来。',
      messageKeep: '开局不错——别中断连续学习！',
      done: '今天完成一节课',
      reset: '重置演示'
    },

    weekdays: {
      mon: '周一',
      tue: '周二',
      wed: '周三',
      thu: '周四',
      fri: '周五',
      sat: '周六',
      sun: '周日'
    },

    reviews: {
      eyebrow: '评价',
      title: '学员们喜欢我们',
      rating: '4.9',
      count: '120,000+ 条评价',
      countTemplate: '{count}+ 条评价',
      items: {
        anna: {
          avatar: '安',
          name: '安娜，34 岁',
          role: '市场营销经理',
          quote: '我每天午休时学 15 分钟。半年后，我第一次在没有翻译的情况下和国际合作伙伴开了电话会议。'
        },
        misha: {
          avatar: '米',
          name: '米沙，17 岁',
          role: '高中毕业生',
          quote: '我主要在这里备考英语 EGE。带计时的模拟考试真的帮了大忙——我考了 91 分。'
        },
        olga: {
          avatar: '奥',
          name: '奥尔加，41 岁',
          role: '索尼娅的妈妈（孩子 8 岁）',
          quote: '女儿会主动要求学习——对她来说这就是游戏。我还能在家长报告里看到她的进步。'
        },
        dmitry: {
          avatar: '德',
          name: '德米特里，22 岁',
          role: '大学生',
          quote: '我为申请硕士备考 IELTS。按评分标准给出的作文反馈帮我把 Writing 从 5.5 提到了 7.0。'
        },
        irina: {
          avatar: '伊',
          name: '伊琳娜，52 岁',
          role: '旅行者',
          quote: '去意大利旅行前，我用两周学完了短语课程。在咖啡馆和火车站都能自信交流。'
        },
        artem: {
          avatar: '阿',
          name: '阿尔乔姆，29 岁',
          role: '开发者',
          quote: '连续学习天数这个设计太棒了。已经连续 214 天，一次都没断过。我的德语也提升到了 B1。'
        }
      }
    },

    faq: {
      eyebrow: '常见问题',
      title: '大家常问的问题',
      items: {
        free: {
          question: '真的免费吗？',
          answer: '是的。所有基础课程、练习和训练都永久免费。另有可选的 Plus 订阅——无广告、无限次尝试，并包含更多模拟考试。'
        },
        level: {
          question: '可以从哪个水平开始？',
          answer: '任何水平都可以。3 分钟的简短测试会确定你的水平并制定课程——从零开始或接着当前进度。随时可以切换水平。'
        },
        time: {
          question: '需要花多少时间？',
          answer: '每天 15 分钟就够了。课程很短，可以在坐地铁或排队时学 3–5 分钟，连续学习记录不会中断。'
        },
        exams: {
          question: '这能帮我通过 EGE 或 IELTS 吗？',
          answer: '可以。题目按 EGE 和 IELTS 格式设计，有带计时的模拟考试、写作反馈和逐题解析。3 个月平均提分 +23 分。'
        },
        kids: {
          question: '这个服务适合孩子吗？',
          answer: '适合，4 岁起就可以学习。儿童模式提供游戏化任务和奖励，家长会收到进度报告和建议。'
        },
        offline: {
          question: '可以离线学习吗？',
          answer: '可以。你可以在应用中下载课程并离线学习——联网后进度会自动同步。'
        }
      }
    },

    cta: {
      title: '和企鹅一起学语言',
      text: '一分钟就能开始第一节课。免费，无需银行卡，也没有任何义务。'
    },

    footer: {
      brandText: '练习、训练和考试备考——适合成年人、孩子以及所有热爱语言的人。',
      sectionsTitle: '栏目',
      coursesTitle: '课程',
      contactsTitle: '联系方式',
      support: '24/7 在线客服',
      copyright: '© {year} 企鹅。保留所有权利。',
      copyrightSuffix: '企鹅。保留所有权利。'
    }
  };
})(window);
