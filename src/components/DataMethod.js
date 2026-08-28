(function () {
  const templates = [
  {
    "title": "指标口径记录卡",
    "file": "metric-definition-card.md",
    "text": "# 指标口径记录卡\n\n- 指标名称：\n- 业务含义（使用时填写，不推定）：\n- 单位：\n- 统计对象与范围：\n- 数据来源与负责人：\n- 时间窗口与更新时点：\n- 去重或过滤条件：\n- 计算公式：\n- 缺失值和零值处理：\n- 口径变更记录：\n"
  },
  {
    "title": "垂类日监测表",
    "file": "category-daily-monitor.md",
    "text": "# 垂类日监测表\n\n- 负责垂类：\n- 统计日期与数据截止时间：\n- 口径是否与前日一致：\n\n| 指标 | 单位 | 前日值 | 当日值 | 绝对变化 | 日环比 | 数据状态 / 备注 |\n| --- | --- | --- | --- | --- | --- | --- |\n| 供给（口径另填） | | | | | | |\n| 分发（口径另填） | | | | | | |\n| 涨粉（口径另填） | | | | | | |\n\n绝对变化 = 当日值 - 前日值。\n日环比 =（当日值 - 前日值）/ 前日值，以百分比显示。\n缺失值不得当作零；前日为零时环比标记不适用。前日为负数时单独解释，避免直接用百分比判断改善。\n"
  },
  {
    "title": "异常排查与优化记录",
    "file": "data-issue-review.md",
    "text": "# 异常排查与优化记录\n\n- 日期与监测范围：\n- 发现变化的指标：\n- 数据来源及完整性检查：\n- 口径和时间窗口是否一致：\n- 观察事实：\n- 可能原因（假设）：\n- 回看内容或拆分维度：\n- 支持 / 反对证据：\n- 本轮优化动作：\n- 后续观察窗口：\n- 实际结果：\n- 同期其他变化和归因局限：\n- 下一步决策：\n"
  }
];
  const escape = text => text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const h = (cn,en) => '<h2>'+cn+'</h2><p class="insight-eyebrow">'+en+'</p>';
  window.portfolioRenderers.renderDataMethod = () => {
    document.querySelector('#app').innerHTML = `
      <section class="detail-hero product-method-hero section-observe">
        <a class="back-link" href="index.html#capabilities">返回能力地图</a>
        <p>DATA ANALYSIS / 04</p><h1>从日常监测<br>到环节优化</h1><h2>Monitor → Compare → Diagnose → Improve</h2>
        <div class="keyword-row"><span>垂类监测</span><span>日环比</span><span>异常排查</span><span>Excel / AI</span></div>
      </section>
      <section class="content-section section-observe">
        ${h('用数据发现问题，让优化有依据','MY PRACTICE')}
        <p class="atlas-lead">在百度负责一个创作者垂类时，我会监测供给、分发与涨粉表现，与前一天的数据计算环比，发现变化后再回看具体环节，进行针对性优化。</p>
        <p class="section-intro">本页沉淀实际工作方式，不披露内部数据，不推定内部指标定义，也不以未经确认的增长数字作为成果。</p>
        <div class="origin-grid">
          <article><b>监测范围</b><h3>从单条视频到负责垂类</h3><p>结合视频各项表现与垂类日常数据，判断优先关注哪里。供给、分发、涨粉保留原名称，具体口径在使用时明确。</p></article>
          <article><b>工具协作</b><h3>Excel 整理，AI 辅助</h3><p>使用 Excel 处理表格；也会先把分析逻辑梳理清楚，再交给 AI 辅助整理。不能把工具输出直接当作已经核验的结论。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('从监测到优化的工作流','A REUSABLE ROUTINE')}
        <p class="section-intro">监测、日环比和针对性优化来自实际做法；口径核对、结果抽查与归因记录是为后续复用补充的检查步骤。</p>
        <div class="method-step-list">
          ${[
            ['明确本次范围','确认关注哪个垂类、哪些指标，以及此次数据要支持什么判断。'],
            ['记录当日表现','保留日期、来源和截止时间，记录供给、分发、涨粉等实际监测项。'],
            ['计算日环比','与前一天比较，结合绝对变化看波动，不单看百分比。'],
            ['排查问题环节','回看具体内容和相关环节，区分已经观察到的变化与尚待验证的原因。'],
            ['针对性优化','围绕发现的问题调整，不为了指标波动同时改动所有环节。'],
            ['继续观察','记录优化后的表现与同期变化；没有充分证据时，不直接宣称优化导致增长。']
          ].map((s,i)=>'<article><b>0'+(i+1)+'</b><div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div></article>').join('')}
        </div>
      </section>
      <section class="content-section atlas-prompt section-observe">
        ${h('日环比是线索，不是原因','COMPARE WITH CONTEXT')}
        <div class="prompt-formula"><span>日环比</span><i>=</i><span>（当日值 − 前日值）÷ 前日值</span></div>
        <p>结果以百分比显示。比较前先确认相同范围、时间窗口与数据完整性。</p>
        <div class="case-evidence-grid">
          <article><h3>零值与缺失值分开处理</h3><p>前日为零时，不强算增长百分比；缺失数据标为待补齐，不能填零代替。</p></article>
          <article><h3>同时看绝对变化</h3><p>小基数可能产生很大的百分比变化；前日为负数时，单独解释数值含义，不直接用环比正负判断好坏。</p></article>
          <article><h3>单日波动不等于持续问题</h3><p>建议结合多日趋势与内容变化排查；本页不设置未经验证的通用异常阈值。</p></article>
          <article><h3>变化不自动证明因果</h3><p>优化后上涨也可能有其他影响因素。将原因写为待验证假设，保留证据和判断局限。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('先给逻辑，再让工具整理','EXCEL & AI COLLABORATION')}
        <p class="atlas-lead">先明确要算什么、怎么比较，再交给工具处理表格，而不是只要求 AI “帮我分析一下”。</p>
        <div class="origin-grid">
          <article><b>给工具的输入</b><h3>范围、字段与计算规则</h3><p>说明指标名称、日期范围、计算公式、缺失值处理和输出格式。涉及内部表格时，先确认授权并脱敏，不上传未经许可的业务明细。</p></article>
          <article><b>建议保留的人工检查</b><h3>抽查计算与解释</h3><p>抽查原始行与汇总结果，检查公式和分母；把事实、假设、建议分开，人工决定下一步动作。</p></article>
        </div>
      </section>
      <section class="content-section section-observe">
        ${h('把分析过程沉淀成记录','BLANK TEMPLATES')}
        <p class="section-intro">只提供空白模板。指标定义留待实际使用时填写，不包含百度内部数据或真实业务文件。</p>
        <div class="insight-template-grid">${templates.map((t,i)=>'<article><h3>'+t.title+'</h3><details><summary>预览模板</summary><pre>'+escape(t.text)+'</pre></details><div class="action-row"><button type="button" class="button" data-analysis-copy="'+i+'">复制模板</button><a class="button" href="src/assets/templates/'+t.file+'" download>下载 .md</a></div></article>').join('')}</div>
        <p id="analysis-copy-status" role="status" aria-live="polite"></p>
      </section>`;
    document.querySelectorAll('[data-analysis-copy]').forEach(button=>button.addEventListener('click',async()=>{
      const status=document.querySelector('#analysis-copy-status');
      try { await navigator.clipboard.writeText(templates[Number(button.dataset.analysisCopy)].text); status.textContent='模板已复制。'; }
      catch { status.textContent='无法自动复制，请展开预览手动复制，或下载模板。'; }
    }));
  };
})();
