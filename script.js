const projects = [
  {
    file: "REALSYNC.ai", size: "56 commits", year: "2026",
    title: "RealSync — AI-платформа для технических интервью",
    desc: "Симулятор собесов: Theory / Practice live-coding / Soft-skills + разбор резюме и GitHub + подбор вакансий HH.ru.",
    role: "ROLE: solo full-stack + DevOps · STACK: Go 1.22 · Python FastAPI · React 18 + TS · Docker Compose · PostgreSQL 16 · Redis · LLM-каскад",
    img: "assets/p1.svg",
    shots: [
      "assets/realsync/01-auth.png",
      "assets/realsync/02-dashboard.png",
      "assets/realsync/03-resume.png",
      "assets/realsync/04-livecoding.png",
      "assets/realsync/05-billing.png"
    ],
    shots_captions: [
      "01 — Auth: вход / регистрация + GitHub OAuth",
      "02 — Dashboard: 77 интервью, средняя 30/100, совпадение 92%",
      "03 — Resume Lab: парсинг PDF, готовность 68% Middle, оценка по факторам",
      "04 — Live-coding: Go-задача (sync.Mutex TTL-cache) + редактор Python",
      "05 — Billing: Trial 0 Br / Pro 65 Br, подписка PLATINUM"
    ],
    link: "https://github.com/BogdanSadovski/saou_nic",
    body: "// проблема — Готовиться к собесам негде: вопросы разрознены, live-coding отдельно, резюме никто не разбирает, а вакансии приходится искать вручную.<br><br>// решение — End-to-end платформа: чат-интервью с AI (3 режима), live-coding редактор, парсинг PDF/DOCX резюме, анализ GitHub-профиля, auto-подбор вакансий HH.ru, отчёт с PDF-экспортом, биллинг и админка.<br><br>ARCH: 12 микросервисов (api-gateway :8000, interview-service ~5500 LOC, ai-service, scoring, admin/billing) · Frontend: React+Vite, Zustand 8 stores · Infra: Docker Compose 14 сервисов — Postgres 16 (8 БД), Redis 7, Kafka, RabbitMQ, ClickHouse, MinIO, Prometheus+Grafana<br>AI: 4-уровневый LLM-каскад Groq → OpenRouter → DeepSeek → Cerebras (failover + round-robin, 1-2с ответ) · STAR-оценка soft-skills · семантическая дедупликация вопросов · per-turn verdicts correct/partial/wrong<br>METRICS: 15 страниц (Workspace, CareerCenter, Interview, Reports, Admin) · 9 AI-эндпоинтов · auth JWT+bcrypt+OAuth · i18n RU/EN · Light/Dark темы<br>STATUS: LIVE — open-source, диплом 2026 · <a href='https://github.com/BogdanSadovski/saou_nic' target='_blank' rel='noopener'>github.com/BogdanSadovski/saou_nic</a>"
  },
  {
    file: "ERRANTX.web", size: "6 screens", year: "2025",
    title: "ErrantX — криптотрекер с AI-аналитикой",
    desc: "Портфель 30k$ с диаграммой, топ-3 монет, AI-разбор на DeepSeek, налоговая аналитика.",
    role: "ROLE: solo full-stack · STACK: Vite + React · ASP.NET · PostgreSQL · Docker · DeepSeek API",
    img: "assets/errantx/02.png",
    shots: [
      "assets/errantx/02.png",
      "assets/errantx/03.png",
      "assets/errantx/06.png",
      "assets/errantx/04.png",
      "assets/errantx/01.png",
      "assets/errantx/05.png"
    ],
    shots_captions: [
      "01 — Dashboard: портфель 30556.49$, структура Bitcoin/Solana/Chainlink",
      "02 — Рынки: топ-3 рост/падение 24ч + динамика Bitcoin/Solana/Chainlink",
      "03 — AI Анализ: ввод портфеля → стоимость 26025.95$ + рекомендации",
      "04 — Налоги: курсы USDT (RUB/BYN/USD/EUR...), расчёт по РФ/РБ",
      "05 — Карточка монеты: Tether цена, % за час/день/неделю, капитализация",
      "06 — О приложении: дисклеймер, биржи Binance/Bybit, версия 1.0.0"
    ],
    link: "https://github.com/BogdanSadovski/ErrantX",
    body: "// проблема — Инвесторы держат активы в разных местах, не видят P/L, пропускают движения рынка и не понимают налоги.<br><br>// решение — Веб-приложение: дашборд с диаграммой и P/L по каждой монете, топ-3 роста/падения 24ч, графики 1ч/24ч/7д, AI-анализ портфеля с диверсификацией, курсы USDT и налоговый калькулятор РФ/РБ.<br><br>FEATURES: auth + активы + AI-анализ + налоговая + динамика по монетам<br>STATUS: LIVE — демо + код · <a href='https://github.com/BogdanSadovski/ErrantX' target='_blank' rel='noopener'>github.com/BogdanSadovski/ErrantX</a>"
  },
  {
    file: "DIETISTA.app", size: "3 screens", year: "2025",
    title: "Dietista — питание и вес (Avalonia)",
    desc: "Калькулятор калорий/БЖУ/ИМТ/воды, дневник питания, база продуктов, split-экран.",
    role: "ROLE: solo · STACK: C# · Avalonia UI · ASP.NET · SQLite",
    img: "assets/dietista/01.png",
    shots: [
      "assets/dietista/01.png",
      "assets/dietista/02.png",
      "assets/dietista/03.png"
    ],
    shots_captions: [
      "01 — Калькулятор: 2754 ккал, БЖУ 137/91/344, ИМТ 21, вода 2100 мл",
      "02 — Дневник: курица 300г → 1680 ккал, рацион 25.06 + итог БЖУ",
      "03 — Auth: тёмная тема, почта/пароль, регистрация"
    ],
    link: "https://github.com/BogdanSadovski/dutu-Avalonia",
    body: "// проблема — Считать норму и вести дневник в заметках неудобно, нет связки план-факт по БЖУ.<br><br>// решение — Десктоп на Avalonia: слайдеры пол/вес/рост/возраст/активность → норма калорий, БЖУ, ИМТ, вода; дневник с базой продуктов и итогами дня; split-экран для параллельного просмотра.<br><br>FEATURES: калькулятор + дневник + БД продуктов + отчёты<br>STATUS: LIVE — код открыт · <a href='https://github.com/BogdanSadovski/dutu-Avalonia' target='_blank' rel='noopener'>github.com/BogdanSadovski/dutu-Avalonia</a>"
  }
];

