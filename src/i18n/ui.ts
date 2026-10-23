/**
 * 2026-10-24 - 全站文案字典（en / zh）。
 *
 * 设计原则：
 * 1. 文案与视图分离——组件只消费字典，不内嵌任何可见文案，新增语言时只加一个 locale 分支。
 * 2. zh 显式标注为 typeof en，缺键或多键都会在编译期报错，避免翻译漏项。
 * 3. 站内路径写在字典里而非组件里，因为 /pricing 与 /zh/pricing 是两套地址，
 *    不能在渲染时简单拼前缀（首页的 /zh/ 与英文的 / 形态就不同）。
 */

const en = {
  meta: {
    home: {
      title: "",
      description:
        "XIYUE builds three live tools for creators: real-time translation, an adaptive teleprompter, and automated stream recording. Free to try.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Simple pricing for creators. Start free, upgrade when you stream every week. No seats to count, no annual lock-in.",
    },
    about: {
      title: "About",
      description:
        "XIYUE is a small team of creators and engineers building AI tools for the people who make things. Here's what we believe.",
    },
    contact: {
      title: "Contact",
      description:
        "Questions, bugs, or a project to talk through. Send a note and a human from XIYUE will reply within two business days.",
    },
    notFound: {
      title: "Page not found",
      description:
        "This page doesn't exist. Head back to XIYUE to find AI tools for creators.",
    },
  },

  nav: {
    product: "Product",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    startFree: "Start free",
    switchLabel: "Switch language",
    products: [
      { title: "Translate", path: "/#translate" },
      { title: "Prompter", path: "/#prompter" },
      { title: "Recorder", path: "/#recorder" },
    ],
  },

  footer: {
    tagline: "AI tools for people who make things.",
    columns: [
      {
        title: "Product",
        items: [
          { title: "Translate", path: "/#translate" },
          { title: "Prompter", path: "/#prompter" },
          { title: "Recorder", path: "/#recorder" },
          { title: "Pricing", path: "/pricing" },
        ],
      },
      {
        title: "Company",
        items: [
          { title: "About", path: "/about" },
          { title: "Blog", path: "/blog" },
          { title: "Contact", path: "/contact" },
        ],
      },
    ],
    // 2026-10-24 - 移除 builtWith 模板签名：页脚不再展示技术栈来源
  },

  hero: {
    eyebrow: "Creator AI Tools",
    title: "AI tools for people who make things.",
    sub: "XIYUE builds three tools for live creators — real-time translation, an adaptive teleprompter, and automated recording. Set up once, then focus on the stream.",
    ctaPrimary: "Start free",
    ctaSecondary: "See what's inside",
    note: "Free to try. No card required.",
  },

  features: {
    title: "Three tools for going live.",
    sub: "Translate what you say, prompt what you planned, record what happened — without switching apps mid-stream.",
    items: [
      {
        id: "translate",
        name: "Translate",
        kicker: "Real-time voice & subtitle translation",
        headline: "Say it once. Stream it in every language.",
        subtext:
          "Real-time AI voice and subtitle translation for live streamers. Your audience hears you in their own language while the subtitles keep pace with the conversation.",
        points: ["Live voice", "Synced subtitles", "Low latency"],
      },
      {
        id: "prompter",
        name: "Prompter",
        kicker: "Adaptive teleprompter",
        headline: "The script that keeps up with you.",
        subtext:
          "A smart adaptive teleprompter for creators and live shows. It follows your pace, reflows when you improvise, and stays out of the frame.",
        points: ["Pace-adaptive", "Auto reflow", "Off-camera"],
      },
      {
        id: "recorder",
        name: "Recorder",
        kicker: "Multi-platform stream recording",
        headline: "Every platform, captured once.",
        subtext:
          "Automated multi-platform stream recording and archiving. Point it at a channel and it keeps a clean copy — no screen capture, no babysitting.",
        points: ["Multi-platform", "Auto archive", "Clean source"],
      },
    ],
  },

  logos: {
    text: "Runs alongside the setup you already stream with. Nothing to re-install, nothing to relearn.",
    points: ["No extra hardware", "No new workflow", "Your footage stays yours"],
  },

  cta: {
    title: "Start with one project.",
    sub: "Free to try. No card, no call, no onboarding deck.",
    button: "Start free",
  },

  pricing: {
    title: "Pricing",
    sub: "Simple pricing. No seats to count, no annual lock-in.",
    footnote: "Prices in USD. Cancel anytime.",
    plans: [
      {
        name: "Free",
        subtitle: "For trying things out",
        price: "$0",
        popular: false,
        features: [
          "All three tools, session limits apply",
          "Translate: live subtitles",
          "Prompter: basic script editor",
          "Recorder: short retention",
          "Community support",
        ],
        button: { text: "Start free", link: "/pricing" },
      },
      {
        name: "Creator",
        subtitle: "For people who stream every week",
        price: { monthly: "$19", annual: "$16" },
        popular: true,
        features: [
          "All three tools, no session limits",
          "Translate: live voice + subtitles",
          "Prompter: adaptive pacing, multi-device",
          "Recorder: high-quality archive, long retention",
          "Priority support",
        ],
        button: { text: "Start free", link: "/pricing" },
      },
      {
        name: "Studio",
        subtitle: "For teams running a channel",
        price: "Custom",
        popular: false,
        features: [
          "Everything in Creator",
          "Shared library and team seats",
          "Recorder: extended retention",
          "SSO",
          "Dedicated contact",
        ],
        button: { text: "Talk to us", link: "/contact" },
      },
    ],
  },

  about: {
    title: "Built for the people who go live.",
    sub: "A small team of creators and engineers, building low-latency translation, an on-screen teleprompter, and lossless recording — for people who actually stream.",
    heading: "Streaming shouldn't take five apps and a second laptop.",
    paragraphs: [
      "Every tool we tried was built for a company buying software, not for someone going live at 11pm with an audience already waiting. The translation landed three seconds late. The teleprompter sat in a separate window. The recording was a screen capture that dropped frames.",
      "So we built the three things we kept rebuilding by hand: translation that keeps up with speech, a teleprompter that floats over the stream and follows your pace, and a recorder that keeps a clean, lossless copy. They run locally wherever they can, and they never touch your footage for training.",
    ],
    // 2026-10-24 - 三列原则保留，第三列改为强调 local-first 与不训练创作者数据。
    // 注意：这是对外的数据处理承诺，必须与隐私条款一致，条款未落地前不要上线该表述。
    values: [
      {
        title: "Craft first",
        body: "If the output isn't good enough to publish, it isn't done. A translation that lags a second behind is worse than none at all.",
      },
      {
        title: "Plain tools",
        body: "If it needs a tutorial, it's not finished. Three tools, each obvious by the second use.",
      },
      {
        title: "Your work stays yours",
        body: "Local-first by default — your audio and footage are processed on your machine wherever possible. We don't train on creator data.",
      },
    ],
    // 2026-10-24 - 底部 CTA 由单行文字链接改为极简双按钮模块
    ctaTitle: "Start with the tools, or with a question.",
    ctaPrimary: "Explore Tools & Pricing",
    ctaSecondary: "Contact Us",
  },

  contact: {
    title: "Contact",
    sub: "Questions, bugs, or a project you want to talk through — we read everything.",
    heading: "Talk to a human.",
    body: "No ticket queue, no chatbot loop. Send a note and one of us will reply — usually within two business days.",
    emailNote:
      "Prefer email? Write to us directly — the form and the inbox reach the same people.",
    form: {
      name: { label: "Full name", placeholder: "Jane Chen", error: "Please add your name." },
      email: {
        label: "Email",
        placeholder: "you@studio.com",
        error: "That email doesn't look right.",
      },
      message: {
        label: "What are you working on?",
        placeholder: "A rough idea is enough.",
        error: "Add a message so we know what you need.",
      },
      submit: "Send message",
      sending: "Sending…",
      success: "Got it — we'll reply within two business days.",
      failure: "That didn't go through. Email {email} and we'll pick it up there.",
      subject: "New message from xycat.com",
    },
  },

  notFound: {
    label: "404",
    title: "This page took a different path.",
    body: "The link may be out of date, or the page moved. Head back home, or tell us what you were looking for.",
    backHome: "← Back to home",
    tellUs: "Tell us",
  },
};

