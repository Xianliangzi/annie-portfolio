window.portfolioData = {
  profile: {
    nameCn: "杜可心",
    nameEn: "Annie",
    titleCn: "内容洞察 × 产品实践 × AI应用",
    titleEn: "CONTENT INSIGHT / PRODUCT PRACTICE / AI",
    summary: "我拥有数字媒体艺术与内容运营背景，关注用户、内容和真实工作场景中的问题，并通过产品设计、数据分析、AI工具与视觉表达，将观察转化为可以落地和验证的实践。",
    school: "广东工业大学",
    major: "数字媒体艺术专业",
    introVideo: { src: "src/assets/videos/about-intro.mp4", poster: "src/assets/images/about-intro-cover.webp" },
    keywords: ["Product Practice", "Content Insight", "AI Workflow", "Data Analysis", "Creative Technology"],
    directions: ["产品与工具", "内容与运营", "AI工作流", "视觉与表达"],
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
    { labelCn: "作品", labelEn: "Work", href: "index.html#projects" },
    { labelCn: "能力", labelEn: "Capabilities", href: "index.html#capabilities" },
    { labelCn: "经历", labelEn: "Experience", href: "index.html#experience" },
    { labelCn: "内容", labelEn: "Content", href: "index.html#content-practice" },
    { labelCn: "荣誉", labelEn: "Awards", href: "index.html#awards" },
    { labelCn: "实验室", labelEn: "Lab", href: "index.html#creative-lab" },
    { labelCn: "关于", labelEn: "About", href: "index.html#about" },
    { labelCn: "简历", labelEn: "Resume", href: "index.html#resume" },
    { labelCn: "联系", labelEn: "Contact", href: "index.html#contact" }
  ],
  featuredProjectIds: ["her-emotional-companion", "creator-discovery-tool", "ai-creative-radar", "smart-medicine-box"],
  experiences: [
    {
      id: "stepfun",
      company: "阶跃星辰",
      role: "产品实习生",
      period: "2026.08 - 至今",
      tags: ["AI Agent产品", "产品开发", "真机验证", "开发者生态"],
      summary: "面向 AI 原生手机的内部场景验证与开发者生态建设，负责 AI DJ 产品从需求分析、PRD、开发部署到真机验证的完整落地，并参与开发者生态 Campaign 策划。",
      responsibilities: [
        "围绕 AI 原生手机黑客松的内部场景验证需求，提出 AI DJ 应用场景，使用 Codex 完成需求分析、PRD 撰写、产品开发、部署及真机验证。",
        "独立搭建手机端双 Deck DJ Engine，实现本地音乐导入、BPM 分析、Tempo 调速、自动对速、节拍对齐、Crossfader 和 3 类 Transition 效果。",
        "跑通歌曲自动加载、自动切曲、自动混音及 3 首以上连续播放链路。",
        "围绕“黑客松引流—创作者沉淀与激励—GTM 商业化”框架，输出开发者生态 Campaign 草案并参与方案迭代。"
      ],
      achievements: [
        "AI DJ 已上架公司内部 Agent 应用平台“水产市场”",
        "完成 AI Agent 产品从需求、开发到真机验证的完整闭环",
        "实现双 Deck DJ Engine 与 3 类 Transition 效果",
        "形成涵盖活动节点、创作者运营、Agent 分发和商业化的开发者生态方案"
      ],
      growth: "在真实 AI Agent 场景中完成从需求定义到产品落地的全过程，并进一步理解产品验证、开发协作和开发者生态之间的关系。",
      link: "https://openclawmp.stepfun.com/asset/3fb0db454cc24db7b20076e40bec5895",
      video: { src: "", poster: "" },
      cover: "src/assets/images/experience-stepfun-cover.png",
      images: []
    },
    {
      id: "baidu",
      company: "百度",
      role: "创作者生态运营实习生",
      period: "2026.06 - 2026.08",
      tags: ["AI工作台", "工作流设计", "数据自动化", "创作者生态"],
      summary: "围绕创作者发现、建联和数据监控中的重复耗时问题，独立设计并开发 AI Creator Discovery 工作台与可视化日报工具，同时负责垂类创作者筛选、触达和维护。",
      responsibilities: [
        "针对跨平台寻找创作者、判断账号匹配度及推进建联等流程重复耗时的问题，完成 AI Creator Discovery 从业务需求拆解、产品流程设计到本地部署。",
        "搭建自然语言筛选、公开内容采集、AI 语义匹配评分、人工复核、候选作者入库、CRM 状态管理、Excel/CSV 导出及批量建联辅助链路。",
        "独立使用 Python 开发可视化本地日报工具，自动合并后台数据、计算分发日环比、涨粉变化和发文量，并识别涨粉 Top 3。",
        "围绕“外国人在中国”、高考等垂类开展创作者筛选、触达和维护，并通过平台私信、微信及 MCN 合作推动建联与入驻。"
      ],
      achievements: [
        "将单批 20 名目标创作者的检索、筛选、建联和登记流程由约 1—2 小时缩短至约 20 分钟",
        "工具经直属上级试用，并写入实习交接文档供后续同事部署使用",
        "日报工具替代 Excel 手工计算，每次约节省 30 分钟",
        "沉淀创作者发现、建联与数据监控的固定工作流"
      ],
      growth: "将一线运营问题转化为可使用的产品工具，完成需求拆解、流程设计、开发部署和效率验证，并积累创作者生态运营经验。",
      video: { src: "src/assets/videos/experience-baidu.mp4", poster: "src/assets/images/experience-baidu-cover.webp" },
      cover: "src/assets/images/experience-baidu-cover.webp",
      images: []
    },
    {
      id: "oppo",
      company: "OPPO",
      role: "用户增长实习生",
      period: "2026.03 - 2026.06",
      tags: ["用户增长", "搜索增长", "内容洞察", "AIGC提效"],
      summary: "负责 OPPO 新品周期内的小红书搜索增长活动，参与内容与用户洞察、新品传播策划、达人协作及 AIGC 内容生产提效。",
      responsibilities: [
        "负责 X9s Pro、X9 Ultra 新品周期内“小红书惊喜盒子”搜索活动，规划预热、上市及热度维持阶段的活动节奏。",
        "独立完成搜索词设置、活动规则、封面海报、图文内容和页面配置，引导用户搜索并浏览指定关键词内容。",
        "从点击、互动、搜索和种草效果等维度筛选并沉淀 30+ 篇高表现内容，为后续策划和复盘提供参考。",
        "参与 Reno16 年轻化传播策划，并根据品牌契合度、自然流量、历史合作表现和用户画像筛选旅行垂类达人。",
        "使用即梦、GPT、Midjourney 辅助视觉方案、创意脚本和素材探索，沉淀内容生产 SOP。"
      ],
      achievements: [
        "独立执行 X9s Pro、X9 Ultra 新品搜索增长活动配置",
        "筛选并沉淀 30+ 篇高表现内容",
        "筛选 20+ 名旅行垂类达人并协助 KOC/KOL 建联与内容审核",
        "形成涵盖提示词、画面尺寸、标题字号和视觉标准的内容生产 SOP"
      ],
      growth: "建立从用户洞察、内容分析到活动配置和传播执行的增长视角，并将 AIGC 工具沉淀为可复用的内容生产流程。",
      video: { src: "src/assets/videos/experience-oppo.mp4", poster: "src/assets/images/experience-oppo-cover.webp" },
      cover: "src/assets/images/experience-oppo-cover.webp",
      images: []
    },
    {
      id: "art-expo",
      company: "北京当代艺术博览会",
      role: "展览运营实习生",
      period: "2025.05 - 2025.08",
      tags: ["展览运营", "产品体验优化", "用户增长", "内容传播"],
      summary: "围绕艺术文化消费产品参与用户需求分析与内容体验优化，并通过展前预热、展中传播和展后复盘的多渠道内容链路提升用户触达。",
      responsibilities: [
        "围绕艺术文化消费产品参与用户需求分析与内容体验优化。",
        "将专业艺术信息转化为用户易理解、易传播的内容形式。",
        "负责多渠道内容运营，搭建展前预热、展中传播和展后复盘的内容链路。"
      ],
      achievements: [
        "优化艺术文化信息的用户理解与传播体验",
        "形成覆盖展览前、中、后的完整内容传播链路",
        "支持用户触达和活动传播效果提升"
      ],
      growth: "积累艺术文化消费场景中的用户需求理解、产品体验优化与多渠道内容运营经验。",
      video: { src: "src/assets/videos/experience-art-expo.mp4", poster: "src/assets/images/experience-art-expo-cover.webp" },
      cover: "src/assets/images/experience-art-expo-cover.webp",
      images: []
    }
  ],
  projects: [
    {
      id: "her-emotional-companion",
      title: "her.｜会生长的心声日记",
      subtitle: "A Growing Emotional Companion",
      year: "2026",
      tags: ["Product Definition", "Emotional AI", "Retention Design"],
      cover: "src/assets/images/project-her-cover.png",
      video: { src: "", poster: "" },
      summary: "面向希望低压力记录情绪、获得轻量陪伴的用户，设计一套会因用户心声持续生长的私人陪伴生命体验。",
      background: "传统情绪记录产品常依赖打卡与任务机制，容易增加用户压力。项目希望通过生命体回应、记忆沉淀与关系成长建立更自然的长期陪伴感。",
      process: [
        "搭建“投放心声—情绪识别—生命体回应—生成记忆—长期回看”的核心体验闭环。",
        "根据记忆数量、记录天数和连续使用情况设计亲近度与生命体演变体系。",
        "规划“初见—靠近—熟悉—共生”等关系阶段，以状态变化代替签到惩罚。",
        "使用 React、Vite 与 AI 辅助开发工具实现核心功能，并搭建用户数据隔离与跨设备记忆。"
      ],
      tools: ["React", "Vite", "AI Assisted Development", "Product Design"],
      results: [
        "完成登录、心声输入、情绪识别、生命体状态和记忆时间轴等核心功能。",
        "实现情绪筛选、记忆删除、用户数据隔离与跨设备记忆能力。",
        "预留即梦图片生成接口及个性化情绪视觉字段。"
      ],
      github: "https://github.com/Xianliangzi/her-emotional-companion",
      demo: "https://her.dukexin.cn/",
      images: []
    },
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
      demo: "https://dukexin.cn/ai-radar/",
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
      title: "AI Creator Discovery",
      subtitle: "创作者发现与建联工作台",
      year: "2026",
      tags: ["Workflow Design", "AI Matching", "Data Automation"],
      cover: "src/assets/images/project-creator-discovery-cover.webp",
      video: { src: "src/assets/videos/project-creator-discovery.mp4", poster: "src/assets/images/project-creator-discovery-cover.webp" },
      summary: "针对跨平台寻找创作者、判断账号匹配度和推进建联等流程重复耗时的问题，独立设计并开发的创作者发现与建联工作台。",
      background: "在百度创作者生态运营场景中，检索、筛选、建联和登记需要反复切换平台与表格。项目将真实业务流程转化为可部署的AI工作台。",
      process: [
        "拆解创作者检索、筛选、建联与登记流程，完成需求定义和产品流程设计。",
        "跑通自然语言需求输入、抖音/B站公开内容采集、AI语义匹配评分和人工复核。",
        "实现候选作者入库、CRM状态管理、Excel/CSV导出及批量建联辅助链路。",
        "根据直属上级试用反馈迭代字段与操作流程，并完成本地部署和交接。"
      ],
      tools: ["AI Workflow", "Web Development", "CRM", "Claude Code", "Codex"],
      results: [
        "将单批20名目标创作者的完整处理流程由约1—2小时缩短至约20分钟。",
        "工具经直属上级试用并写入实习交接文档。",
        "可返回作者名称、主页链接、粉丝数、联系方式及匹配评分。",
        "沉淀可供后续同事本地部署和继续使用的工作流。"
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
      id: "smart-medicine-box-3c-national-second",
      category: "获奖",
      title: "基于情境感知技术的智能药箱设计",
      subtitle: "中国好创意暨全国数字艺术设计大赛 全国总决赛 二等奖",
      description: "作品《基于情境感知技术的智能药箱设计》获中国好创意暨全国数字艺术设计大赛本科组社会创新类全国总决赛二等奖。",
      image: "src/assets/images/awards/smart-medicine-box-3c-national-second.png",
      date: "2026.08",
      details: ["参赛组别：本科组", "竞赛类别：社会创新类", "奖项：全国总决赛二等奖", "参赛院校：广东工业大学", "指导教师：刘丹云", "证书编号：ZCS-20thGS-01746"]
    },
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
  contentPractice: [
    {
      title: "AI 视觉灵感图谱",
      subtitle: "AI Visual Atlas",
      description: "把小红书、Pinterest 与影视画面中的视觉灵感，转译为可检索、可沟通、可调试的 AI 创作语言。",
      metrics: ["三类灵感来源", "7 维视觉词典"],
      tags: ["灵感管理", "风格提炼", "AI 生成", "迭代诊断"],
      link: "visual-atlas.html"
    },
    {
      title: "电影兴趣社群运营",
      subtitle: "Community Operation",
      description: "从0到1搭建电影兴趣社群，完成公域引流、私域承接、话题设计、内容分享和日常维护。",
      metrics: ["累计触达 300+", "私域转化 160+"],
      tags: ["社群搭建", "用户承接", "话题运营", "私域转化"],
      link: "community.html"
    }
  ],
  creativeLab: [
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
