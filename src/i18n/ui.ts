/**
 * 2026-10-24 - 全站文案字典（en / zh）。
 * 2026-10-24 - 新增文档中心：meta.docs / nav.docs / 页脚文档入口，
 * docs 区块承载五大模块（快速上手、传译、提词、录制、FAQ）的中英全文。
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

    docs: {
      title: "Docs",
      description:
        "Install, activate, and hands-on setup for Translate, Prompter and Recorder — plus the fixes for the things that break.",
    },
  },

  nav: {
    product: "Product",
    pricing: "Pricing",
    about: "About",
    docs: "Docs",
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
          { title: "Docs", path: "/docs" },
        ],
      },
      {
        title: "Company",
        items: [
          { title: "About", path: "/about" },
          { title: "Blog", path: "/blog" },
          { title: "Contact", path: "/contact" },
          { title: "Privacy Policy", path: "/privacy" },
          { title: "Terms of Service", path: "/terms" },
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
    sub: "One-time payment. Own the tools for good — no subscription, no recurring charges.",
    footnote: "One-time payment, no recurring subscription. WeChat Pay, Alipay and international cards accepted.",
    // 2026-10-24 - 定价改为买断制三档：Starter 尝鲜 / Lifetime 永久主推 / Studio 公会团队。
    // TODO: 三处按钮均暂指向 /contact，接入支付或购买页后替换。
    plans: [
      {
        name: "Starter",
        tagline: "30-day starter pass",
        price: "$29",
        period: "/ 30 Days",
        features: [
          "Full access to Translate, Prompter and Recorder",
          "Single device activation",
          "Basic technical support",
        ],
        button: { text: "Get 30-Day Pass", link: "/contact" },
      },
      {
        name: "Lifetime Pass",
        tagline: "Early bird lifetime licence",
        price: "$149",
        original: "$299",
        badge: "Early Bird Lifetime",
        saving: "Save 50%",
        popular: true,
        features: [
          "One payment, lifetime access to Translate + Prompter + Recorder",
          "2 devices — activate, unbind and migrate anytime",
          "Lifetime free major updates",
          "Priority access to the low-latency streaming channel",
          "Official creator VIP group and priority bug fixing",
        ],
        button: { text: "Get Lifetime Access", link: "/contact" },
      },
      {
        name: "Agency / Studio",
        tagline: "For guilds and multi-camera studios",
        price: "$449",
        period: "Lifetime",
        features: [
          "Built for multi-host guilds and multi-camera studios",
          "5–10 devices working at the same time",
          "Batch activation codes with team management",
          "1-on-1 setup guidance from a dedicated engineer",
        ],
        button: { text: "Contact Studio Sales", link: "/contact" },
      },
    ],
  },

  about: {
    title: "Built for creators who actually go live.",
    sub: "A small team tackling the unglamorous parts of content creation: real-time translation, floating prompters, and automated recording.",
    heading: "Streaming shouldn't take five apps and a second laptop.",
    paragraphs: [
      "Every tool we tried was built for a company buying software, not for someone going live at 11pm with an audience already waiting. The translation landed three seconds late. The teleprompter sat in a separate window. The recording was a screen capture that dropped frames.",
      "So we built the three things we kept rebuilding by hand: translation that keeps up with speech, a teleprompter that floats over the stream and follows your pace, and a recorder that keeps a clean, lossless copy. They run locally wherever they can, and they never touch your footage for training.",
    ],
    // 2026-10-24 - 三列价值主张重排：保留 Craft first，第二列改为零学习成本，第三列改为本地优先与隐私。
    values: [
      {
        title: "Craft first",
        body: "We build a few core tools and build them properly, instead of piling on features nobody asked for.",
      },
      {
        title: "Zero learning curve",
        body: "Configured in three minutes before you go live. It floats on top of your scene — nothing complicated to learn.",
      },
      {
        title: "Local-first & Private",
        body: "Recordings are written straight to your own machine. We never train models on a creator's voice or footage.",
      },
    ],
    // 2026-10-24 - 底部 CTA 主按钮改为指向价格页，次按钮保持联系页。
    ctaTitle: "See the plans, or start with a question.",
    ctaPrimary: "Explore Pricing",
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

  // 2026-10-24 - 新增隐私政策与服务条款文案，供 /privacy 与 /terms 使用。
  // TODO: 以下为按业务描述起草的初稿，上线前需法务确认，尤其退款期限与适用法律条款。
  legal: {
    lastUpdated: "October 2026",
    privacy: {
      title: "Privacy Policy",
      description: "What we collect, what we don't do, and how to reach us about it.",
      sections: [
        {
          heading: "What we collect",
          body: "If you send a message through the contact form, we receive your name, email address and the content of your message. The form is handled by Web3Forms, a third-party delivery service. We don't require an account to use this website.",
        },
        {
          heading: "What we don't do",
          body: "We don't train models on your voice, your screen or your footage. Recordings produced by Recorder are written to your own machine, not to our servers. We don't sell or share your contact details for advertising.",
        },
        {
          heading: "Payments",
          body: "Purchases are processed by our payment providers. Card details never reach our servers; we only receive the payment status and the contact details you provide at checkout.",
        },
        {
          heading: "Questions",
          body: "For any privacy question, correction or deletion request, email hello@xycat.com and a human will reply.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "How the licences work, what is included, and what isn't.",
      sections: [
        {
          heading: "Licences",
          body: "All plans are one-time purchases, not subscriptions. The Starter pass grants 30 days of access to Translate, Prompter and Recorder on a single device. The Lifetime Pass grants perpetual access on two devices, which you can unbind and migrate yourself. The Agency licence grants perpetual access for 5–10 devices with batch activation codes.",
        },
        {
          heading: "Updates",
          body: "Lifetime and Agency licences include major version updates for the life of the product. The Starter pass includes updates within its 30-day window.",
        },
        {
          heading: "Refunds",
          body: "If a licence is unused, you may request a refund within 14 days of purchase by emailing hello@xycat.com. Activated licences are not refundable.",
        },
        {
          heading: "Acceptable use",
          body: "You may not resell, sublicense or redistribute the tools or activation codes, or use them for unlawful broadcasts. Licences are granted to a person or a team, not to the public.",
        },
        {
          heading: "Contact",
          body: "Anything unclear in these terms, email hello@xycat.com.",
        },
      ],
    },
  },

  // 2026-10-24 - 文档中心内容字典（en）：结构 = 侧栏目录 + 分区卡片，
  // 视图 views/docs-view.astro 只渲染结构，文案全部在此维护。
  docs: {
    title: "Docs",
    sub: "Install, activate, and hands-on setup for Translate, Prompter and Recorder — plus the fixes for the things that break.",
    tocLabel: "On this page",
    tipLabel: "Tip",
    sections: [
      {
        id: "quick-start",
        nav: "Quick start & license",
        kicker: "01",
        title: "Quick Start & License",
        lead: "Three minutes before your first stream: install the app, activate your licence, and move it between machines when you need to.",
        cards: [
          {
            title: "Install on Windows",
            body: "The installer is a single .exe — no account and no extra software needed.",
            steps: [
              "Download the XIYUE Windows installer (.exe) from your order page or the download link in the app.",
              "Right-click the installer and choose “Run as administrator”.",
              "Run the wizard; XIYUE lands on your desktop and in the system tray.",
            ],
            tip: "If SmartScreen says “Protected your PC”, open “More info” and choose “Run anyway”. The flag comes from a small team shipping new binaries, not from detected malware.",
          },
          {
            title: "Install on macOS",
            steps: [
              "Download the XIYUE .dmg and drag the app into /Applications.",
              "Launch it once, then open System Settings → Privacy & Security and allow the app to run.",
              "Grant two permissions: Screen Recording and Accessibility — both appear in the list after the first launch.",
            ],
            tip: "macOS re-asks for permissions after every app update. If translation audio or the floating window suddenly stops, re-grant both permissions and relaunch the app.",
          },
          {
            title: "Activate your licence",
            body: "Starter 30-day passes and Lifetime passes both activate from the same place with an activation code.",
            steps: [
              "Open XIYUE and go to Settings → License.",
              "Paste your activation code and pick the licence type (Starter or Lifetime).",
              "Click Activate — one online check validates the code, then all three tools unlock on this device.",
            ],
            tip: "Each code binds to one device at a time; a Lifetime pass allows two. If you see “device limit reached”, unbind an old machine first.",
          },
          {
            title: "Move to a new computer",
            steps: [
              "On the old machine, open Settings → License and click Unbind.",
              "Wait for the confirmation — the slot frees up within 10 minutes.",
              "On the new machine, install XIYUE and enter the same activation code.",
            ],
            tip: "Unbinding is for moving your own setup, not for sharing between people. Repeated unbinds in a short window can trip the licence guard; email us if you get locked out.",
          },
        ],
      },
      {
        id: "live-translate",
        nav: "Live Translate",
        kicker: "02",
        title: "Live Translate",
        lead: "Pick where the audio comes from, place the floating bilingual subtitles, and keep latency down without echo.",
        cards: [
          {
            title: "Audio source setup",
            body: "Translate works from your microphone, your system audio, or both.",
            steps: [
              "Open Live Translate → Audio Source.",
              "Pick your input: Microphone for your own voice, System Audio for game or app sound, or both.",
              "Set the source and target languages for the voice track and the subtitle track.",
            ],
            tip: "When capturing system audio, keep the translated output away from the input device — otherwise it translates itself in a loop. A dedicated USB mic avoids this entirely.",
          },
          {
            title: "Floating subtitle window",
            steps: [
              "Enable the floating window in Live Translate → Subtitles; it stays above every app, streaming software included.",
              "Drag it into place — source and target lines scroll in sync.",
              "Tune opacity and font size from the subtitle toolbar so the text reads over any scene.",
            ],
            tip: "Park the window in a corner your stream composition leaves empty. Viewers read subtitles best when they stay still in one place.",
          },
          {
            title: "Latency tuning & echo prevention",
            body: "Two modes: Balanced (default, accuracy first) and Low-latency (faster, slightly less polished). Switch to Low-latency when your connection is good and the conversation moves fast.",
            tip: "Echo almost always means the output got picked up by the input. Use a directional mic, lower the translated-voice volume, or run subtitles-only during the stream.",
          },
        ],
      },
      {
        id: "prompter",
        nav: "Smart Prompter",
        kicker: "03",
        title: "Smart Prompter",
        lead: "The prompter floats over your scene, stays out of the frame, and is fully controlled with two keys.",
        cards: [
          {
            title: "Window behaviour",
            body: "Three behaviours keep it broadcast-safe: a transparent background so only the text shows, click-through so stray clicks never land on the app, and always-on-top full-screen display.",
            steps: [
              "Paste your script; the prompter reflows to your reading pace.",
              "In Prompter → Window, enable Transparent background and Click-through.",
              "Position it where your eye line sits just above the camera.",
            ],
            tip: "Click-through also means you cannot click the window to pause it — use the Space key instead. The window is deliberately inert while you are live.",
          },
          {
            title: "Capture in OBS or streaming companion",
            body: "To put the prompter inside your stream, capture the window and remove its solid backdrop with a chroma key.",
            steps: [
              "Set the prompter background to chroma green (#00FF00) in Prompter → Window.",
              "In OBS (or your streaming companion), add a Window Capture source for the prompter.",
              "Add a Chroma Key filter: colour #00FF00, similarity 40–50, smoothness 1–2.",
            ],
            tip: "No chroma-keyed scene? Keep the background transparent and use Window Capture directly — but some capture pipelines flatten alpha, which is why the green-key route is the reliable default.",
          },
          {
            title: "Shortcuts",
            keys: [
              { key: "Space", action: "Pause / resume scrolling" },
              { key: "Wheel", action: "Adjust scroll speed" },
              { key: "↑ / ↓", action: "Speed up / slow down" },
            ],
            tip: "Shortcuts work whether or not the window has focus, and never reach your stream or other apps.",
          },
        ],
      },
      {
        id: "recorder",
        nav: "Stream Recorder",
        kicker: "04",
        title: "Stream Recorder",
        lead: "Point it at a live room, choose where files land, and walk away — segments and reconnects are handled automatically.",
        cards: [
          {
            title: "Parse a live room",
            steps: [
              "Copy the official share link of the live room you want to record.",
              "Paste it into Recorder → Add Stream.",
              "The app resolves the highest-quality direct stream link and shows it before anything starts.",
            ],
            tip: "Resolution uses the platform's own share links. If a stream fails to resolve, update the app first — platforms rotate their link formats and fixes ship quickly.",
          },
          {
            title: "Recording settings",
            body: "The recorder writes the source stream straight to disk: lossless, no re-encode, no generation loss.",
            steps: [
              "Choose the save folder — an SSD is recommended for high-bitrate streams.",
              "Enable segments and pick a split interval, e.g. every 10, 15 or 30 minutes.",
              "Turn on auto-reconnect so a dropped stream resumes on the same recording timeline.",
            ],
            tip: "Segment files are timestamped, so a long stream reassembles in order. Keep segments at 30 minutes or shorter — huge single files are fragile on long recordings.",
          },
          {
            title: "Troubleshooting",
            steps: [
              "Black frames: check the resolved link is not DRM-locked, then re-paste the share link and resolve again.",
              "No audio: verify the stream carries an audio track (some platforms split audio) and select it in the settings.",
              "Disk warning: the recorder pauses automatically when free space runs low — clear space and it resumes with the next segment.",
            ],
            tip: "A disk-space warning means the recorder will stop writing, not that the current file is corrupt. Let the segment finish, move files off the drive, and it continues.",
          },
        ],
      },
      {
        id: "faq",
        nav: "FAQ & support",
        kicker: "05",
        title: "FAQ & Support",
        lead: "Two things answer most tickets: whitelisting the app, and reaching a human.",
        cards: [
          {
            title: "Antivirus false positives",
            body: "XIYUE ships as a small-team build, and heuristics in some antivirus suites flag it. It is not malware — but do not dismiss the alert blindly.",
            steps: [
              "Windows: add the install folder and the XIYUE process to Windows Defender exclusions.",
              "360 / Tencent PC Manager: add the install folder to the trusted zone.",
              "macOS: the allow switch in System Settings → Privacy & Security plays the same role.",
            ],
            tip: "If a vendor's detection keeps coming back, forward us the report — we work with vendors on false positives and most get cleared within days.",
          },
          {
            title: "Contact support",
            body: "Support is a person, not a queue. Two channels:",
            steps: [
              "Email hello@xycat.com — every message is read, with a reply within two business days.",
              "Lifetime and Studio licence holders also join the official creator VIP group on WeChat, with priority triage and a direct line to the engineers.",
            ],
          },
        ],
      },
    ],
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

    docs: {
      title: "使用说明",
      description: "喜阅三大工具的安装激活、实操调优与常见排查指南，附支持渠道。",
    },
  },

  nav: {
    product: "产品",
    pricing: "价格方案",
    about: "关于我们",
    docs: "使用说明",
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
          { title: "使用文档", path: "/zh/docs" },
        ],
      },
      {
        title: "公司",
        items: [
          { title: "关于我们", path: "/zh/about" },
          // 2026-10-24 - 中文站隐藏博客入口，与导航保持一致（暂无中文内容）
          { title: "联系我们", path: "/zh/contact" },
          { title: "隐私政策", path: "/zh/privacy" },
          { title: "服务条款", path: "/zh/terms" },
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
    sub: "一次付费，永久拥有。没有订阅，没有循环扣费。",
    footnote: "所有购买均为单次付款，非循环扣费。支持微信、支付宝及国际信用卡。",
    // 2026-10-24 - 定价改为买断制三档：Starter 尝鲜 / Lifetime 永久主推 / Studio 公会团队。
    // TODO: 三处按钮均暂指向 /zh/contact，接入支付或购买页后替换。
    plans: [
      {
        name: "Starter 尝鲜版",
        tagline: "30 天尝鲜通行",
        price: "¥199",
        period: "/ 30天",
        features: [
          "Translate、Prompter、Recorder 三款工具完整可用",
          "单设备激活",
          "基础技术支持",
        ],
        button: { text: "开通 30 天", link: "/zh/contact" },
      },
      {
        name: "Lifetime Pass 永久授权",
        tagline: "创始特惠 · 永久买断",
        price: "¥999",
        original: "¥1,999",
        badge: "🔥 创始特惠 · 永久买断",
        saving: "立省 50%",
        popular: true,
        features: [
          "一次付费，终身拥有 Translate + Prompter + Recorder 全部三款工具",
          "支持 2 台设备，随时激活、自主解绑与迁移",
          "终身大版本免费更新",
          "低延迟流媒体通道优先接入",
          "官方专属创作者 VIP 交流群与优先排障",
        ],
        button: { text: "立即获取永久授权", link: "/zh/contact" },
      },
      {
        name: "Agency / Studio 公会版",
        tagline: "适合多主播公会与多机位工作室",
        price: "¥2,999",
        period: "终身买断",
        features: [
          "适合多主播公会与多机位工作室",
          "支持 5~10 台设备同时在线作业",
          "团队批量激活码后台管理",
          "专属工程师 1 对 1 部署指导",
        ],
        button: { text: "联系公会定制", link: "/zh/contact" },
      },
    ],
  },

  about: {
    title: "为真正开播的创作者而生。",
    sub: "一支小团队，专治内容创作里最不体面的部分：实时传译、悬浮提词与自动录制。",
    heading: "开播不该需要五个软件和一台备用电脑。",
    paragraphs: [
      "我们试过的工具，几乎都是卖给「采购软件的公司」的，而不是卖给晚上十一点还在播、观众已经在等的那个人。翻译慢三秒才出来，提词器在另一个窗口，录制是掉帧的屏幕捕获。",
      "所以我们把一直手工拼的那三件事做成了工具：跟得上语速的传译、悬浮在画面上并按你节奏滚动的提词器、以及留存干净无损副本的录制。能本地跑的就本地跑，也不会拿你的素材去训练模型。",
    ],
    // 2026-10-24 - 三列价值主张重排：保留作品优先，第二列改零学习成本，第三列改本地优先与隐私。
    values: [
      {
        title: "作品优先",
        body: "只做少数几个核心工具，并把它们做到位，而不是堆一堆没人要的功能。",
      },
      {
        title: "零学习成本",
        body: "开播前 3 分钟即可配置就绪。悬浮置顶，不挡画面，没有繁复的学习过程。",
      },
      {
        title: "本地优先与隐私",
        body: "录制文件直存本地，绝不拿主播的声音和画面训练模型。",
      },
    ],
    // 2026-10-24 - 底部 CTA 主按钮改为指向价格页，次按钮保持联系页。
    ctaTitle: "看看方案，或者先聊一个问题。",
    ctaPrimary: "查看方案与价格",
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

  // 2026-10-24 - 新增隐私政策与服务条款文案，供 /zh/privacy 与 /zh/terms 使用。
  // TODO: 以下为按业务描述起草的初稿，上线前需法务确认，尤其退款期限与适用法律条款。
  legal: {
    lastUpdated: "2026 年 10 月",
    privacy: {
      title: "隐私政策",
      description: "我们收集什么、不做什么，以及如何找到我们。",
      sections: [
        {
          heading: "我们收集什么",
          body: "如果你通过联系表单留言，我们会收到你的称呼、邮箱地址和留言内容。表单由第三方服务 Web3Forms 负责投递。浏览本站不需要注册账号。",
        },
        {
          heading: "我们不做什么",
          body: "我们不会用你的声音、画面或素材训练模型。Recorder 的录制文件保存在你自己的电脑上，不会上传到我们的服务器。我们不会出售或共享你的联系方式用于广告。",
        },
        {
          heading: "支付",
          body: "购买由支付服务商处理，卡号不会到达我们的服务器。我们只收到支付状态与你在下单时提供的联系方式。",
        },
        {
          heading: "有问题",
          body: "涉及隐私的咨询、更正或删除请求，请发邮件到 hello@xycat.com，会有人回复你。",
        },
      ],
    },
    terms: {
      title: "服务条款",
      description: "授权如何计算、包含什么、不包含什么。",
      sections: [
        {
          heading: "授权方式",
          body: "所有方案均为一次性购买，不是订阅。Starter 通行授权为 30 天内、单设备使用 Translate、Prompter 与 Recorder。Lifetime Pass 为永久授权，支持 2 台设备，可自行解绑与迁移。Agency 授权为永久授权，支持 5~10 台设备，并提供批量激活码。",
        },
        {
          heading: "更新",
          body: "Lifetime 与 Agency 授权在产品生命周期内包含大版本更新。Starter 通行在 30 天内包含更新。",
        },
        {
          heading: "退款",
          body: "授权未使用的情况下，可在购买后 14 天内发邮件到 hello@xycat.com 申请退款。已激活的授权不支持退款。",
        },
        {
          heading: "使用边界",
          body: "不得转售、再授权或再分发本工具及激活码，也不得将其用于违法违规的直播内容。授权授予个人或团队，而非公开传播。",
        },
        {
          heading: "联系",
          body: "对条款有不清楚的地方，发邮件到 hello@xycat.com。",
        },
      ],
    },
  },

  // 2026-10-24 - 文档中心内容字典（zh）：与 en.docs 同构，编译期由 typeof en 校验。
  docs: {
    title: "使用说明",
    sub: "同声传译、主播提词、直播录制的安装激活与实操调优指南，附常见排查与支持渠道。",
    tocLabel: "本页目录",
    tipLabel: "避坑提示",
    sections: [
      {
        id: "quick-start",
        nav: "快速上手与授权",
        kicker: "01",
        title: "快速上手与授权激活",
        lead: "开播前三分钟：装好应用、激活授权，需要时把授权从旧机器迁到新机器。",
        cards: [
          {
            title: "Windows 安装",
            body: "安装程序是单个 .exe，不需要账号，也没有额外依赖。",
            steps: [
              "从订单页或应用内的下载链接下载 XIYUE Windows 安装程序（.exe）。",
              "右键安装程序，选择“以管理员身份运行”。",
              "按向导完成安装；应用会出现在桌面与系统托盘。",
            ],
            tip: "如果 SmartScreen 提示“已保护你的电脑”，点“更多信息”→“仍要运行”。该提示来自小团队的新二进制，而不是查杀到了恶意软件。",
          },
          {
            title: "macOS 安装",
            steps: [
              "下载 XIYUE 的 .dmg，把应用拖进 /Applications。",
              "先启动一次，再打开 系统设置 → 隐私与安全性，允许该应用运行。",
              "授予两项权限：屏幕录制 与 辅助功能——两者都会出现在首次启动之后的列表中。",
            ],
            tip: "macOS 在应用每次更新后都会重新询问权限。若翻译音频或悬浮窗突然失效，重新授予这两项权限并重启应用。",
          },
          {
            title: "激活授权",
            body: "尝鲜版 30 天通行与永久授权都在同一位置、用激活码完成。",
            steps: [
              "打开 XIYUE，进入 设置 → 授权。",
              "粘贴激活码并选择授权类型（尝鲜版或永久版）。",
              "点击“激活”——一次在线校验后，三款工具在该设备全部解锁。",
            ],
            tip: "每个激活码同时只能绑定一台设备；永久授权支持两台。看到“设备数量已达上限”时，先在旧设备解绑。",
          },
          {
            title: "换电脑迁移",
            steps: [
              "在旧设备上打开 设置 → 授权，点击“解除绑定”。",
              "等待确认——名额会在 10 分钟内释放。",
              "在新设备上安装 XIYUE，输入同一个激活码。",
            ],
            tip: "解绑用于迁移自己的设备，不是多人共享。短时间内反复解绑可能触发授权风控；被锁住时直接发邮件给我们。",
          },
        ],
      },
      {
        id: "live-translate",
        nav: "喜悦同声传译",
        kicker: "02",
        title: "喜悦同声传译",
        lead: "选对音频来源、放好双语悬浮字幕、压低延迟而不串音。",
        cards: [
          {
            title: "音频源配置",
            body: "传译支持三类音频输入：你的麦克风、系统声音，或两者同时。",
            steps: [
              "打开 喜悦同声传译 → 音频源。",
              "选择输入：自己的声音用麦克风，游戏或应用声音用系统声音，也可两者同开。",
              "为语音与字幕分别设置源语言与目标语言。",
            ],
            tip: "捕获系统声音时，把翻译输出设备与输入设备分开，否则会形成“翻译自己”的回环。专用 USB 麦克风可以从根上避免这个问题。",
          },
          {
            title: "悬浮字幕窗",
            steps: [
              "在 喜悦同声传译 → 字幕 中开启悬浮窗；它始终置顶于所有应用之上，包括直播推流软件。",
              "拖到目标位置——源语言与目标语言两行字幕同步滚动。",
              "用字幕工具条调节透明度与字号，保证任何画面下都清晰可读。",
            ],
            tip: "把字幕窗放在直播画面留出的角落。位置固定不动，观众读起来最轻松。",
          },
          {
            title: "低延迟与防串音",
            body: "两种模式：均衡（默认，准确率优先）与低延迟（速度优先、译文略糙）。网络好、对话节奏快时切到低延迟。",
            tip: "串音几乎都是输出被输入收走了：换指向性麦克风、调低翻译音量，或直播时改用“仅字幕”模式。",
          },
        ],
      },
      {
        id: "prompter",
        nav: "主播提词器",
        kicker: "03",
        title: "主播提词器",
        lead: "提词器悬浮在画面上、不入镜，两个按键管所有。",
        cards: [
          {
            title: "窗口特性",
            body: "三个特性保证开播安全：透明背景只显示文字、鼠标穿透避免误触点击、全屏置顶。",
            steps: [
              "粘贴你的稿件；提词器会跟随你的语速自动重排。",
              "在 提词器 → 窗口 中开启 透明背景 与 鼠标穿透。",
              "把它放到你的视线位于摄像头之上时能自然看到的位置。",
            ],
            tip: "开了鼠标穿透后点不到窗口本身——用空格键代替点击。开播时窗口被刻意设为不可交互。",
          },
          {
            title: "OBS / 直播伴侣抓取",
            body: "想让提词器出现在直播间里：抓取窗口，再用绿幕色度键去掉底色。",
            steps: [
              "在 提词器 → 窗口 中把背景设为绿幕绿（#00FF00）。",
              "在 OBS（或直播伴侣）中添加 窗口采集，采集提词器窗口。",
              "给采集源加 色度键（Chroma Key）滤镜：颜色 #00FF00，相似度 40–50，平滑度 1–2。",
            ],
            tip: "不做色度键场景？保持背景透明直接窗口采集即可——但部分采集链路会把透明层压平，这是绿幕路线更稳的原因。",
          },
          {
            title: "快捷操作",
            keys: [
              { key: "空格", action: "暂停 / 继续滚动" },
              { key: "滚轮", action: "调节滚动速度" },
              { key: "↑ / ↓", action: "加速 / 减速" },
            ],
            tip: "快捷键与窗口是否聚焦无关，也不会传到直播软件或其他应用。",
          },
        ],
      },
      {
        id: "recorder",
        nav: "直播录制工具",
        kicker: "04",
        title: "直播录制工具",
        lead: "指向一个直播间、选好存放位置，剩下的分段与重连都是自动的。",
        cards: [
          {
            title: "解析直播间",
            steps: [
              "复制要录制的直播间官方分享链接。",
              "粘贴到 录制工具 → 添加直播。",
              "应用解析出最高画质直链并先展示给你，确认后才开始录制。",
            ],
            tip: "解析走的是平台官方分享链接。解析失败先更新应用——平台会轮换链接格式，补丁通常很快。",
          },
          {
            title: "录制设置",
            body: "录制工具把直播源直接写入本地磁盘：无损原画、不二次编码、不产生代际损失。",
            steps: [
              "选择保存目录——高码率直播建议使用 SSD。",
              "开启分段保存，选择切分间隔（如每 10 / 15 / 30 分钟）。",
              "打开断流自动重连，直播中断后会在同一条时间线上续录。",
            ],
            tip: "分段文件按时间戳命名，长直播可以按顺序拼回。分段建议不超过 30 分钟——过大的单文件在超长录制中很脆弱。",
          },
          {
            title: "常见排查",
            steps: [
              "画面黑屏：先确认解析出的直链没有 DRM 锁，然后重新粘贴分享链接再次解析。",
              "没有声音：确认该直播是否带音轨（部分平台音轨单独分发），在设置里选中对应音轨。",
              "磁盘空间告警：空间不足时录制会自动暂停——腾出空间后从下一段继续。",
            ],
            tip: "空间告警意味着“即将停写”，不代表当前文件损坏。让本段录完、把旧文件移走，录制会自动继续。",
          },
        ],
      },
      {
        id: "faq",
        nav: "常见问题与支持",
        kicker: "05",
        title: "常见问题与技术支持",
        lead: "两件事能解决绝大多数工单：把应用加入信任白名单，以及找到真人。",
        cards: [
          {
            title: "杀毒软件误报",
            body: "XIYUE 是小团队产品，部分杀毒软件的特征库会误报。它不是恶意软件，但请不要无脑忽略告警。",
            steps: [
              "Windows：把安装目录与 XIYUE 进程加入 Windows Defender 排除项。",
              "360 / 电脑管家：把安装目录加入信任区。",
              "macOS：系统设置 → 隐私与安全里的“允许”开关起同样作用。",
            ],
            tip: "如果某家厂商反复误报，把检测报告发给我们——我们与厂商协同处理误报，多数几天内即可清除。",
          },
          {
            title: "联系支持",
            body: "支持由真人处理，不走工单队列。两个渠道：",
            steps: [
              "邮件 hello@xycat.com——每封都看，两个工作日内回复。",
              "永久授权与公会版用户另有官方创作者 VIP 微信群，优先排障、直通工程师。",
            ],
          },
        ],
      },
    ],
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
