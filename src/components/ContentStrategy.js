(function () {
  const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const templates = [
    {title:'选题判断卡', file:'content-topic-card.md', text:'# 选题判断卡\n\n- 主题与来源：\n- 为什么值得表达：\n- 触发点（感触 / 讨论空间 / 趣味 / 冲击力）：\n- 目标观众：\n- 观众为什么关心：\n- 希望引发的感受或行动：\n- 我能提供的新信息或角度：\n- 事实核验与素材使用边界：\n- 本条内容只讲清的一件事：\n'},
    {title:'场景与切口画布', file:'content-angle-canvas.md', text:'# 场景与切口画布\n\n- 大主题：\n- 具体人群：\n- 具体场景：\n- 观众最关心的问题：\n- 候选切口：\n- 最终切口与选择原因：\n- 一句话核心表达：\n- 标题与封面承诺：\n- 支撑表达的素材或证据：\n- 不在本条展开的内容：\n'},
    {title:'发布复盘记录表', file:'content-review-sheet.md', text:'# 发布复盘记录表\n\n- 内容链接 / 平台 / 发布日期：\n- 本次目标：\n- 观察窗口与可比内容：\n- 平台指标定义及统计口径：\n- 曝光：\n- 点击或进入：\n- 停留或观看：\n- 讨论 / 收藏 / 分享 / 关注等目标行动：\n- 实际观察（事实）：\n- 可能原因（假设）：\n- 支持或反对该假设的证据：\n- 下一轮优先调整的变量：\n- 其他变化与归因局限：\n- 调整结果与后续决策：\n'}
  ];
  const heading = (cn,en) => `<h2>${cn}</h2><p class="insight-eyebrow">${en}</p>`;
  window.portfolioRenderers.renderContentStrategy = () => {
    document.querySelector('#app').innerHTML = `
      <section class="detail-hero product-method-hero section-observe">
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>CONTENT STRATEGY / 05</p><h1>从选题触发<br>到传播复盘</h1>
        <h2>Topic → Angle → Expression → Review</h2>
        <div class="keyword-row"><span>表达价值</span><span>场景细分</span><span>受众关切</span><span>反馈迭代</span></div>
      </section>
      <section class="content-section section-observe">
        ${heading('先问：这件事为什么值得讲？','MY STARTING POINT')}
        <p class="atlas-lead">我会被有感触、值得深入讨论、有趣或有冲击力的内容吸引。选题不只看热度，也看自己是否有话可说，以及观众为什么愿意看。</p>
        <div class="case-evidence-grid">${[
          ['01 / RESONANCE','有感触','从真实感受和表达欲出发，找到自己想说、也能让别人产生共鸣的部分。'],
          ['02 / DISCUSSION','有讨论空间','主题可以延展出问题、观点或不同立场，值得继续挖掘，而不只是复述信息。'],
          ['03 / PLAYFULNESS','有趣','关注大家喜爱的梗与有趣的表达，判断它能否与本次主题自然结合。'],
          ['04 / IMPACT','有冲击力','视觉突出，或事件本身令人震撼。吸引注意之后，仍需要有值得留下来的内容。']
        ].map(x=>`<article><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div>
      </section>
      <section class="content-section section-observe">
        ${heading('同一个主题，找到具体切口','MY ANGLE-SELECTION METHOD')}
        <p class="atlas-lead">我会细分场景，从最有传播点、或人们最关心的部分出发做内容。</p>
        <div class="prompt-formula"><span>大主题</span><i>→</i><span>具体人群与场景</span><i>→</i><span>最关心的问题</span><i>→</i><span>本条核心表达</span></div>
        <div class="origin-grid"><article><b>选题</b><h3>决定讨论什么</h3><p>记录吸引我的主题、感受和信息，以及它为什么值得进一步展开。</p></article><article><b>切口</b><h3>决定为什么看这一条</h3><p>把大主题收敛为一个具体问题，不让一条内容同时承担过多表达任务。</p></article></div>
      </section>
      <section class="content-section section-observe">
        ${heading('把判断沉淀成工作流','A REUSABLE WORKFLOW')}
        <p class="section-intro">选题、场景细分与曝光 / 点击排查来自我的实际做法；表达检查和后续观看、行动分析是整理后补充的复用步骤，不代表已有完整验证案例。</p>
        <div class="method-step-list">${[
          ['记录触发点','写下为什么有感触、有讨论空间、有趣或有冲击力，而不只保存一个链接。'],
          ['锁定人群与场景','判断谁会关心、在什么情况下关心，以及他最想知道什么。'],
          ['选定切口','筛选传播点，写出本条内容只想讲清的一句话。'],
          ['检查表达承诺','建议补充：核对标题、封面与正文是否一致，确保内容能够兑现点开前的期待。'],
          ['发布并观察','按平台实际提供的数据记录表现，保留观察时间窗口与指标口径。'],
          ['定位并迭代','区分观察事实和原因假设，优先调整最值得验证的变量，再观察结果。']
        ].map((x,i)=>`<article><b>0${i+1}</b><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div>
      </section>
      <section class="content-section atlas-prompt section-observe">
        ${heading('反响不如预期，先定位卡在哪里','REVIEW WITHOUT JUMPING TO CAUSES')}
        <p class="atlas-lead">我先区分曝光和点击的问题，而不是笼统归结为“内容不好”。下面的检查项是原因假设，不是对平台分发机制的确定解释。</p>
        <div class="case-evidence-grid">
          <article><small>01 / EXPOSURE</small><h3>有没有被看到？</h3><p>查看内容状态、分发情况和触达人群；发布时间、话题标签作为待排查因素，不直接认定它们导致曝光低。</p></article>
          <article><small>02 / CLICK</small><h3>看到后有没有点开？</h3><p>优先检查标题与封面，也检查选题、切口是否与受众相关。不同平台的点击定义不一定相同。</p></article>
          <article><small>03 / ATTENTION · 建议补充</small><h3>点开后有没有继续看？</h3><p>在有相应数据时检查停留或观看表现，回看开头、节奏和标题承诺是否兑现。不设跨平台通用合格线。</p></article>
          <article><small>04 / ACTION · 建议补充</small><h3>有没有产生预期行动？</h3><p>根据内容目标选择讨论、收藏、分享或关注等反馈，不要求每条内容同时追求全部指标。</p></article>
        </div>
        <p>复盘记录：观察事实 → 原因假设 → 支持与反对证据 → 下一轮调整。单条内容的变化不能独立证明因果，需要留意样本和其他同时变化的因素。</p>
      </section>
      <section class="content-section section-observe">
        ${heading('把方法带到下一条内容','BLANK TEMPLATES')}
        <p class="section-intro">仅提供空白模板，不包含真实项目材料或未经确认的成效数据。</p>
        <div class="insight-template-grid">${templates.map((t,i)=>`<article><h3>${t.title}</h3><details><summary>预览模板</summary><pre>${escape(t.text)}</pre></details><div class="action-row"><button type="button" class="button" data-content-copy="${i}">复制模板</button><a class="button" href="src/assets/templates/${t.file}" download>下载 .md</a></div></article>`).join('')}</div>
        <p role="status" aria-live="polite" id="content-copy-status"></p>
      </section>`;
    document.querySelectorAll('[data-content-copy]').forEach(button=>button.addEventListener('click',async()=>{
      const status = document.querySelector('#content-copy-status');
      try { await navigator.clipboard.writeText(templates[Number(button.dataset.contentCopy)].text); status.textContent='模板已复制。'; }
      catch { status.textContent='无法自动复制，请展开预览手动复制，或下载模板。'; }
    }));
  };
})();
