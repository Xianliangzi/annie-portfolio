(function () {
  const escape = (text) => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const templates = [
    { title: '用户信号记录卡', file: 'user-signal-card.md', text: '# 用户信号记录卡\n\n- 来源链接与记录日期：\n- 用户原话（匿名化）：\n- 用户所处场景：\n- 想完成的任务：\n- 当前替代方案：\n- 观察到的行为：\n- 我的解释（与事实分开）：\n- 相似线索来自哪些不同用户：\n- 样本偏差与反例：\n- 下一步需要确认的问题：\n' },
    { title: '假设与反证画布', file: 'hypothesis-evidence-canvas.md', text: '# 假设与反证画布\n\n- 需求假设：\n- 适用用户与场景：\n- 支持证据及来源：\n- 反对证据及来源：\n- 仍未知的部分：\n- 使用者 / 付费者 / 决策者：\n- 是否依赖足够多用户同时参与：\n- 成本与收益假设：\n- 最低成本的验证方式：\n- 什么结果会让我改变判断：\n- 当前结论：待验证 / 有初步支持 / 需要调整\n' },
    { title: '场景化验证计划', file: 'context-validation-plan.md', text: '# 场景化验证计划\n\n- 要验证的核心假设：\n- 测试对象与招募依据：\n- 测试场景及任务：\n- 产品自然使用周期：\n- 指标名称：\n- 分子与分母：\n- 统计时间窗口：\n- 数据收集方式与隐私边界：\n- 通过 / 调整 / 停止标准及依据：\n- 实际观察：\n- 局限性：\n- 下一步决策：\n' }
  ];
  const heading = (cn, en) => `<h2>${cn}</h2><p class="insight-eyebrow">${en}</p>`;
  window.portfolioRenderers.renderUserInsight = () => {
    document.querySelector('#app').innerHTML = `
      <section class="detail-hero product-method-hero section-observe">
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>USER INSIGHT / 03</p><h1>从用户信号<br>到需求证据</h1>
        <h2>Signal-to-Evidence Framework</h2>
        <div class="keyword-row"><span>网络观察</span><span>假设反思</span><span>寻找反证</span><span>场景化验证</span></div>
      </section>
      <section class="content-section section-observe">
        ${heading('先观察，再判断', 'MY PRACTICE & REFLECTION')}
        <p class="atlas-lead">我从帖子和评论区寻找新的角度、愿望与反复出现的问题。它们是研究的起点，而不是需求已经成立的证明。</p>
        <div class="origin-grid">
          <article><b>目前的实际做法</b><h3>从网络讨论中发现线索</h3><p>留意评论区的重复问题和表达愿望，结合自己的生活体验提出产品想法。收藏量、点赞和重复出现的声音，不直接等同于使用意愿。</p></article>
          <article><b>从反思中沉淀的改进方法</b><h3>为假设寻找反例</h3><p>把用户原话、个人解释和待验证假设分开记录；主动检查谁需要、什么情况下需要、谁付费，以及什么证据会让我改变判断。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${heading('可复用的验证流程', 'A WORKFLOW TO APPLY')}
        <p class="section-intro">以下流程由已有观察与项目反思整理，供后续项目复用；不代表每一步都已在既有项目中完成。</p>
        <div class="method-step-list">${[
          ['记录信号','保存来源、原话和场景，避免只留下自己的概括；展示时匿名化个人信息。'],
          ['区分愿望与问题','分清有趣的创意、口头愿望与具体任务中的障碍，不把三者混为一谈。'],
          ['写出需求假设','明确用户、场景、任务与现有替代方案，并标注尚未确定的部分。'],
          ['寻找反证','检查不愿使用的人、其他解决方式，以及使用者和付费者之间的矛盾。'],
          ['设计低成本验证','通过场景追问、真实任务观察或小原型，检验最关键且最不确定的假设。'],
          ['更新判断','记录证据支持了什么、没有支持什么；必要时调整人群、机制或暂停方案。']
        ].map((s,i)=>`<article><b>0${i+1}</b><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('')}</div>
      </section>
      <section class="content-section section-observe">
        ${heading('有场景，不一定有需求', 'CASE / IN-FLIGHT SOCIAL SYSTEM')}
        <p class="section-intro">案例依据：我自己的乘机体验与老师对设计方案的反馈。以下是方案反思和待验证问题，并非航空行业调研结论。</p>
        <div class="case-evidence-grid">
          <article><small>INITIAL ASSUMPTION</small><h3>长途飞行的空闲，可以转化为社交吗？</h3><p>我曾设计机上娱乐社交系统，并不断为方案补充用户需要它的理由。回看时发现，有空闲时间不等于愿意与陌生人交流。</p></article>
          <article><small>TEACHER FEEDBACK</small><h3>用户规模与投入意愿可能错位</h3><p>老师指出：航空公司未必愿意为经济舱承担高昂升级成本；商务舱乘客可能更重视休息，且人数较少。由此需要分别验证需求、投入意愿和社交密度。</p></article>
          <article><small>CONTEXT LIMIT</small><h3>适用条件叠加后，还剩多少用户？</h3><p>方案主要围绕长途航班，还依赖乘客同时愿意参与、有合适话题与交流对象。不能把航班总人数当成可参与社交的人数。</p></article>
          <article><small>CURRENT CONCLUSION</small><h3>不把创意合理性当成需求证据</h3><p>目前更准确的判断是：使用意愿、商业价值和足够的参与规模尚待验证，而不是宣称这个需求已经被证伪。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${heading('七个需求检查问题', 'CHECK BEFORE BUILDING')}
        <div class="method-step-list">${[
          ['意愿','用户是否主动想完成这件事，而不只是觉得点子有趣？'],
          ['情境','需求在什么条件下成立？哪些条件会让它消失？'],
          ['密度','是否需要足够多人同时参与？冷启动如何验证？'],
          ['角色','谁使用、谁付费、谁批准购买或部署？'],
          ['频率','用户多久自然遇到一次这个任务？'],
          ['商业可行性','收益假设是什么？实现、运营与安全成本由谁承担？'],
          ['指标适配','分母和时间窗口是否对应真实使用机会？']
        ].map((s,i)=>`<article><b>0${i+1}</b><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('')}</div>
      </section>
      <section class="content-section atlas-prompt section-observe">
        ${heading('不为了活跃度，强行追求日活', 'METRICS FOLLOW THE CONTEXT')}
        <p class="atlas-lead">对于低频乘机场景，DAU / MAU 可以描述规模，却不足以单独判断需求。应结合每次真实使用机会，设计场景内的验证指标。</p>
        <div class="case-evidence-grid">
          <article><h3>单航班激活率</h3><p>启动服务的乘客数 ÷ 同航班有服务访问机会的乘客数。先明确资格与统计口径。</p></article>
          <article><h3>交流发起率</h3><p>实际发起交流的人数 ÷ 已激活人数。不能用点击入口直接代替有效交流。</p></article>
          <article><h3>有效互动与安全</h3><p>预先定义有意义的互动标准，并同时记录退出、屏蔽与举报；不只追求消息数量。</p></article>
          <article><h3>投入与体验收益</h3><p>检查乘客体验改善、航空公司投入意愿与成本。以上均为建议验证方向，暂无实测数据。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${heading('从反馈中修正规则', 'CASE / AI CREATOR DISCOVERY')}
        <p class="atlas-lead">原先用 60 分门槛筛选创作者，实际使用后发现，更需要的是找到候选创作者并按匹配程度降序排列，而不是被一个固定分数截断。</p>
        <p>这个案例说明的是使用反馈如何改变规则，而非对所有评分系统的否定：阈值需要依据，排序结果也仍需人工核验。</p>
        <a class="back-link" href="project.html?id=creator-discovery-tool">查看关联项目 ↗</a>
      </section>
      <section class="content-section section-observe">
        ${heading('空白模板，带到下一个项目', 'PREVIEW / COPY / DOWNLOAD')}
        <p class="section-intro">下载内容仅包含空白方法模板，不含真实案例材料。</p>
        <div class="insight-template-grid">${templates.map((t,i)=>`<article><h3>${t.title}</h3><details><summary>预览模板</summary><pre>${escape(t.text)}</pre></details><div class="action-row"><button class="button" type="button" data-insight-copy="${i}">复制模板</button><a class="button" href="src/assets/templates/${t.file}" download>下载 .md</a></div></article>`).join('')}</div>
        <p id="insight-copy-status" role="status" aria-live="polite"></p>
      </section>`;
    document.querySelectorAll('[data-insight-copy]').forEach(button => button.addEventListener('click', async () => {
      const status = document.querySelector('#insight-copy-status');
      try { await navigator.clipboard.writeText(templates[Number(button.dataset.insightCopy)].text); status.textContent = '模板已复制。'; }
      catch { status.textContent = '无法自动复制，请展开预览手动复制，或下载模板。'; }
    }));
  };
})();