const zh: typeof en = {
  meta: {
    home: {
      title: "创作者 AI 工具",
      description:
        "喜阅（XIYUE）为直播创作者提供三件工具：实时同声传译、自适应提词、多平台自动录制。免费试用，无需绑定银行卡。",
    },
    pricing: {
      title: "价格方案",
      description:
        "面向创作者的简单定价：免费版可直接开始，创作者版为每周开播的人设计。不计席位，不锁年，随时取消。",
    },
    about: {
      title: "关于我们",
      description:
        "喜阅是一支由创作者和工程师组成的小团队，为真正做东西的人打造直播 AI 工具：翻译、提词、录制。",
    },
    contact: {
      title: "联系我们",
      description:
        "问题、bug，或者一个想聊的项目，都可以留个消息。我们在两个工作日内回复，每一封都会看。",
    },
    notFound: {
      title: "页面未找到",
      description: "这个页面不存在。回到喜阅首页，了解面向创作者的 AI 工具。",
    },
  },

  nav: {
    product: "产品",
    pricing: "价格方案",
    about: "关于我们",
    blog: "博客",
    contact: "联系我们",
    startFree: "免费开始",
    switchLabel: "切换语言",
    products: [
      { title: "同声传译", path: "/zh/#translate" },
      { title: "主播提词", path: "/zh/#prompter" },
      { title: "直播录制", path: "/zh/#recorder" },
    ],
  },

  footer: {
    tagline: "为创作者而生的 AI 工具。",
    columns: [
      {
        title: "产品",
        items: [
          { title: "同声传译", path: "/zh/#translate" },
          { title: "主播提词", path: "/zh/#prompter" },
          { title: "直播录制", path: "/zh/#recorder" },
          { title: "价格方案", path: "/zh/pricing" },
        ],
      },
      {
        title: "公司",
        items: [
          { title: "关于我们", path: "/zh/about" },
          // 2026-10-24 - 中文站隐藏博客入口，与导航保持一致（暂无中文内容）
          { title: "联系我们", path: "/zh/contact" },
        ],
      },
    ],
    // 2026-10-24 - 移除 builtWith 模板签名：页脚不再展示技术栈来源
  },

  hero: {
    eyebrow: "创作者 AI 工具",
    title: "为创作者而生的 AI 工具。",
    sub: "喜阅为直播创作者做了三件工具——实时翻译、自适应提词、自动录制。配置一次，之后只管开播。",
    ctaPrimary: "免费开始",
    ctaSecondary: "看看有什么",
    note: "免费试用，无需绑定银行卡。",
  },

  features: {
    title: "三件工具，为直播而生。",
    sub: "说出来的自动翻译，准备好的自动提词，发生过的自动录制——直播过程中无需切换应用。",
    items: [
      {
        id: "translate",
        name: "同声传译",
        kicker: "实时语音与字幕翻译",
        headline: "说一次，用每种语言开播。",
        subtext:
          "面向直播主的实时 AI 语音与字幕翻译。观众用自己的语言听到你说话，字幕始终跟得上对话节奏。",
        points: ["实时语音", "同步字幕", "低延迟"],
      },
      {
        id: "prompter",
        name: "主播提词",
        kicker: "自适应提词器",
        headline: "跟得上你的提词稿。",
        subtext:
          "面向创作者与直播现场的智能自适应提词器。它跟随你的语速，临场发挥时自动重排，并且不会出现在画面里。",
        points: ["跟随语速", "自动重排", "不入镜"],
      },
      {
        id: "recorder",
        name: "直播录制",
        kicker: "多平台直播录制",
        headline: "一次开播，全平台留存。",
        subtext:
          "自动化的多平台直播录制与归档。指定频道即可持续留存干净副本——无需录屏，也无需守着。",
        points: ["多平台", "自动归档", "原始画质"],
      },
    ],
  },

  logos: {
    text: "与你现有的直播环境并行工作，无需重装，无需重新学习。",
    points: ["无需额外硬件", "不改变既有流程", "素材归你所有"],
  },

  cta: {
    title: "从一个项目开始。",
    sub: "免费试用。无需银行卡，无需预约，无需看教程。",
    button: "免费开始",
  },

  pricing: {
    title: "价格方案",
    sub: "简单定价。不计席位，不锁年。",
    footnote: "价格以美元计，可随时取消。",
    plans: [
      {
        name: "免费版",
        subtitle: "先试试看",
        price: "$0",
        popular: false,
        features: [
          "三件工具全开放，单次时长有限制",
          "同声传译：实时字幕",
          "主播提词：基础稿件编辑",
          "直播录制：较短留存",
          "社区支持",
        ],
        button: { text: "免费开始", link: "/zh/pricing" },
      },
      {
        name: "创作者版",
        subtitle: "每周都要开播的人",
        price: { monthly: "$19", annual: "$16" },
        popular: true,
        features: [
          "三件工具全开放，不限时长",
          "同声传译：实时语音 + 字幕",
          "主播提词：自适应语速、多设备",
          "直播录制：高清归档、长留存",
          "优先支持",
        ],
        button: { text: "免费开始", link: "/zh/pricing" },
      },
      {
        name: "工作室版",
        subtitle: "运营一个频道的小团队",
        price: "定制",
        popular: false,
        features: [
          "包含创作者版全部权益",
          "共享素材库与团队席位",
          "直播录制：更长留存",
          "SSO 单点登录",
          "专属对接人",
        ],
        button: { text: "联系我们", link: "/zh/contact" },
      },
    ],
  },

  about: {
    title: "为真正开播的人而做。",
    sub: "一支由创作者和工程师组成的小团队，做低延迟传译、悬浮提词和无损录制——给真正在开播的人用。",
    heading: "开播不该需要五个软件和一台备用电脑。",
    paragraphs: [
      "我们试过的工具，几乎都是卖给「采购软件的公司」的，而不是卖给晚上十一点还在播、观众已经在等的那个人。翻译慢三秒才出来，提词器在另一个窗口，录制是掉帧的屏幕捕获。",
      "所以我们把一直手工拼的那三件事做成了工具：跟得上语速的传译、悬浮在画面上并按你节奏滚动的提词器、以及留存干净无损副本的录制。能本地跑的就本地跑，也不会拿你的素材去训练模型。",
    ],
    // 2026-10-24 - 三列原则保留，第三列改为强调本地优先与不训练创作者数据。
    values: [
      {
        title: "作品优先",
        body: "产出不够好到能直接发布，就是没做完。慢一秒的翻译，比没有翻译更糟。",
      },
      {
        title: "工具要简单",
        body: "需要看教程才能用，就是没做完。三件工具，每一件在第二次使用时都该理所当然。",
      },
      {
        title: "你的作品属于你",
        body: "默认本地优先：音频与画面尽可能在你的机器上处理。我们不会用创作者的素材训练模型。",
      },
    ],
    // 2026-10-24 - 底部 CTA 由单行文字链接改为极简双按钮模块
    ctaTitle: "从工具开始，或从一个问题开始。",
    ctaPrimary: "查看工具与价格",
    ctaSecondary: "联系我们",
  },

  contact: {
    title: "联系我们",
    sub: "问题、bug，或者一个想聊的项目——每一封我们都会看。",
    heading: "和真人对话。",
    body: "没有工单队列，没有机器人循环。留个消息，我们会回复——通常两个工作日内。",
    emailNote: "更喜欢邮件？直接写给我们——表单和收件箱背后是同一批人。",
    form: {
      name: { label: "称呼", placeholder: "张三", error: "请填写你的称呼。" },
      email: {
        label: "邮箱",
        placeholder: "you@studio.com",
        error: "这个邮箱看起来不太对。",
      },
      message: {
        label: "你在做什么？",
        placeholder: "粗略的想法就够了。",
        error: "请写一句，让我们知道你需要什么。",
      },
      submit: "发送消息",
      sending: "发送中…",
      success: "已收到——我们会在两个工作日内回复。",
      failure: "没有发送成功。请发邮件到 {email}，我们在那边接着处理。",
      subject: "来自 xycat.com 的新消息",
    },
  },

  notFound: {
    label: "404",
    title: "这个页面走了另一条路。",
    body: "链接可能过期了，或者页面已经移动。回首页看看，或者告诉我们你在找什么。",
    backHome: "← 返回首页",
    tellUs: "告诉我们",
  },
};

export const ui = { en, zh };
export type Lang = keyof typeof ui;
export type Dict = typeof en;