const list = document.getElementById('project-list');
const detail = document.getElementById('detail-block');
const cmd = document.getElementById('cmd');
const echo = document.getElementById('echo');
let sel = 0;

function renderList(){
  list.innerHTML = '';
  projects.forEach((p,i)=>{
    const d = document.createElement('div');
    d.className = 'row' + (i===sel ? ' sel' : '');
    d.innerHTML = `<span class="name">${p.file}</span><span>${p.size}</span><span>${p.year}</span><span>${p.desc}</span>
      <div class="desc-full">${p.role}<br>$ cat ${p.file}</div>`;
    d.onclick = ()=>{
      openProject(i);
    };
    list.appendChild(d);
  });
}

function openProject(i){
  sel = i;
  const p = projects[i];
renderList();

// плавное появление блоков при скролле
if('IntersectionObserver' in window){
  const io = new IntersectionObserver(es=>{
    es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('vis'); io.unobserve(en.target); } });
  },{threshold:.08});
  document.querySelectorAll('.block').forEach(b=>{ b.classList.add('reveal'); io.observe(b); });
}
  detail.classList.remove('hidden');
  const gallery = (p.shots || [p.img]).map((s, idx) => {
    const cap = (p.shots_captions && p.shots_captions[idx]) ? p.shots_captions[idx] : `${p.title} — скрин ${idx+1}`;
    return `<figure class="shot-wrap"><img class="shot" src="${s}" alt="${cap}" loading="lazy" onerror="this.closest('figure').style.display='none'"><figcaption class="dim">${cap}</figcaption></figure>`;
  }).join('');
  detail.innerHTML = `<div class="detail">
    <div class="back" onclick="closeDetail()">← back /projects/</div>
    <h2>0${i+1} / 0${projects.length} — ${p.title}</h2>
    <div class="dim">${p.file} · ${p.year} · ${p.size}</div>
    <div class="gallery">${gallery}</div>
    <p>${p.desc}</p>
    <p class="dim">${p.role}</p>
    <p>${p.body}</p>
    ${p.link ? `<p><a href="${p.link}" target="_blank" rel="noopener">↗ GitHub: ${p.link.replace('https://','')}</a></p>` : ''}
    <div class="back" onclick="closeDetail()">← back</div>
  </div>`;
  detail.scrollIntoView({behavior:'smooth'});
  echo.textContent = 'open ' + (i+1);
}
function closeDetail(){
  detail.classList.add('hidden');
  document.getElementById('projects-block').scrollIntoView({behavior:'smooth'});
}
window.closeDetail = closeDetail;

cmd.addEventListener('keydown', e=>{
  if(e.key !== 'Enter') return;
  const v = cmd.value.trim().toLowerCase();
  echo.textContent = cmd.value;
  if(v==='help') alert('команды: whoami · ls · open 1/2/3 · skills · contact · clear');
  else if(v==='ls') document.getElementById('projects-block').scrollIntoView({behavior:'smooth'});
  else if(v.startsWith('open')){
    const n = parseInt(v.split(' ')[1]) - 1;
    if(projects[n]) openProject(n); else alert('нет такого проекта, есть 1-3');
  }
  else if(v==='whoami'||v==='about') window.scrollTo({top:0,behavior:'smooth'});
  else if(v==='skills') alert('Linux · Bash · Сети/VLAN · AWS · Terraform · Ansible · Docker · Nginx · PostgreSQL/DBeaver · Git · C#/.NET/EF · Python · LLM API/MCP');
  else if(v==='contact') alert('Telegram @bogdan_ftl (предп. способ) · +375 33 3902655 · bogdan.minsk@icloud.com · GitHub github.com/BogdanSadovski');
  else if(v==='clear'){ closeDetail(); echo.textContent=''; }
  cmd.value='';
});

// ↑↓ — выбор, Enter — открыть, Esc — назад
document.addEventListener('keydown', e=>{
  if(document.activeElement === cmd) return;
  if(e.key==='ArrowDown'){ e.preventDefault(); sel = Math.min(sel+1, projects.length-1); renderList(); }
  if(e.key==='ArrowUp'){ e.preventDefault(); sel = Math.max(sel-1, 0); renderList(); }
  if(e.key==='Enter' && detail.classList.contains('hidden')){ openProject(sel); }
  if(e.key==='Escape'){ closeDetail(); }
});

// часы uptime
const t0 = Date.now();
setInterval(()=>{
  const s = Math.floor((Date.now()-t0)/1000);
  const h = String(Math.floor(s/3600)).padStart(2,'0');
  const m = String(Math.floor(s%3600/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  document.getElementById('clock').textContent = 'UPTIME: '+h+':'+m+':'+ss;
},1000);

renderList();
