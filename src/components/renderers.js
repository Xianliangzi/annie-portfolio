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
      <p>杜可心 Annie · Interactive Portfolio · AI Explorer / Digital Media Artist</p>
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
      </div>
      <div class="hero-panel" aria-label="能力概览">
        <div class="radar-card">
          <span>AI</span>
          <span>DATA</span>
          <span>VISUAL</span>
          <span>BUILD</span>
        </div>
        <div class="hero-metrics">
          <article><b>01</b><span>AI 工具探索</span></article>
          <article><b>02</b><span>数据分析复盘</span></article>
          <article><b>03</b><span>视觉创作表达</span></article>
        </div>
      </div>
    </section>
  `;

  const renderFeaturedProjects = (data) => {
    const featured = data.featuredProjectIds
      .map((id) => data.projects.find((project) => project.id === id))
      .filter(Boolean);

    return `
      <section class="content-section section-observe">
        ${sectionTitle("精选项目", "Featured Projects")}
        <div class="featured-grid">
          ${featured.map((project) => projectCard(project)).join("")}
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
      ${sectionTitle("实习经历", "Experience")}
      <div class="card-grid three">
        ${data.experiences.map((item) => `
          <a class="work-card" href="experience.html?id=${item.id}">
            <div class="cover-frame">${mediaBlock("image", firstImage(item, ""), item.company)}</div>
            <p>${item.company}</p>
            <h3>${item.role}</h3>
            <small>${item.period}</small>
            <div class="mini-tags">${tags(item.tags)}</div>
            <span>${item.summary}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;

  const projectCard = (project) => `
    <a class="work-card project-card" href="project.html?id=${project.id}">
      <div class="cover-frame">${mediaBlock("image", project.cover, project.title, "")}</div>
      <p>${project.year}</p>
      <h3>${project.title}</h3>
      <small>${project.subtitle}</small>
      <div class="mini-tags">${tags(project.tags)}</div>
      <span>${project.summary}</span>
    </a>
  `;

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
      <div class="card-grid four">
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
      renderAbout(data),
      renderExperience(data),
      renderProjects(data),
      renderAwards(data),
      renderCreativeLab(data),
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
    renderAiVisual
  };
})();
