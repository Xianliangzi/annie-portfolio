window.portfolioRenderers = (function () {
  const $ = (selector) => document.querySelector(selector);

  const getQueryId = () => new URLSearchParams(window.location.search).get("id");

  const textList = (items) => items.map((item) => `<li>${item}</li>`).join("");

  const tags = (items) => items.map((item) => `<span>${item}</span>`).join("");

  const firstImage = (item, fallback) => item.cover || (item.images && item.images.length ? item.images[0] : fallback);

  const sectionTitle = (cn, en) => `
    <div class="section-title">
      <h2>${cn}</h2>
      <p>${en}</p>
    </div>
  `;

  const videoSource = (video) => {
    if (!video) return { src: "", poster: "" };
    if (typeof video === "string") return { src: video, poster: "" };
    return {
      src: video.src || "",
      poster: video.poster || ""
    };
  };

  const hasVideo = (video) => Boolean(videoSource(video).src);

  const mediaBlock = (type, src, label, lightboxGroup = "", fullSrc = "") => {
    if (type === "video") {
      const video = videoSource(src);
      if (!video.src) return "";

      return `
        <div class="media-block video-block">
          <video controls preload="metadata"${video.poster ? ` poster="${video.poster}"` : ""}><source src="${video.src}" type="video/mp4"></video>
        </div>
      `;
    }

    const realMediaClass = /\.(png|jpe?g|webp|gif)$/i.test(src) ? " real-media" : "";
    const lightboxAttrs = type === "image" && lightboxGroup
      ? ` role="button" tabindex="0" data-lightbox-group="${lightboxGroup}" data-lightbox-src="${fullSrc || src}" data-lightbox-alt="${label}"`
      : "";

    return `
    <div class="media-block${realMediaClass}"${lightboxAttrs}>
      <img src="${src}" alt="${label}" loading="lazy" decoding="async">
      <div class="media-fallback">
        <b>${label}</b>
        <span>替换路径：${src}</span>
      </div>
    </div>
  `;
  };

  const renderShell = (data) => {
    $("#site-header").innerHTML = `
      <a class="brand" href="index.html#home" aria-label="回到首页">
        <strong>杜可心</strong>
        <span>Annie Portfolio</span>
      </a>
      <nav class="site-nav" aria-label="主导航">
        ${data.nav.map((item) => `<a href="${item.href}"><b>${item.labelCn}</b><span>${item.labelEn}</span></a>`).join("")}
      </nav>
    `;

    $("#site-footer").innerHTML = `
      <p>杜可心 Annie · Content Insight / Product Practice / AI</p>
    `;
  };

  const renderHero = (data) => `
    <section id="home" class="hero section-observe">
      <canvas class="cosmic-hero-canvas" id="cosmic-hero-canvas" aria-hidden="true"></canvas>
      <div class="cosmic-orbit cosmic-orbit-one" aria-hidden="true"></div>
      <div class="cosmic-orbit cosmic-orbit-two" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="hero-kicker">${data.profile.titleEn}</p>
        <h1 class="cosmic-name" data-text="${data.profile.nameCn}">${data.profile.nameCn}</h1>
        <h2 class="cosmic-subname">${data.profile.nameEn}</h2>
        <h3>${data.profile.titleCn}</h3>
        <p>${data.profile.summary}</p>
        <div class="keyword-row">${tags(data.profile.keywords)}</div>
        <div class="hero-actions">
          <a class="button" href="#projects">查看精选作品</a>
          <a class="button button-secondary" href="#capabilities">探索能力地图</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="实践领域">
        <div class="hero-metrics">
          <article><b>01</b><span>发现真实问题</span></article>
          <article><b>02</b><span>构建解决方案</span></article>
          <article><b>03</b><span>验证与表达</span></article>
        </div>
      </div>
    </section>
  `;

  const projectCoverflowCard = (project, index) => `
    <a class="coverflow-project-card" href="project.html?id=${project.id}" aria-label="查看项目：${project.title}">
      <div class="coverflow-project-media">
        ${project.cover ? mediaBlock("image", project.cover, project.title, "") : `<div class="media-fallback project-placeholder"><b>${project.title}</b><span>${project.subtitle}</span></div>`}
      </div>
      <div class="coverflow-project-shade"></div>
      <div class="coverflow-project-index"><span>${String(index + 1).padStart(2, "0")}</span><small>${project.year}</small></div>
      <div class="coverflow-project-copy">
        <p>${project.subtitle}</p>
        <h3>${project.title}</h3>
        <div class="mini-tags">${tags(project.tags)}</div>
        <span>${project.summary}</span>
        <strong>VIEW PROJECT ↗</strong>
      </div>
    </a>
  `;

  const renderFeaturedProjects = (data) => {
    const featured = data.featuredProjectIds
      .map((id) => data.projects.find((project) => project.id === id))
      .filter(Boolean);
    const remaining = data.projects.filter((project) => !data.featuredProjectIds.includes(project.id));
    const allProjects = [...featured, ...remaining];

    return `
      <section id="projects" class="content-section featured-work-section section-observe">
        ${sectionTitle("作品", "Selected & Exploratory Work")}
        <p class="section-intro">完整呈现产品工具、交互体验与 AI 视觉实践。拖动卡片探索全部作品，点击当前项目进入完整详情。</p>
        <div class="project-coverflow-shell">
          <div class="swiper project-coverflow" id="project-coverflow" aria-label="作品封面流">
            <div class="swiper-wrapper">
              ${allProjects.map((project, index) => `<div class="swiper-slide">${projectCoverflowCard(project, index)}</div>`).join("")}
            </div>
          </div>
          <div class="project-coverflow-controls">
            <button class="project-coverflow-prev" type="button" aria-label="上一个作品">←</button>
            <p><b data-coverflow-current>01</b><span>/</span><span>${String(allProjects.length).padStart(2, "0")}</span></p>
            <button class="project-coverflow-next" type="button" aria-label="下一个作品">→</button>
          </div>
          <p class="project-coverflow-hint">DRAG / SWIPE · 点击侧卡切换 · 点击主卡查看详情</p>
        </div>
      </section>
    `;
  };

  const renderCapabilityMap = () => {
    const clusters = [
      {
        key: "product",
        index: "01",
        title: "产品与技术",
        subtitle: "PRODUCT & TECHNOLOGY",
        skills: ["问题发现", "需求分析", "产品定义", "信息架构", "交互原型", "AI工作流", "轻量开发", "产品验证"],
        evidence: ["her. 心声日记", "AI Creator Discovery", "AI Creative Radar", "阶跃星辰 AI DJ"]
      },
      {
        key: "content",
        index: "02",
        title: "内容与运营",
        subtitle: "CONTENT & OPERATION",
        skills: ["内容策划", "用户洞察", "创作者运营", "平台生态", "搜索增长", "数据分析", "内容复盘", "社群运营"],
        evidence: ["百度创作者生态", "OPPO用户增长", "抖音内容运营", "电影兴趣社群"]
      },
      {
        key: "creative",
        index: "03",
        title: "创意与视觉",
        subtitle: "CREATIVE & VISUAL",
        skills: ["视觉设计", "AIGC影像", "摄影", "交互叙事", "信息表达", "影像创作", "创意技术"],
        evidence: ["算法经", "白泽", "诗乐园", "摄影系列"]
      }
    ];

    return `
      <section id="capabilities" class="content-section capability-section section-observe">
        ${sectionTitle("能力地图", "Capability Map")}
        <p class="section-intro">以产品思考为起点，连接内容、数据、AI 与视觉表达。移动鼠标，探索每一项能力背后的项目证据。</p>
        <div class="capability-3d-stage" id="capability-3d-stage" aria-label="可交互的三维能力地图">
          <canvas id="capability-3d-canvas" aria-hidden="true"></canvas>
          <div class="capability-data-streams" aria-hidden="true">${Array.from({ length: 15 }, (_, index) => `<i data-stream="${String(index + 1).padStart(2, "0")}"></i>`).join("")}</div>
          <div class="capability-hud" aria-hidden="true"><span>CAPABILITY_OS / 2026</span><span>NODE 06 · ONLINE</span></div>
          <div class="capability-loader"><i></i><span>正在建立能力空间</span></div>
          <div class="capability-labels">
            <a class="spatial-label label-product" href="product-method.html"><small>PRODUCT 01</small><strong>产品定义</strong><span>需求分析 · 信息架构 · 产品验证</span></a>
            <a class="spatial-label label-ai" href="ai-workflow.html"><small>AI 02</small><strong>AI 工作流</strong><span>任务拆解 · 人机协作 · 执行沉淀</span></a>
            <a class="spatial-label label-insight" href="user-insight.html"><small>INSIGHT 03</small><strong>用户洞察</strong><span>信号收集 · 假设反思 · 需求验证</span></a>
            <a class="spatial-label label-data" href="data-method.html"><small>DATA 04</small><strong>数据分析</strong><span>垂类监测 · 环比排查 · 优化观察</span></a>
            <a class="spatial-label label-content" href="content-strategy.html"><small>CONTENT 05</small><strong>内容策略</strong><span>选题判断 · 场景切口 · 传播复盘</span></a>
            <a class="spatial-label label-visual" href="visual-atlas.html"><small>VISUAL 06</small><strong>视觉表达</strong><span>表达意图 · 视听语言 · 质量判断</span></a>
          </div>
          <div class="capability-instruction"><span>[ MOVE / DRAG ]</span> 移动鼠标控制视角</div>
        </div>
        <div class="capability-fallback">
        <div class="capability-map">
          <div class="capability-core">
            <small>CORE</small>
            <strong>发现并解决<br>真实问题</strong>
            <span>INSIGHT → BUILD → VERIFY</span>
          </div>
          ${clusters.map((cluster) => `
            <article class="capability-cluster ${cluster.key}">
              <header><b>${cluster.index}</b><div><h3>${cluster.title}</h3><p>${cluster.subtitle}</p></div></header>
              <div class="capability-nodes">${cluster.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
              <div class="capability-evidence"><small>相关证据</small>${cluster.evidence.map((item) => `<em>${item}</em>`).join("")}</div>
            </article>
          `).join("")}
        </div>
        <div class="shared-capabilities">
          <span>用户理解</span><span>数据分析</span><span>AI工具应用</span><span>项目推进</span><span>信息表达</span><span>结果验证</span>
        </div>
        </div>
      </section>
    `;
  };

  const renderAbout = (data) => `
    <section id="about" class="content-section section-observe">
      ${sectionTitle("关于我", "About Me")}
      <div class="about-grid">
        <article class="panel large-panel">
          <h3>我的背景</h3>
          <p>${data.profile.school}</p>
          <p>${data.profile.major}</p>
          <div class="direction-list">${data.profile.directions.map((item) => `<span>${item}</span>`).join("")}</div>
        </article>
        <article class="panel video-panel">
          <h3>个人介绍视频</h3>
          ${mediaBlock("video", data.profile.introVideo, "About Video Placeholder")}
        </article>
      </div>
      <div class="ability-grid">
        ${data.profile.abilities.map((ability) => `
          <article class="panel">
            <h3>${ability.title}</h3>
            <ul>${textList(ability.items)}</ul>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  const renderExperience = (data) => `
    <section id="experience" class="content-section section-observe">
      ${sectionTitle("职业实践", "Professional Experience")}
      <p class="section-intro">旋转经历轮盘探索四段实践。点击侧边封面切换经历，再次点击当前封面进入完整详情。</p>
      <div class="experience-wheel" id="experience-wheel">
        <div class="experience-wheel-orbit" aria-label="职业实践轮盘">
          <div class="experience-orbit-line" aria-hidden="true"></div>
          ${data.experiences.map((item, index) => `
            <a class="experience-wheel-card" href="experience.html?id=${item.id}" data-experience-index="${index}" aria-label="${item.company}，${item.role}">
              <div class="experience-wheel-cover">${firstImage(item, "") ? mediaBlock("image", firstImage(item, ""), item.company) : `<div class="media-fallback"><b>${item.company}</b><span>${item.role}</span></div>`}${item.id === "stepfun" ? `<span class="stepfun-cover-brand"><b>阶跃星辰</b><small>STEPFUN</small></span>` : ""}</div>
              <span class="experience-wheel-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="experience-wheel-label"><b>${item.company}</b><small>${item.role}</small></span>
            </a>
          `).join("")}
        </div>
        <div class="experience-wheel-info">
          <p class="experience-wheel-system">SELECTED EXPERIENCE <b data-experience-counter>01</b> / ${String(data.experiences.length).padStart(2, "0")}</p>
          ${data.experiences.map((item, index) => `
            <article class="experience-wheel-panel${index === 0 ? " is-active" : ""}" data-experience-panel="${index}">
              <p>${item.company}</p>
              <h3>${item.role}</h3>
              <time>${item.period}</time>
              <div class="experience-wheel-tags">${tags(item.tags)}</div>
              <span>${item.summary}</span>
              <a class="button" href="experience.html?id=${item.id}">查看完整经历 ↗</a>
            </article>
          `).join("")}
          <div class="experience-wheel-controls">
            <button type="button" data-experience-prev aria-label="上一段经历">←</button>
            <span>ROTATE / SWIPE</span>
            <button type="button" data-experience-next aria-label="下一段经历">→</button>
          </div>
        </div>
      </div>
    </section>
  `;

  const projectCard = (project) => `
    <a class="work-card project-card" href="project.html?id=${project.id}">
      <div class="cover-frame">${project.cover ? mediaBlock("image", project.cover, project.title, "") : `<div class="media-fallback project-placeholder"><b>${project.title}</b><span>${project.subtitle}</span></div>`}</div>
      <p>${project.year}</p>
      <h3>${project.title}</h3>
      <small>${project.subtitle}</small>
      <div class="mini-tags">${tags(project.tags)}</div>
      <span>${project.summary}</span>
    </a>
  `;

  const renderContentPractice = (data) => `
    <section id="content-practice" class="content-section content-practice-section section-observe">
      ${sectionTitle("内容实践", "Content Practice")}
      <p class="section-intro">不重复实习职责，记录我在日常中持续沉淀的内容方法、视觉判断与兴趣实践。</p>
      <div class="content-practice-grid">
        ${(data.contentPractice || []).map((item, index) => `
          ${item.link ? `<a class="content-practice-card" href="${item.link}">` : `<article class="content-practice-card">`}
            <span class="content-number">0${index + 1}</span>
            <p>${item.subtitle}</p>
            <h3>${item.title}</h3>
            <span>${item.description}</span>
            <div class="content-metrics">${item.metrics.map((metric) => `<b>${metric}</b>`).join("")}</div>
            <div class="mini-tags">${tags(item.tags)}</div>
            ${item.link ? `<strong class="card-action">查看内容案例</strong>` : ""}
          ${item.link ? "</a>" : "</article>"}
        `).join("")}
      </div>
    </section>
  `;

  const renderVisualAtlas = () => {
    document.title = "视觉表达与 AI 灵感图谱 | 杜可心 Annie";
    const lexicon = [
      ["色彩 Color", ["色相 Hue", "饱和度 Saturation", "明度 Brightness", "亮度 Luminance", "高调 High-key", "低调 Low-key", "单色 Monochromatic", "互补色 Complementary", "类似色 Analogous", "柔和色 Muted", "鲜艳色 Vibrant", "粉彩 Pastel"]],
      ["光线 Lighting", ["柔光 Soft light", "硬光 Hard light", "轮廓光 Rim light", "逆光 Backlight", "侧光 Side light", "顶光 Top light", "底光 Uplight", "环形光 Ring light", "环境光 Ambient light", "体积光 Volumetric light", "霓虹光 Neon light", "黄金时刻 Golden hour"]],
      ["构图 Composition", ["三分法 Rule of thirds", "中心构图 Central composition", "对称 Symmetry", "非对称 Asymmetry", "负空间 Negative space", "引导线 Leading lines", "框架构图 Frame within a frame", "对角线 Diagonal", "层次构图 Layering", "视觉层级 Visual hierarchy", "平衡 Balance", "焦点 Focal point"]],
      ["材质 Material", ["磨砂玻璃 Frosted glass", "半透明 Translucent", "镜面金属 Chrome", "液态金属 Liquid metal", "陶瓷 Ceramic", "树脂 Resin", "乳胶 Latex", "欧泊 Opalescent", "珠光 Iridescent", "颗粒 Grainy", "纸张 Paper texture", "有机组织 Organic tissue"]],
      ["媒介 Medium", ["电影剧照 Cinematic still", "编辑摄影 Editorial photography", "3D 渲染 3D render", "抽象数字艺术 Abstract digital art", "实验影像 Experimental film", "拼贴 Collage", "扫描仪艺术 Scanography", "数码故障 Glitch art", "生成艺术 Generative art", "超现实摄影 Surreal photography"]],
      ["镜头 Camera", ["特写 Extreme close-up", "近景 Close-up", "中景 Medium shot", "全景 Wide shot", "俯拍 High angle", "仰拍 Low angle", "鸟瞰 Bird's-eye view", "过肩 Over-the-shoulder", "浅景深 Shallow depth of field", "广角畸变 Wide-angle distortion", "对称透视 One-point perspective", "动态模糊 Motion blur"]],
      ["氛围 Mood", ["空灵 Ethereal", "超现实 Surreal", "梦核 Dreamcore", "冷峻 Clinical", "未来主义 Futuristic", "忧郁 Melancholic", "诗性 Poetic", "神秘 Enigmatic", "宁静 Serene", "压迫 Claustrophobic", "怀旧 Nostalgic", "异质 Uncanny"]]
    ];
    $("#app").innerHTML = `
      <section class="detail-hero atlas-hero section-observe">
        <a class="back-link" href="index.html#content-practice">返回内容实践</a>
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>VISUAL EXPRESSION / 06 · AI VISUAL ATLAS</p>
        <h1>让每个视觉选择<br>都有理由</h1>
        <h2>以视听语言驱动 AI 创作，而不是让生成效果代替表达。</h2>
        <div class="keyword-row"><span>Pinterest</span><span>小红书</span><span>影视画面</span><span>Midjourney</span><span>可灵</span><span>ChatGPT</span><span>即梦</span></div>
      </section>
      <section class="content-section section-observe">
        ${sectionTitle("我的创作原则", "Intent before generation")}
        <p class="atlas-lead">我在意的“AI 感”，来自不成立的质感、打光、诡异的动作表情，以及像没有经过思考的构图。减少 AI 感，不是添加更多细节，而是让画面服务于表达。</p>
        <div class="origin-grid">
          <article><b>先确定表达</b><h3>希望观众感受到什么？</h3><p>生成前写清画面的用途、核心情绪、视觉重点，以及希望避免的感受。选择风格之前，先确定为什么需要这张画面。</p></article>
          <article><b>保留主动选择</b><h3>超现实不等于生成缺陷</h3><p>夸张、怪诞和非写实都可以是创作选择。关键在于它们是否有意图、是否与作品内部逻辑一致，而不是未经判断地接受生成结果。</p></article>
        </div>
        <p class="section-intro">持续提升视听语言是我的学习方向。这里将个人审美判断整理为可复用的检查问题，不宣称已建立完整专业评估体系。</p>
        <div class="prompt-formula"><span>表达意图</span><i>→</i><span>参考拆解</span><i>→</i><span>视觉语言选择</span><i>→</i><span>AI 生成</span><i>→</i><span>质量检查</span><i>→</i><span>针对性修正</span></div>
      </section>
      <section class="content-section section-observe">
        ${sectionTitle("五项画面质量检查", "From intuition to review")}
        <p class="section-intro">先指出具体哪里不成立，再选择修正方向。不是所有作品都必须写实，检查标准应服从创作意图。</p>
        <div class="case-evidence-grid">
          <article><small>01 / TEXTURE</small><h3>质感：材质有区别吗？</h3><p>是否符合对象和场景？是否所有东西都过度光滑，像同一种塑料？</p><p>修正方向：明确材质、表面粗糙度和反光特征，而非统一增加锐化。</p></article>
          <article><small>02 / LIGHTING</small><h3>打光：光从哪里来？</h3><p>光源方向、阴影和反射是否协调？明暗是否引导注意力并服务于情绪？</p><p>修正方向：明确主光方向与软硬，检查主体和环境的关系，避免只要求“电影感”。</p></article>
          <article><small>03 / MOVEMENT</small><h3>动作：为什么这样动？</h3><p>动作有没有目的，重心、接触关系和前后衔接是否合理？</p><p>修正方向：明确起止状态与动作动机，必要时缩小动作范围，逐段检查而非只看静帧。</p></article>
          <article><small>04 / EXPRESSION</small><h3>表情：是否符合人物状态？</h3><p>眼神、面部变化与动作是否一致？表情是否突变或不符合当时的情绪？</p><p>修正方向：具体描述人物情绪与注意对象，减少无理由的夸张变化。</p></article>
          <article><small>05 / COMPOSITION</small><h3>构图：为什么放在这里？</h3><p>主体、前后景、留白与视觉重点是否经过安排？观众第一眼应当看到什么？</p><p>修正方向：明确重心、主体位置与景别，删除干扰信息，而不是把空间全部填满。</p></article>
          <article><small>LEARNING / AUDIOVISUAL</small><h3>从单张画面走向视听关系</h3><p>继续学习镜头衔接、剪辑节奏和声音关系，检查动作是否连续、声音是否支持情绪，以及节奏是否服务于表达。</p><p>这是后续学习与复盘方向，不作为已验证的个人成果。</p></article>
        </div>
      </section>
      <section class="content-section atlas-intro section-observe">
        ${sectionTitle("我的方法", "From reference to result")}
        <p class="atlas-lead">灵感收集不是终点。我收集小红书、Pinterest 与影视画面参考，先让 ChatGPT 描述图片并提炼风格词，再结合其他参考与具体效果要求交给生成工具，最后逐项诊断。</p>
        <p>参考拆解不只问“叫什么风格”，还要追问“它为什么有效”：哪些光线、材质、构图选择支撑了这份感受？</p>
        <div class="atlas-flow">
          ${["收集<br><small>Collect</small>", "场景分类<br><small>Classify</small>", "AI 描述<br><small>Describe</small>", "风格提炼<br><small>Extract</small>", "参考组合<br><small>Combine</small>", "生成<br><small>Generate</small>", "变量诊断<br><small>Diagnose</small>"].map((step, i) => `<div><b>0${i + 1}</b><span>${step}</span></div>`).join("")}
        </div>
      </section>
      <section class="content-section atlas-prompt section-observe">
        ${sectionTitle("提示词公式", "Prompt framework")}
        <div class="prompt-formula"><span>主体</span><i>+</i><span>应用场景</span><i>+</i><span>媒介</span><i>+</i><span>构图 / 镜头</span><i>+</i><span>光线</span><i>+</i><span>色彩</span><i>+</i><span>材质</span><i>+</i><span>氛围</span></div>
        <p>第一轮不理想时，不整句推倒重来：先判断问题属于 <b>材质、色彩、构图、光线或风格</b>，每次只调整一到两个变量，保留可比较的迭代路径。</p>
      </section>
      <section class="content-section atlas-lexicon section-observe">
        ${sectionTitle("视觉词典", "Search vocabulary")}
        <p class="section-intro">中英文可直接组合检索。这不是固定风格表，而是用于描述和诊断画面的起点。</p>
        <div class="lexicon-grid">${lexicon.map(([title, words]) => `<article><h3>${title}</h3><div>${words.map(word => `<button type="button" data-copy-word="${word}" title="点击复制">${word}</button>`).join("")}</div></article>`).join("")}</div>
      </section>
      <section class="content-section atlas-sources section-observe">
        ${sectionTitle("参考与继续学习", "Sources")}
        <div class="source-links">
          <a href="https://docs.midjourney.com/docs/prompts" target="_blank" rel="noreferrer">Midjourney Prompt Basics ↗</a>
          <a href="https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference" target="_blank" rel="noreferrer">Midjourney Style Reference ↗</a>
          <a href="https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html" target="_blank" rel="noreferrer">Adobe Color Models ↗</a>
          <a href="https://www.nikonusa.com/learn-and-explore/photography-glossary/r/1/rule-of-thirds.html" target="_blank" rel="noreferrer">Nikon Photography Glossary ↗</a>
        </div>
      </section>`;
    document.querySelectorAll("[data-copy-word]").forEach((button) => button.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(button.dataset.copyWord); button.classList.add("is-copied"); setTimeout(() => button.classList.remove("is-copied"), 900); } catch (_) {}
    }));
  };

  const renderCommunityCase = () => {
    document.title = "电影兴趣社群运营 | 杜可心 Annie";
    $("#app").innerHTML = `
      <section class="detail-hero community-hero section-observe">
        <a class="back-link" href="index.html#content-practice">返回内容实践</a>
        <p>COMMUNITY OPERATION / 02</p>
        <h1>电影兴趣社群</h1>
        <h2>从小红书公域内容触达，到微信群私域承接与持续话题运营。</h2>
        <div class="keyword-row"><span>小红书引流</span><span>微信群承接</span><span>电影话题</span><span>投票互动</span></div>
      </section>
      <section class="content-section community-overview section-observe">
        ${sectionTitle("运营模式", "Public-to-private loop")}
        <div class="community-funnel">
          <article><b>01</b><p>PUBLIC REACH</p><h3>小红书内容与投票</h3><span>用电影选题、观点和投票降低参与门槛，聚集有共同兴趣的用户。</span></article>
          <i>→</i>
          <article><b>02</b><p>CONVERSION</p><h3>兴趣用户引导沉淀</h3><span>将有进一步交流意愿的用户引导进入微信群，完成从公域触达到私域承接。</span></article>
          <i>→</i>
          <article><b>03</b><p>RETENTION</p><h3>社群话题与活动</h3><span>通过每周投票、片单、观影讨论和日常分享，维持群内的持续活跃。</span></article>
        </div>
        <div class="community-metrics"><div><strong>300+</strong><span>累计公域触达</span></div><div><strong>160+</strong><span>私域社群沉淀</span></div></div>
      </section>
      <section class="content-section community-evidence section-observe">
        ${sectionTitle("过程证据", "Evidence")}
        <p class="section-intro">两张截图分别对应公域互动场和私域社群场，展示内容互动、话题投票与社群持续运营。</p>
        <div class="community-proof-grid">
          <figure>
            <div class="phone-proof">${mediaBlock("image", "src/assets/images/community/xiaohongshu-community-proof.jpg", "小红书电影兴趣群互动证据", "community-proof")}</div>
            <figcaption><b>01 / 小红书公域互动</b><span>围绕 cult 片、恐怖片等兴趣题材发起讨论和投票，形成用户参与入口。</span></figcaption>
          </figure>
          <figure>
            <div class="phone-proof">${mediaBlock("image", "src/assets/images/community/wechat-community-proof.jpg", "微信电影兴趣社群运营证据", "community-proof")}</div>
            <figcaption><b>02 / 微信群私域承接</b><span>将小红书上的每周投票与群内讨论联动，把一次互动延伸为持续兴趣关系。</span></figcaption>
          </figure>
        </div>
        <p class="privacy-note">※ 截图用于展示真实运营过程；对外公开发布前建议对群成员昵称与头像做脱敏处理。</p>
      </section>`;
  };

  const renderProductMethod = () => {
    document.title = "从个人问题到可验证产品 | 杜可心 Annie";
    const steps = [
      ["捕捉问题", "Capture", "从生活、内容工作与表达需求中记录反复出现的真实问题。"],
      ["定义终局", "Outcome", "先写清产品成功时用户能用什么更简单的方式完成什么。"],
      ["结果反推", "Backcast", "从最终体验逆向拆解用户输入、系统理解、决策、工具调用与反馈。"],
      ["能力分层", "Layer", "先保证人工模式成立，再增加智能辅助、Agent 自主执行与外部设备。"],
      ["核心闭环", "MVP Loop", "确定产品必须真实跑通的最短链路，保护底层价值不被展示功能稀释。"],
      ["分层验证", "Validate", "从自己走查、朋友试用到目标用户，为每一阶段定义可观察的 PASS 标准。"],
      ["删减与降级", "Reduce", "删除缺少证据的伪精确规则，提前写好 Not Now List 和交付降级方案。"]
    ];
    $("#app").innerHTML = `
      <section class="detail-hero product-method-hero section-observe">
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>PRODUCT DEFINITION / 01</p>
        <h1>从个人问题<br>到可验证产品</h1>
        <h2>Problem-to-Prototype System</h2>
        <div class="keyword-row"><span>终局反推</span><span>AI 协作</span><span>MVP 闭环</span><span>分层验证</span><span>降级策略</span></div>
      </section>
      <section class="content-section method-origin section-observe">
        ${sectionTitle("两种产品起点", "Two starting points")}
        <div class="origin-grid">
          <article><b>01 / UTILITY</b><h3>真实问题与工作效率</h3><p>从自己生活或内容工作中遇到的问题出发，思考 AI 如何形成可使用、可验证甚至可变现的工具。</p><a href="project.html?id=ai-creative-radar">CASE / AI Creative Radar ↗</a></article>
          <article><b>02 / EXPRESSION</b><h3>个人表达与思想承载</h3><p>产品也可以是一个低压力的表达出口，容纳零散想法，在不要求连续打卡或社交回应的情况下形成陪伴。</p><a href="project.html?id=her-emotional-companion">CASE / her. ↗</a></article>
        </div>
      </section>
      <section class="content-section method-steps section-observe">
        ${sectionTitle("我的产品工作流", "Problem to prototype")}
        <div class="method-step-list">${steps.map((step, i) => `<article><b>0${i + 1}</b><div><small>${step[1]}</small><h3>${step[0]}</h3><p>${step[2]}</p></div></article>`).join("")}</div>
      </section>
      <section class="content-section ai-dj-case section-observe">
        ${sectionTitle("真实案例：Mobile AI DJ Agent", "Case evidence / read only")}
        <p class="section-intro">以真实 PRD 证明“终局反推—能力分层—核心闭环—验收降级”的实际应用。本案例仅供页面阅读，不提供原始 PRD 下载。</p>
        <div class="case-evidence-grid">
          <article><small>FINAL EXPERIENCE</small><h3>用户只需表达现场想变成什么感觉</h3><p>从“学习操作 DJ 台”变为用自然语言表达情绪和能量方向。</p></article>
          <article><small>SHARED ENGINE</small><h3>Manual / Assist / Agent 共享 DJ Engine</h3><p>AI 负责意图理解、规划与 Tool Calling，确定性引擎负责音频执行。</p></article>
          <article><small>MINIMUM LOOP</small><h3>A → B → C 连续混音</h3><p>先证明手机能够稳定连续切歌；即使 AI 失败，Mobile DJ 仍是真实可用产品。</p></article>
          <article><small>DECISION ORDER</small><h3>真实可运行 > Demo 听感 > 核心逻辑</h3><p>Agent 智能感和功能数量位于基础体验之后，避免为展示牺牲可用性。</p></article>
          <article><small>DELIVERY LEVELS</small><h3>Level A → D 降级仍然成立</h3><p>从 Manual + Smart + Agent 逐级降到 Manual Mobile DJ，提前保证任意资源情况下都有可交付版本。</p></article>
          <article><small>PASS CRITERIA</small><h3>每层都定义可执行验收</h3><p>Manual DJ PASS、Smart DJ PASS 与 Agent MVP PASS 分别对应真实操作和可观察结果。</p></article>
        </div>
        <div class="case-readonly"><span>READ-ONLY EVIDENCE</span><b>真实 PRD 已用于方法验证，不开放文件下载</b></div>
      </section>
      <section class="content-section method-templates section-observe">
        ${sectionTitle("可复用模板", "Preview / copy / download")}
        <p class="section-intro">空白模板与真实案例分离。可在页面内预览、复制 Markdown，或下载空白 .md 文件。</p>
        <div class="template-grid">
          ${[
            ["产品问题与场景卡", "product-problem-scene-card.md", "用户、情境、核心任务、当前替代方案与证据。"],
            ["终局结果反推画布", "outcome-backcasting-canvas.md", "从最终体验反推输入、理解、决策、工具调用与反馈。"],
            ["AI 产品能力分层", "ai-product-layering.md", "定义基础能力、人工、智能辅助、Agent 与外部执行层。"],
            ["MVP 核心闭环", "mvp-core-loop.md", "锁定最短可运行链路、继续使用条件与闭环验收。"],
            ["功能验收 PASS 标准", "feature-pass-criteria.md", "把功能要求改写为可执行任务与可观察结果。"],
            ["降级策略与 Not Now List", "fallback-and-not-now.md", "提前定义交付级别、触发条件、保留闭环与暂不实现内容。"]]
            .map((item, i) => `<article><b>0${i + 1}</b><h3>${item[0]}</h3><p>${item[2]}</p><div><button type="button" data-template-preview="${item[1]}">预览模板</button><button type="button" data-template-copy="${item[1]}">复制 Markdown</button><a href="src/assets/templates/${item[1]}" download>下载 .md</a></div></article>`).join("")}
        </div>
        <dialog class="template-dialog" data-template-dialog><button type="button" data-template-close aria-label="关闭">×</button><h3 data-template-title>模板预览</h3><pre data-template-content></pre></dialog>
      </section>`;

    const dialog = document.querySelector("[data-template-dialog]");
    const loadTemplate = async (file) => (await fetch(`src/assets/templates/${file}`)).text();
    document.querySelectorAll("[data-template-preview]").forEach((button) => button.addEventListener("click", async () => {
      document.querySelector("[data-template-content]").textContent = await loadTemplate(button.dataset.templatePreview);
      dialog.showModal();
    }));
    document.querySelectorAll("[data-template-copy]").forEach((button) => button.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(await loadTemplate(button.dataset.templateCopy)); button.textContent = "已复制"; setTimeout(() => button.textContent = "复制 Markdown", 1000); } catch (_) {}
    }));
    document.querySelector("[data-template-close]").addEventListener("click", () => dialog.close());
  };

  const renderProjects = (data) => `
    <section id="projects" class="content-section section-observe">
      ${sectionTitle("项目作品", "AI Exploration Projects")}
      <div class="card-grid projects">
        ${data.projects.map((project) => projectCard(project)).join("")}
      </div>
    </section>
  `;

  const renderAwards = (data) => `
    <section id="awards" class="content-section section-observe">
      ${sectionTitle("荣誉经历", "Awards")}
      <p class="section-intro">横向滑动查看全部奖项与论文记录，点击卡片进入详情。</p>
      <div class="card-grid four award-strip" aria-label="荣誉经历横向列表">
        ${data.awards.map((award) => `
          <a class="panel award-card" href="award.html?id=${award.id}">
            <p>${award.category}</p>
            <h3>${award.title}</h3>
            <small>${award.subtitle}</small>
            <span>${award.description}</span>
            <strong class="card-action">查看详情</strong>
          </a>
        `).join("")}
      </div>
      <p class="award-strip-hint">SWIPE / SHIFT + WHEEL →</p>
    </section>
  `;

  const renderCreativeLab = (data) => `
    <section id="creative-lab" class="content-section section-observe">
      ${sectionTitle("创意实验室", "Creative Lab")}
      <div class="card-grid four">
        ${data.creativeLab.map((item) => {
          const href = item.link || "";
          const isExternal = /^https?:\/\//.test(href);
          const open = href ? `<a class="lab-card" href="${href}"${isExternal ? ` target="_blank" rel="noreferrer"` : ""}>` : `<article class="lab-card">`;
          const close = href ? `</a>` : `</article>`;
          return `
            ${open}
              <div class="cover-frame">${mediaBlock("image", item.cover, item.titleCn, "")}</div>
              <h3>${item.titleCn}</h3>
              <p>${item.titleEn}</p>
              ${item.accountName ? `<strong class="lab-account-name">${item.accountName}</strong>` : ""}
              ${item.accountType ? `<small class="lab-account-type">${item.accountType}</small>` : ""}
              <span>${item.description}</span>
              ${item.tags ? `<div class="mini-tags">${tags(item.tags)}</div>` : ""}
              ${href ? `<strong class="card-action">${item.linkLabel || "进入作品集"}</strong>` : ""}
            ${close}
          `;
        }).join("")}
      </div>
    </section>
  `;

  const renderChannels = (data) => {
    const accounts = data.channelAccounts || [];

    document.title = "账号运营 | 杜可心 Annie";

    $("#app").innerHTML = `
      <section class="detail-hero channel-hero section-observe">
        <a class="back-link" href="index.html#creative-lab">返回创意实验室</a>
        <p>Channel Practice</p>
        <h1>账号运营</h1>
        <h2>短视频账号、IP 二创与个人兴趣内容实践</h2>
      </section>
      <section class="content-section section-observe">
        ${sectionTitle("账号案例", "Channel Cases")}
        <div class="channel-grid">
          ${accounts.map((account) => `
            <article class="channel-card">
              <div class="channel-cover">${mediaBlock("image", account.cover, account.title, "")}</div>
              <div class="channel-content">
                <p>${account.subtitle}</p>
                <h3>${account.title}</h3>
                <strong>${account.type}</strong>
                <span>${account.description}</span>
                <div class="mini-tags">${tags(account.highlights)}</div>
                <div class="channel-metrics">
                  ${account.metrics.map((metric) => `<b>${metric}</b>`).join("")}
                </div>
                <a class="button" href="${account.url}" target="_blank" rel="noreferrer">查看抖音主页</a>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  };

  const renderAiVisual = (data) => {
    const experiments = data.aiVisualExperiments || [];

    document.title = "AI视觉实验 | 杜可心 Annie";

    $("#app").innerHTML = `
      <section class="detail-hero ai-visual-hero section-observe">
        <a class="back-link" href="index.html#creative-lab">返回创意实验室</a>
        <p>AI Visual Experiments</p>
        <h1>AI视觉实验</h1>
        <h2>AI生成实验、风格探索与意识流影像创作</h2>
      </section>
      <section class="content-section section-observe">
        <div class="visual-experiment-grid">
          ${experiments.map((item) => `
            <article class="visual-experiment-card">
              <div class="visual-video">
                ${mediaBlock("video", item.video, item.title)}
              </div>
              <div class="visual-copy">
                <p>${item.subtitle}</p>
                <h3>${item.title}</h3>
                <strong>${item.type}</strong>
                <span>${item.description}</span>
                <div class="mini-tags">${tags(item.tags || [])}</div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  };

  const photographySeries = (data) => data.photographySeries || [];

  const renderPhotography = (data) => {
    const series = photographySeries(data);

    document.title = "摄影作品 | 杜可心 Annie";

    $("#app").innerHTML = `
      <section class="detail-hero photography-hero section-observe">
        <a class="back-link" href="index.html#creative-lab">返回创意实验室</a>
        <p>Photography</p>
        <h1>摄影作品</h1>
        <h2>按系列浏览个人摄影作品</h2>
      </section>
      <section class="content-section section-observe">
        ${sectionTitle("摄影系列", "Photography Folders")}
        <div class="folder-grid">
          ${series.map((item) => `
            <a class="folder-card" href="photo-series.html?id=${item.id}">
              <div class="cover-frame">${mediaBlock("image", item.cover, item.title, "")}</div>
              <div class="folder-meta">
                <span>${item.category || "Photography"}</span>
                <strong>${item.photos.length} Photos</strong>
              </div>
              <h3>${item.title}</h3>
              <p>${item.subtitle}</p>
              <small>${item.description}</small>
              <em>查看系列</em>
            </a>
          `).join("")}
        </div>
      </section>
    `;
  };

  const renderPhotoSeries = (data) => {
    const series = photographySeries(data);
    const current = series.find((item) => item.id === getQueryId()) || series[0];

    if (!current) {
      $("#app").innerHTML = "";
      return;
    }

    document.title = `${current.title} | 摄影作品`;

    $("#app").innerHTML = `
      <section class="detail-hero photography-hero section-observe">
        <a class="back-link" href="photography.html">返回摄影作品</a>
        <p>${current.subtitle}</p>
        <h1>${current.title}</h1>
        <h2>${current.description}</h2>
        <div class="keyword-row"><span>${current.category || "Photography"}</span><span>${current.photos.length} Photos</span></div>
      </section>
      <section class="content-section section-observe">
        ${current.photos.length ? `
          <div class="photo-grid">
            ${current.photos.map((photo, index) => `
              <div class="photo-tile ${index === 0 ? "featured" : ""} ${index >= 24 ? "is-gallery-hidden" : ""}" data-gallery-item>
                ${mediaBlock("image", photo.thumbnail, photo.alt || photo.title, `photography-${current.id}`, photo.full)}
              </div>
            `).join("")}
          </div>
          ${current.photos.length > 24 ? `<button class="button gallery-load-more" type="button" data-load-more-gallery>加载更多照片</button>` : ""}
        ` : `
          <article class="empty-panel">
            <h3>这一组还没有上传照片</h3>
            <p>后续把图片放到对应系列的 thumb / full 目录，并在 siteData.js 中补充数据即可。</p>
          </article>
        `}
      </section>
    `;
  };
  const renderResume = (data) => `
    <section id="resume" class="content-section section-observe">
      ${sectionTitle("简历", "Resume")}
      <div class="resume-panel">
        <div>
          <h3>PDF 简历</h3>
          <p>${data.resume.note}</p>
        </div>
        <div class="action-row">
          <a class="button" href="${data.resume.pdf}" target="_blank" rel="noreferrer">预览简历</a>
        </div>
      </div>
    </section>
  `;

  const renderContact = (data) => `
    <section id="contact" class="content-section section-observe">
      ${sectionTitle("联系", "Contact")}
      <div class="contact-panel">
        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
        <p>${data.contact.socials.join(" / ")}</p>
        ${data.contact.note ? `<span>${data.contact.note}</span>` : ""}
      </div>
    </section>
  `;

  const renderHome = (data) => {
    $("#app").innerHTML = [
      renderHero(data),
      renderFeaturedProjects(data),
      renderCapabilityMap(data),
      renderExperience(data),
      renderContentPractice(data),
      renderAwards(data),
      renderCreativeLab(data),
      renderAbout(data),
      renderResume(data),
      renderContact(data)
    ].join("");
  };

  const projectExtraVideos = (project) => (project.extraVideos || []).map((item, index) => `
    <article class="project-extra-video">
      <div class="project-extra-video-heading">
        <h3>${item.title || `视频 ${index + 1}`}</h3>
        ${item.description ? `<p>${item.description}</p>` : ""}
      </div>
      ${mediaBlock("video", item.video, item.title || `${project.title} extra video ${index + 1}`)}
    </article>
  `).join("");

  const renderProjectDetail = (data) => {
    const project = data.projects.find((item) => item.id === getQueryId()) || data.projects[0];
    const projectLinks = [
      project.github ? { label: "GitHub", url: project.github } : null,
      project.demo ? { label: "Demo URL", url: project.demo } : null
    ].filter(Boolean);

    document.title = `${project.title} | 项目详情`;

    $("#app").innerHTML = `
      <section class="detail-hero section-observe">
        <a class="back-link" href="index.html#projects">返回项目作品</a>
        <p>${project.subtitle}</p>
        <h1>${project.title}</h1>
        <h2>${project.year}</h2>
        ${projectLinks.length ? `
          <div class="hero-link-panel" aria-label="项目外部链接">
            <p>点击下方按钮查看这个项目的在线演示或代码仓库。</p>
            <div class="hero-link-row">
              ${projectLinks.map((link) => `<a class="hero-link-button" href="${link.url}" target="_blank" rel="noreferrer">${link.label === "Demo URL" ? "查看在线 Demo" : "查看 GitHub 代码"}</a>`).join("")}
            </div>
          </div>
        ` : ""}
        <div class="keyword-row">${tags(project.tags)}</div>
      </section>
      <section class="content-section detail-layout section-observe">
        <aside>
          ${hasVideo(project.video) ? mediaBlock("video", project.video, "Project Video Placeholder") : ""}
          ${(project.extraVideos && project.extraVideos.length) || (project.images && project.images.length) ? `
            <div class="upload-slots">
              ${projectExtraVideos(project)}
              ${(project.images || []).map((src, index) => mediaBlock("image", src, `${project.title} ${index + 1}`, `project-${project.id}`)).join("")}
            </div>
          ` : ""}
          ${projectLinks.length ? `<div class="link-stack">${projectLinks.map((link) => `<a class="button ghost" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}</div>` : ""}
        </aside>
        <div class="detail-content">
          ${sectionTitle("项目简介", "Project Summary")}<p>${project.summary}</p>
          ${sectionTitle("创作背景 / 用户问题", "Context / Problem")}<p>${project.background}</p>
          ${sectionTitle("我的探索过程", "Exploration Process")}<ol>${textList(project.process)}</ol>
          ${sectionTitle("使用工具", "Tools")}<div class="keyword-row">${tags(project.tools)}</div>
          ${sectionTitle("项目成果", "Results")}<ul>${textList(project.results)}</ul>
          ${projectLinks.length ? `${sectionTitle("相关链接", "Links")}<div class="action-row">${projectLinks.map((link) => `<a class="button" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}</div>` : ""}
        </div>
      </section>
    `;
  };

  const renderAwardDetail = (data) => {
    const award = data.awards.find((item) => item.id === getQueryId()) || data.awards[0];

    document.title = `${award.title} | 荣誉详情`;

    $("#app").innerHTML = `
      <section class="detail-hero award-hero section-observe">
        <a class="back-link" href="index.html#awards">返回荣誉经历</a>
        <p>${award.category}</p>
        <h1>${award.title}</h1>
        <h2>${award.subtitle}</h2>
        <div class="keyword-row"><span>${award.date}</span><span>${award.category}</span></div>
      </section>
      <section class="content-section detail-layout award-detail section-observe">
        <aside>
          ${mediaBlock("image", award.image, award.title, `award-${award.id}`)}
        </aside>
        <div class="detail-content">
          ${sectionTitle("详情说明", "Detail")}
          <p>${award.description}</p>
          ${sectionTitle("关键信息", "Info")}
          <ul>${textList(award.details || [])}</ul>
          <div class="action-row">
            <a class="button" href="${award.image}" target="_blank" rel="noreferrer">查看原图</a>
          </div>
        </div>
      </section>
    `;
  };

  const renderExperienceDetail = (data) => {
    const item = data.experiences.find((experience) => experience.id === getQueryId()) || data.experiences[0];
    document.title = `${item.company} | 实习详情`;

    $("#app").innerHTML = `
      <section class="detail-hero section-observe">
        <a class="back-link" href="index.html#experience">返回实习经历</a>
        <p>${item.company}</p>
        <h1>${item.role}</h1>
        <h2>${item.period}</h2>
        <div class="keyword-row">${tags(item.tags)}</div>
      </section>
      <section class="content-section detail-layout section-observe">
        <aside>
          ${hasVideo(item.video) ? mediaBlock("video", item.video, "Experience Video Placeholder") : ""}
          ${item.images && item.images.length ? `
            <div class="upload-slots">
              ${item.images.map((src, index) => mediaBlock("image", src, `${item.company} ${index + 1}`, `experience-${item.id}`)).join("")}
            </div>
          ` : ""}
        </aside>
        <div class="detail-content">
          ${sectionTitle("实习简介", "Summary")}<p>${item.summary}</p>
          ${sectionTitle("我的工作内容", "Responsibilities")}<ul>${textList(item.responsibilities)}</ul>
          ${sectionTitle("关键成果", "Key Results")}<ul>${textList(item.achievements)}</ul>
          ${sectionTitle("我的成长", "Growth")}<p>${item.growth}</p>
        </div>
      </section>
    `;
  };

  return {
    renderShell,
    renderHome,
    renderProjectDetail,
    renderAwardDetail,
    renderExperienceDetail,
    renderPhotography,
    renderPhotoSeries,
    renderChannels,
    renderAiVisual,
    renderVisualAtlas,
    renderCommunityCase,
    renderProductMethod
  };
})();
