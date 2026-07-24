window.portfolioData = {
  profile: {
    nameCn: "杜可心",
    nameEn: "Annie",
    titleCn: "AI探索者 × 数字媒体创作者",
    titleEn: "AI Explorer / Creative Technologist",
    summary: "我是一名数字媒体艺术背景的创作者，持续探索 AI 技术如何应用于创意表达、工作流程优化和实际问题解决。",
    school: "广东工业大学",
    major: "数字媒体艺术专业",
    introVideo: { src: "src/assets/videos/about-intro.mp4", poster: "src/assets/images/about-intro-cover.webp" },
    keywords: ["AI Exploration", "AIGC Creation", "Data Analysis", "Creative Technology", "Visual Design"],
    directions: ["AI工具探索", "数字创意实践", "数据分析", "视觉表达"],
    abilities: [
      {
        title: "AI实践能力",
        items: ["熟悉 AI 图像、视频生成工具", "使用 AI 辅助创作流程", "探索 AI 工作流"]
      },
      {
        title: "数据分析能力",
        items: ["数据复盘", "用户洞察", "内容表现分析"]
      },
      {
        title: "创意能力",
        items: ["AIGC影像", "摄影", "视频创作", "交互设计"]
      }
    ]
  },
  nav: [
    { labelCn: "首页", labelEn: "Home", href: "index.html#home" },
    { labelCn: "关于我", labelEn: "About Me", href: "index.html#about" },
    { labelCn: "实习经历", labelEn: "Experience", href: "index.html#experience" },
    { labelCn: "项目作品", labelEn: "Projects", href: "index.html#projects" },
    { labelCn: "荣誉经历", labelEn: "Awards", href: "index.html#awards" },
    { labelCn: "创意实验室", labelEn: "Creative Lab", href: "index.html#creative-lab" },
    { labelCn: "简历", labelEn: "Resume", href: "index.html#resume" },
    { labelCn: "联系", labelEn: "Contact", href: "index.html#contact" }
  ],
  featuredProjectIds: ["ai-creative-radar", "algorithm-sutra", "creator-discovery-tool"],
  experiences: [
    {
      id: "baidu",
      company: "百度",
      role: "创作者运营实习生",
      period: "2026.06 - 至今",
      tags: ["创作者运营", "平台生态", "数据分析", "AI工作流"],
      summary: "参与百度百家号创作者生态运营，负责外国人及高考垂类创作者运营，通过作者筛选、站外挖掘、内容运营和数据分析，推动优质内容供给与创作者生态建设。",
      responsibilities: [
        "基于平台数据工具筛选潜力作者，根据内容质量、活跃度、涨粉情况、内容表现等维度进行作者分析和分层。",
        "通过抖音、小红书、B站、视频号等渠道挖掘优质创作者，通过私信触达、微信沟通和合作方式推进作者入驻。",
        "参与高考、志愿填报、外国人看中国等方向的事件集和专题运营。",
        "使用 Claude Code、Codex 等 AI 工具探索运营流程优化，搭建轻量网页工具辅助数据整理、信息汇总和工作效率提升。"
      ],
      achievements: [
        "累计筛选作者 3000+",
        "维护核心作者 230+",
        "参与事件集 / 专题建设 15+",
        "覆盖内容 500+ 条",
        "触达创作者 300+"
      ],
      growth: "这段经历让我深入理解平台生态运营逻辑，也让我开始探索如何利用 AI 工具提升运营效率，将技术应用到真实业务场景中。",
      video: { src: "src/assets/videos/experience-baidu.mp4", poster: "src/assets/images/experience-baidu-cover.webp" },
      cover: "src/assets/images/experience-baidu-cover.webp",
      images: []
    },
    {
      id: "oppo",
      company: "OPPO",
      role: "数字营销实习生",
      period: "2026.03 - 2026.06",
      tags: ["数字营销", "数据分析", "内容策略", "AIGC视觉"],
      summary: "参与 OPPO 新品营销和小红书内容增长项目，通过用户洞察、内容分析和数据复盘，支持新品传播策略优化。",
      responsibilities: [
        "参与 Reno16 新品年轻化传播方向讨论，围绕学生用户群体分析内容偏好和传播切入点。",
        "整理 X9s Pro、X9u 等新品投放内容，结合 CTR、回搜率、互动率、种草转化率等指标分析内容表现。",
        "参与小红书搜索增长项目，拆解产品卖点，跟踪关键词表现，输出优化建议。",
        "探索 Midjourney、即梦等 AI 工具辅助营销视觉创作，包括视觉方向探索、素材生成和创意方案辅助。"
      ],
      achievements: [
        "筛选高转化笔记 30+ 篇",
        "建立新品投放素材库",
        "素材复用率提升约 40%",
        "跟踪 15 个重点搜索词",
        "搜索排名提升 10 位+"
      ],
      growth: "这段经历让我认识到内容效果不仅依靠创意，也需要结合数据反馈理解用户需求，并不断优化传播策略。",
      video: { src: "src/assets/videos/experience-oppo.mp4", poster: "src/assets/images/experience-oppo-cover.webp" },
      cover: "src/assets/images/experience-oppo-cover.webp",
      images: []
    },
    {
      id: "art-expo",
      company: "北京当代艺术博览会",
      role: "内容运营实习生",
      period: "2025.06 - 2025.08",
      tags: ["内容策划", "艺术传播", "AI辅助创作"],
      summary: "参与艺术展会期间的新媒体内容传播工作，负责公众号、小红书等平台内容策划、素材整理和传播优化。",
      responsibilities: [
        "围绕展会节点、艺术议题和嘉宾内容进行选题策划。",
        "整理论坛、访谈等长内容，利用 AI 工具进行转写、观点提炼和结构化整理。",
        "完成公众号、小红书内容制作，包括文案、视觉排版和发布支持。"
      ],
      achievements: [
        "独立策划“艺术主词人朱珠”官宣内容",
        "单篇获得 680+ 可见互动",
        "累计产出内容 15 篇",
        "平均阅读 3000+"
      ],
      growth: "这段经历提升了我将复杂信息转化为易传播内容的能力，也让我开始尝试利用 AI 优化内容生产流程。",
      video: { src: "src/assets/videos/experience-art-expo.mp4", poster: "src/assets/images/experience-art-expo-cover.webp" },
      cover: "src/assets/images/experience-art-expo-cover.webp",
      images: []
    }
  ],
  projects: [
    {
      id: "ai-creative-radar",
      title: "AI创意雷达",
      subtitle: "AI Creative Radar",
      year: "2026",
      tags: ["AI Workflow", "Vibe Coding", "AI Tool Prototype"],
      cover: "src/assets/images/project-ai-creative-radar-cover.webp",
      video: { src: "src/assets/videos/project-ai-creative-radar.mp4", poster: "src/assets/images/project-ai-creative-radar-video-cover.webp" },
      summary: "一个面向 AI 视觉创作者的创作前期工具原型，用于 AI 资讯扫描、灵感整理、方案脑暴和本地归档。这个项目重点展示我如何主动尝试 AI API 与 Vibe Coding，把 AI 能力转化为可使用的网页工具。",
      background: "AI 创作者在进入图片、海报或视频生成之前，常常需要先完成趋势观察、灵感收集和方案判断。AI创意雷达尝试解决的是创作前期的信息分散与方案整理问题，而不是直接替代创作者生成最终视觉作品。",
      process: [
        "梳理 AIGC 创作者的前期工作流程，将需求拆成资讯扫描、灵感收集、方案脑暴和归档四个环节。",
        "使用 AI 辅助完成网页原型搭建，通过 Vibe Coding 快速验证页面结构、交互逻辑和内容流转方式。",
        "预留 AI API 调用能力，让用户可以围绕主题、受众、视觉风格和执行路径生成方案草稿。",
        "将结果以本地归档思路组织，方便后续继续筛选、复盘和进入正式创作。"
      ],
      tools: ["DeepSeek API", "HTML", "CSS", "JavaScript", "Vibe Coding", "Codex"],
      results: [
        "完成 Beta v1.0 工具原型的信息架构与页面流程。",
        "明确产品边界：不直接生成图片、海报或视频，而是服务于创作前期决策。",
        "验证 AI 工具辅助网页开发和创意流程整理的可行性。"
      ],
      github: "https://github.com/Xianliangzi/ai-creative-radar",
      demo: "https://ai-creative-radar-d6dojveb06bd7f-1429388415.tcloudbaseapp.com/",
      extraVideos: [
        {
          title: "详情展示",
          description: "展示 AI Creative Radar 的功能流程与页面使用方式，不作为项目介绍视频。",
          video: { src: "src/assets/videos/project-ai-creative-radar-detail.mp4", poster: "src/assets/images/project-ai-creative-radar-cover.webp" }
        }
      ],
      images: []
    },
    {
      id: "algorithm-sutra",
      title: "算法经",
      subtitle: "Algorithm Sutra",
      year: "2025",
      tags: ["AIGC Film", "Interactive Narrative", "Unity Experience"],
      cover: "src/assets/images/project-algorithm-sutra-01-cover-background.webp",
      video: { src: "src/assets/videos/project-algorithm-sutra.mp4", poster: "src/assets/images/project-algorithm-sutra-01-cover-background.webp" },
      summary: "一个结合 AIGC 影像、世界观设定和 Unity 交互体验的创意叙事项目，探索 AI 生成视觉如何参与数字媒体艺术表达。",
      background: "项目从算法、信仰、技术感知和数字叙事出发，尝试把抽象的技术概念转译为具有仪式感和世界观的影像体验。",
      process: [
        "围绕世界观关键词建立视觉参考和叙事基调。",
        "使用 AI 图像与视频工具探索角色、场景、氛围和镜头语言。",
        "将生成素材进行筛选、重组和剪辑，形成统一的视觉表达。",
        "结合 Unity 交互叙事思路，探索观众参与故事的可能性。"
      ],
      tools: ["AIGC Video", "AI Image", "Unity", "Premiere", "Worldbuilding"],
      results: [
        "完成具有统一世界观的 AIGC 影像实验。",
        "建立从概念设定到 AI 视觉生成再到交互叙事的创作流程。",
        "展示 AI 在数字媒体艺术表达中的视觉扩展能力。"
      ],
      github: "",
      demo: "",
      images: [
        "src/assets/images/project-algorithm-sutra-01-cover-background.webp",
        "src/assets/images/project-algorithm-sutra-02-research-concept.webp",
        "src/assets/images/project-algorithm-sutra-03-worldline.webp",
        "src/assets/images/project-algorithm-sutra-04-framework-process.webp",
        "src/assets/images/project-algorithm-sutra-05-production-unity.webp",
        "src/assets/images/project-algorithm-sutra-06-final-showcase-01.webp",
        "src/assets/images/project-algorithm-sutra-07-final-showcase-02.webp"
      ]
    },
    {
      id: "creator-discovery-tool",
      title: "创作者搜索工具",
      subtitle: "Creator Discovery Tool",
      year: "2026",
      tags: ["AI Workflow", "Creator Operation Tool"],
      cover: "src/assets/images/project-creator-discovery-cover.webp",
      video: { src: "src/assets/videos/project-creator-discovery.mp4", poster: "src/assets/images/project-creator-discovery-cover.webp" },
      summary: "一个面向真实运营场景的 AI 工作流探索项目，用于辅助创作者搜索、信息整理和候选名单筛选。",
      background: "在创作者运营工作中，作者发现、信息汇总和初步判断往往需要重复切换平台与表格。这个工具尝试用 AI 和网页工具把重复整理流程变得更轻量，并以 GitHub 代码仓库展示实现思路。",
      process: [
        "拆解创作者挖掘流程，明确搜索、记录、筛选、备注等高频动作。",
        "设计轻量网页界面，把分散信息整理为更易比较的候选卡片。",
        "探索使用 AI 辅助提炼账号定位、内容特征和合作价值。",
        "通过真实工作场景反馈调整字段和操作路径。"
      ],
      tools: ["AI Workflow", "Web Prototype", "Data Sorting", "Claude Code", "Codex"],
      results: [
        "形成面向创作者运营的轻量工具原型。",
        "减少重复整理信息的时间成本。",
        "展示 AI 在真实工作流程优化中的应用潜力。",
        "项目代码已上传 GitHub，作为工作流工具案例进行展示。"
      ],
      github: "https://github.com/Xianliangzi/ai-creator-discovery",
      demo: "",
      images: []
    },
    {
      id: "bai-ze",
      title: "白泽",
      subtitle: "Bai Ze",
      year: "2025",
      tags: ["AIGC Film", "Visual Experiment"],
      cover: "src/assets/images/project-bai-ze-01-research-overview.webp",
      video: { src: "src/assets/videos/project-bai-ze.mp4", poster: "src/assets/images/project-bai-ze-01-research-overview.webp" },
      summary: "一个以 AI 视频生成和视觉风格探索为核心的 AIGC 影像作品，关注神话意象、情绪氛围和镜头语言的结合。",
      background: "项目以东方神话意象为灵感，尝试通过 AI 生成工具重构传统视觉元素，让神话角色在新的数字影像语境中被重新观看。",
      process: [
        "提炼白泽相关的视觉关键词、角色气质和氛围方向。",
        "使用 AI 图像与视频工具进行多轮风格测试。",
        "筛选稳定的画面语言，并通过剪辑强化节奏和情绪。",
        "复盘 AI 生成中的可控性问题，调整提示词与素材组织方式。"
      ],
      tools: ["AI Video", "AI Image", "Prompt Design", "Premiere", "Visual Direction"],
      results: [
        "完成一组以神话意象为核心的 AIGC 视觉实验。",
        "积累 AI 视频生成中的风格控制和镜头衔接经验。",
        "强化个人在 AI 视觉表达方向的探索。"
      ],
      github: "",
      demo: "",
      images: [
        "src/assets/images/project-bai-ze-01-research-overview.webp",
        "src/assets/images/project-bai-ze-02-technical-implementation.webp",
        "src/assets/images/project-bai-ze-03-work-definition.webp",
        "src/assets/images/project-bai-ze-04-final-effect.webp"
      ]
    },
    {
      id: "smart-medicine-box",
      title: "智能药箱",
      subtitle: "Smart Medicine Box",
      year: "2024",
      tags: ["UX Design", "Interaction Design"],
      cover: "src/assets/images/project-smart-medicine-box-01-concept-background.webp",
      video: { src: "", poster: "src/assets/images/project-smart-medicine-box-01-concept-background.webp" },
      summary: "一个围绕用药提醒与家庭健康管理场景的交互设计项目，展示用户需求分析、功能规划和界面原型能力。",
      background: "面对老年人、慢病人群和家庭照护场景，传统药品收纳和用药提醒容易出现遗忘、混乱和信息不透明的问题。项目尝试用交互设计改善日常用药体验。",
      process: [
        "分析目标用户的用药场景、痛点和照护关系。",
        "梳理提醒、记录、药品管理和异常提示等核心功能。",
        "设计信息层级和交互流程，降低用户理解和操作成本。",
        "完成界面原型与使用流程说明。"
      ],
      tools: ["User Research", "UX Design", "Figma", "Interaction Prototype"],
      results: [
        "形成完整的智能药箱交互设计方案。",
        "展示从用户问题到功能结构再到原型表达的设计能力。",
        "补充作品集中非 AIGC 类的用户需求分析与交互设计案例。"
      ],
      github: "",
      demo: "",
      images: [
        "src/assets/images/project-smart-medicine-box-01-concept-background.webp",
        "src/assets/images/project-smart-medicine-box-02-research-analysis.webp",
        "src/assets/images/project-smart-medicine-box-03-design-process.webp",
        "src/assets/images/project-smart-medicine-box-04-mobile-product.webp",
        "src/assets/images/project-smart-medicine-box-05-functions-canvas.webp"
      ]
    }
  ],
  awards: [
    {
      id: "milan-plant-immersive-second",
      category: "获奖",
      title: "植物电信号驱动的沉浸式数字交互艺术装置",
      subtitle: "米兰设计周中国高校设计学科师生优秀作品展 广东赛区 二等奖",
      description: "作品类别为非命题赛场（视频类），获 2026 米兰设计周中国高校设计学科师生优秀作品展广东赛区二等奖。",
      image: "src/assets/images/awards/milan-plant-immersive-second.jpg",
      date: "2026.06",
      details: ["作品编号：749353", "参赛组别：本科研究生组", "参赛单位：广东工业大学"]
    },
    {
      id: "milan-interactive-book-second",
      category: "获奖",
      title: "基于容貌焦虑议题的交互书籍设计",
      subtitle: "米兰设计周中国高校设计学科师生优秀作品展 广东赛区 二等奖",
      description: "作品类别为非命题赛场（视频类），获 2026 米兰设计周中国高校设计学科师生优秀作品展广东赛区二等奖。",
      image: "src/assets/images/awards/milan-interactive-book-second.jpg",
      date: "2026.06",
      details: ["作品编号：774190", "参赛组别：本科研究生组", "参赛单位：广东工业大学"]
    },
    {
      id: "baize-3c-third",
      category: "获奖",
      title: "白泽",
      subtitle: "中国好创意暨全国数字艺术设计大赛 百度 AIGC 未来创作专项大赛 全国总决赛 三等奖",
      description: "作品《白泽》获中国好创意（第二十届）暨全国数字艺术设计大赛百度 AIGC 未来创作专项大赛自由主题全国总决赛三等奖。",
      image: "src/assets/images/awards/baize-3c-third.jpg",
      date: "2026.04",
      details: ["赛项：百度 AIGC 未来创作专项大赛", "主题：自由主题", "参赛院校：广东工业大学"]
    },
    {
      id: "impes-2024-paper",
      category: "论文",
      title: "The Impact of Cyberbullying on Adolescents' Real Lives",
      subtitle: "IMPES 2024 Acceptance Letter",
      description: "论文通过 IMPES 2024 审稿并被 2024 2nd International Conference on Innovation Management, Psychology, Education and Sociology 接收。",
      image: "src/assets/images/awards/impes-2024-acceptance-letter.jpg",
      date: "2024.12",
      details: ["Manuscript No.：IMPES-6312", "Author name(s)：Kexin Du, Wenxin Huo and Zihan Yang", "Conference：IMPES 2024"]
    }
  ],
  creativeLab: [
    {
      titleCn: "账号运营",
      titleEn: "Channel Practice",
      type: "channel",
      description: "个人短视频账号与 IP 内容实践，包含 IP 二创、漫画解说、人物解析和日常 Vlog 创作。",
      cover: "src/assets/images/lab-channel-naiwa-douyin.webp",
      link: "channels.html",
      linkLabel: "查看账号案例",
      accountName: "2 个账号案例",
      accountType: "IP二创 / 漫画解说 / Vlog",
      tags: ["账号运营", "短视频内容", "IP二创", "个人兴趣表达"]
    },
    {
      titleCn: "摄影作品",
      titleEn: "Photography",
      type: "photography",
      description: "照片展示与视觉观察。按系列整理不同主题的摄影作品。",
      cover: "src/assets/images/photography/horror-house/thumb/horror-house-01.webp",
      link: "photography.html",
    },
    {
      titleCn: "AI视觉实验",
      titleEn: "AI Visual Experiments",
      type: "ai-visual",
      description: "AI生成实验、风格探索和意识流视频。",
      cover: "src/assets/images/lab-ai-visual-poetry-paradise-cover.webp",
      link: "ai-visual.html",
      linkLabel: "查看视觉实验"
    }
  ],
  aiVisualExperiments: [
    {
      id: "poetry-paradise",
      title: "诗乐园",
      subtitle: "Poetry Paradise",
      type: "AI视觉实验 / 影像创作",
      description: "一次围绕视觉语言、诗性氛围和动态影像表达展开的 AI 视觉实验，尝试用影像节奏与画面情绪构建偏意识流的观看体验。",
      video: {
        src: "src/assets/videos/lab-ai-visual-poetry-paradise.mp4",
        poster: "src/assets/images/lab-ai-visual-poetry-paradise-cover.webp"
      },
      tags: ["AI视觉实验", "动态影像", "视觉语言", "诗性表达"]
    }
  ],
  channelAccounts: [
    {
      id: "naiwa-ip",
      title: "神秘咖啡研究室",
      subtitle: "Naiwa IP Re-creation",
      type: "奶蛙 IP 运营 / 短视频二创",
      cover: "src/assets/images/lab-channel-naiwa-douyin.webp",
      url: "https://www.douyin.com/user/self?from_tab_name=main",
      description: "围绕互联网上具有传播度和幽默感的奶蛙 IP 形象，进行角色设定、短视频内容策划与二次创作表达，尝试把流行梗、职场情境和角色化视觉结合起来。",
      highlights: ["IP 二创内容策划", "角色化短视频表达", "梗文化与日常情境结合", "账号视觉与内容调性搭建"],
      metrics: ["作品 5 条", "获赞 1418", "粉丝 33"]
    },
    {
      id: "manga-vlog",
      title: "需要现实止痛剂",
      subtitle: "Manga Commentary / Personal Vlog",
      type: "漫画解说 / 人物解析 / 兴趣 Vlog",
      cover: "src/assets/images/lab-channel-manga-vlog-douyin.webp",
      url: "https://www.douyin.com/user/MS4wLjABAAAAQ9rsAHsbIbh2bStX73idrUu6SbJLODHBxqmUIASeY1Q?from_tab_name=main",
      description: "偏个人兴趣表达的内容账号，围绕漫画解说、人物关系解析、角色讨论和日常 Vlog 展开创作，用更轻松的方式把个人审美、兴趣观察和叙事表达转化为短视频内容。",
      highlights: ["漫画解说与人物解析", "个人兴趣向内容表达", "日常 Vlog 创作", "产出过 10 万+ 播放内容"],
      metrics: ["作品 20 条", "获赞 3.6 万", "粉丝 276", "单条内容播放 10 万+"]
    }
  ],
  photographySeries: [
    {
      id: "horror-house",
      title: "恐怖屋",
      subtitle: "Horror House",
      category: "情绪与实验影像",
      description: "以空间、光线和人物状态构建带有悬疑感的视觉叙事。",
      cover: "src/assets/images/photography/horror-house/thumb/horror-house-01.webp",
      photos: Array.from({ length: 41 }, (_, index) => {
        const number = String(index + 1).padStart(2, "0");
        return {
          title: `恐怖屋 ${number}`,
          thumbnail: `src/assets/images/photography/horror-house/thumb/horror-house-${number}.webp`,
          full: `src/assets/images/photography/horror-house/full/horror-house-${number}.webp`,
          alt: `恐怖屋摄影作品 ${number}`
        };
      })
    },
    {
      id: "summer-firefly",
      title: "夏荧",
      subtitle: "Summer Firefly",
      category: "人像摄影",
      description: "以夏日、光影和日系色调为核心，呈现轻盈、明亮的影像氛围。",
      cover: "src/assets/images/photography/summer-firefly/thumb/summer-firefly-01.webp",
      photos: Array.from({ length: 31 }, (_, index) => {
        const number = String(index + 1).padStart(2, "0");
        return {
          title: `夏荧 ${number}`,
          thumbnail: `src/assets/images/photography/summer-firefly/thumb/summer-firefly-${number}.webp`,
          full: `src/assets/images/photography/summer-firefly/full/summer-firefly-${number}.webp`,
          alt: `夏荧摄影作品 ${number}`
        };
      })
    },
    {
      id: "bad-luck",
      title: "厄运",
      subtitle: "Bad Luck",
      category: "情绪与实验影像",
      description: "以强烈色彩、暗调氛围和人物状态构建具有压迫感的视觉叙事。",
      cover: "src/assets/images/photography/bad-luck/thumb/bad-luck-01.webp",
      photos: Array.from({ length: 20 }, (_, index) => {
        const number = String(index + 1).padStart(2, "0");
        return {
          title: `厄运 ${number}`,
          thumbnail: `src/assets/images/photography/bad-luck/thumb/bad-luck-${number}.webp`,
          full: `src/assets/images/photography/bad-luck/full/bad-luck-${number}.webp`,
          alt: `厄运摄影作品 ${number}`
        };
      })
    },
    {
      id: "yaoji",
      title: "瑶姬",
      subtitle: "Yao Ji",
      category: "人像摄影",
      description: "以东方服饰、自然场景和梦幻色彩构建带有神话气质的人像影像。",
      cover: "src/assets/images/photography/yaoji/thumb/yaoji-01.webp",
      photos: Array.from({ length: 8 }, (_, index) => {
        const number = String(index + 1).padStart(2, "0");
        return {
          title: `瑶姬 ${number}`,
          thumbnail: `src/assets/images/photography/yaoji/thumb/yaoji-${number}.webp`,
          full: `src/assets/images/photography/yaoji/full/yaoji-${number}.webp`,
          alt: `瑶姬摄影作品 ${number}`
        };
      })
    }
  ],
  resume: {
    pdf: "src/assets/resume/du-kexin-resume.pdf",
    note: "点击右侧按钮可在线预览我的 PDF 简历。"
  },
  contact: {
    email: "2728172670@qq.com",
    socials: ["小红书", "B站", "Instagram", "Behance"],
    note: ""
  }
};


