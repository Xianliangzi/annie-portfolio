(function () {
  const escape = text => text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const templates = [
    {title:'人工任务拆解表',file:'manual-task-breakdown.md',text:'# 人工任务拆解表\n\n- 工作目标与交付物：\n- 原人工操作顺序：\n- 每一步的输入与输出：\n- 重复操作与平台切换：\n- 最耗时的步骤及观察依据：\n- 需要判断的步骤：\n- 适合固定规则的步骤：\n- 适合 AI 辅助的步骤：\n- 自动化后仍需保留的人工检查：\n- 如何验证工作流有效：\n'},
    {title:'人机分工表',file:'human-ai-responsibility.md',text:'# 人机分工表\n\n- 任务名称：\n- 用户输入与限定条件：\n- AI 负责的理解与匹配：\n- 工具负责的整理与执行：\n- 人负责的审核与决策：\n- 判断依据与来源：\n- 不确定信息如何处理：\n- 外部执行前的确认节点：\n- 允许执行的范围：\n- 异常时如何暂停与交接：\n'},
    {title:'执行结果检查表',file:'workflow-result-checklist.md',text:'# 执行结果检查表\n\n- 执行任务与时间：\n- 本次平台与范围：\n- 名单和文案是否已经审核：\n- 实际可记录的状态：\n- 状态具体证明什么：\n- 状态不能证明什么：\n- 已观察到的异常：\n- 需要人工核验的部分：\n- 缺失的记录能力：\n- 后续改进（不要写作已实现）：\n- 平台规则与联系频率检查：\n'}
  ];
  const h = (cn,en)=>`<h2>${cn}</h2><p class="insight-eyebrow">${en}</p>`;
  window.portfolioRenderers.renderAiWorkflow = () => {
    document.querySelector('#app').innerHTML = `
      <section class="detail-hero product-method-hero section-observe">
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>AI WORKFLOW / 02</p><h1>从重复操作<br>到人机协作</h1><h2>Human-in-the-loop Workflow</h2>
        <div class="keyword-row"><span>任务拆解</span><span>自然语言入口</span><span>集中审核</span><span>批量执行</span></div>
      </section>
      <section class="content-section section-observe">
        ${h('自动化重复操作，保留关键判断','MY WORKFLOW PRINCIPLE')}
        <p class="atlas-lead">我的起点不是先选 AI 工具，而是还原一项工作如何完成：哪些步骤在重复，哪些步骤需要理解，哪些决定仍然必须由人做。</p>
        <p class="section-intro">以下以 AI Creator Discovery 为真实案例。运行情况依据我的实际使用描述：目前支持抖音、B站，结果仅记录“已发送”。</p>
        <div class="origin-grid">
          <article><b>BEFORE / 分散操作</b><h3>逐个平台找，逐个作者联系</h3><p>搜索关键词 → 一条条看内容 → 锁定作者 → 逐个私信 → 整理表格。人的时间被反复搜索、切换平台和搬运信息占用。</p></article>
          <article><b>AFTER / 集中协作</b><h3>AI 搜索，人集中筛选</h3><p>描述需求 → 自动搜索 → 候选进入工作台 → 人工筛选 → 编写私信模板 → 批量发送。把判断集中到候选与文案审核环节。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('一句需求，成为任务入口','NATURAL LANGUAGE TO TASK')}
        <p class="atlas-lead">“我要外国人在中国的美食原创博主。”</p>
        <div class="prompt-formula"><span>身份条件</span><i>+</i><span>地域场景</span><i>+</i><span>内容方向</span><i>+</i><span>原创要求</span></div>
        <p>这是对需求的结构化拆解示例，而不是对后台算法实现的描述。身份、地域与原创性需要可靠资料支持，不能只凭外貌或单条内容推定；不确定的候选由人核验。</p>
      </section>
      <section class="content-section section-observe">
        ${h('工作流里的三个角色','AI / TOOLS / HUMAN')}
        <div class="insight-template-grid">
          <article><h3>AI：理解与搜索匹配</h3><p>根据需求限定词查找候选创作者，为后续人工判断提供名单。</p></article>
          <article><h3>工具：整理与重复执行</h3><p>将候选沉淀到工作台，使用审核后的私信模板批量发送，并记录目前支持的发送状态。</p></article>
          <article><h3>人：审核与最终决定</h3><p>确认候选是否符合实际目标，检查名单和文案，再决定联系哪些人。自动化不等于取消审核。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('可以带到其他任务的六步方法','A REUSABLE METHOD')}
        <div class="method-step-list">${[
          ['还原人工过程','把搜索、阅读、判断、记录和发送分开，明确各步输入与输出。'],
          ['识别重复环节','优先处理反复切换平台、整理名单和重复执行等环节。'],
          ['结构化任务入口','将自然语言目标拆成限定条件，暴露含糊或需要核验的要求。'],
          ['集中候选与人工审核','让 AI 提供候选，把筛选和最终决策留在可集中处理的工作台。'],
          ['确认后执行','审核名单和文案后进行批量操作；执行范围和联系频率应符合平台规则。'],
          ['按实际状态复盘','先明确工具能记录什么，不把“执行完成”直接等同于业务结果。']
        ].map((s,i)=>`<article><b>0${i+1}</b><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('')}</div>
      </section>
      <section class="content-section atlas-prompt section-observe">
        ${h('一次真实调整：不再卡 60 分','ITERATION / AI CREATOR DISCOVERY')}
        <div class="origin-grid"><article><b>原方案</b><h3>固定分数门槛筛选</h3><p>以 60 分作为筛选条件，但实际工作并不需要这个过于固定的门槛。</p></article><article><b>调整后</b><h3>候选排序，再人工筛选</h3><p>找到目标创作者后按匹配程度降序排列，让使用者结合真实需求做判断，而不是依赖缺少依据的截断点。</p></article></div>
        <p>方法反思：先确认规则是否服务于实际决策。排序也不代表匹配一定正确，候选仍需人工核验。</p>
        <a class="back-link" href="project.html?id=creator-discovery-tool">查看 AI Creator Discovery 项目 ↗</a>
      </section>
      <section class="content-section section-observe">
        ${h('当前能力，不扩大描述','IMPLEMENTED & NOT YET IMPLEMENTED')}
        <div class="case-evidence-grid">
          <article><small>已跑通 · 据实际使用</small><h3>抖音与 B站</h3><p>需求描述、自动搜索、工作台名单、人工筛选、私信模板和批量发送已跑通。不写成支持所有平台。</p></article>
          <article><small>当前记录</small><h3>仅“已发送”</h3><p>这是工具的执行记录，不等于对方已读、已回复，更不能作为合作转化的证明。</p></article>
          <article><small>后续方向 · 未实现</small><h3>更完整的结果追踪</h3><p>失败记录、回复追踪与重复联系检查属于后续完善方向，本页不将其列为已有能力。</p></article>
          <article><small>执行边界</small><h3>批量不等于无限发送</h3><p>名单和文案需审核，实际联系需遵守平台规则并尊重对方意愿。不声称当前已具备自动限频或去重机制。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('复用流程，不复制真实名单','BLANK TEMPLATES')}
        <p class="section-intro">下载仅包含空白模板，不含创作者名单、私信记录或真实案例源文件。</p>
        <div class="insight-template-grid">${templates.map((t,i)=>`<article><h3>${t.title}</h3><details><summary>预览模板</summary><pre>${escape(t.text)}</pre></details><div class="action-row"><button type="button" class="button" data-workflow-copy="${i}">复制模板</button><a class="button" href="src/assets/templates/${t.file}" download>下载 .md</a></div></article>`).join('')}</div>
        <p id="workflow-copy-status" role="status" aria-live="polite"></p>
      </section>`;
    document.querySelectorAll('[data-workflow-copy]').forEach(button=>button.addEventListener('click',async()=>{
      const status=document.querySelector('#workflow-copy-status');
      try { await navigator.clipboard.writeText(templates[Number(button.dataset.workflowCopy)].text); status.textContent='模板已复制。'; }
      catch { status.textContent='无法自动复制，请展开预览手动复制，或下载模板。'; }
    }));
  };
})();
