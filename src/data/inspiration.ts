export type Category =
  | 'headings' | 'buttons' | 'cards' | 'navigation'
  | 'hero' | 'footers' | 'forms' | 'tables' | 'animations' | 'other';

export interface InspirationItem {
  id: string;
  title: string;
  category: Category;
  sourceUrl: string;
  sourceName: string;
  /* Live preview — rendered in sandboxed iframe */
  html: string;
  css: string;
  notes: string;
  tags: string[];
  savedAt: string;
}

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'headings', label: 'Headings' },
  { key: 'buttons', label: 'Buttons' },
  { key: 'cards', label: 'Cards' },
  { key: 'navigation', label: 'Navigation' },
  { key: 'hero', label: 'Hero' },
  { key: 'footers', label: 'Footers' },
  { key: 'forms', label: 'Forms' },
  { key: 'tables', label: 'Tables' },
  { key: 'animations', label: 'Animations' },
  { key: 'other', label: 'Other' },
];

/* ── 示例：展示格式 ── */
export const inspirationItems: InspirationItem[] = [
  {
    id: "stripe-button",
    title: "Stripe Gradient Button",
    category: "buttons",
    sourceUrl: "https://stripe.com",
    sourceName: "Stripe",
    html: `<button>Get Started →</button>`,
    css: `
      button {
        background: linear-gradient(135deg, #635BFF 0%, #4F3FF5 100%);
        color: white;
        border: none;
        padding: 12px 28px;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 600;
        font-family: -apple-system, sans-serif;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 8px rgba(99,91,255,0.3);
      }
      button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(99,91,255,0.45);
      }
    `,
    notes: "渐变 + 微阴影 + hover 上移 2px，手感极好。适合 CTA 场景。",
    tags: ["渐变", "hover", "SaaS", "CTA"],
    savedAt: "2026-07-06",
  },

  // ── Hero 大标题（来自 3D Portfolio）──
  {
    id: "hero-gradient-heading",
    title: "Gradient Hero Heading",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `<h1>Hi, We're ANDREAM</h1>`,
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
      body { background: #111; }
      h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: clamp(3rem, 16vw, 17.5vw);
        text-transform: uppercase;
        letter-spacing: -0.02em;
        line-height: 0.9;
        white-space: nowrap;
        background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `,
    notes: "全屏大标题用 Playfair Display 900 + silver gradient text。字号用 vw 单位随屏幕缩放，白色到浅灰蓝的纵向渐变。适合 Hero 区的品牌宣言。",
    tags: ["Hero", "Playfair Display", "gradient text", "vw sizing", "typography"],
    savedAt: "2026-07-06",
  },

  // ── Contact 按钮（来自 3D Portfolio）──
  {
    id: "gradient-pill-button",
    title: "Gradient Pill CTA Button",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `<button>Contact Us</button>`,
    css: `
      body { background: #111; display: flex; align-items: center; justify-content: center; }
      button {
        position: relative; padding: 12px 48px; border: none; border-radius: 999px;
        font-size: 14px; font-weight: 500; font-family: -apple-system, sans-serif;
        text-transform: uppercase; letter-spacing: 0.15em; color: white; cursor: pointer;
        background: linear-gradient(123deg, #18011F 7%, #254E7A 37%, #4A78B0 72%, #1A1A1A 100%);
        box-shadow: 0px 4px 4px rgba(37,78,122,0.25), inset 4px 4px 12px #254E7A;
        outline: 2px solid white; outline-offset: -3px;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
      button:hover { opacity: 0.85; transform: scale(1.03); }
    `,
    notes: "渐变背景（深紫→靛蓝→浅蓝→深灰）+ 内阴影发光 + 白色双层描边（outline + offset）。层次感极强，适合主 CTA。可替换渐变色标适配品牌。",
    tags: ["CTA", "gradient", "pill button", "outline", "inner shadow"],
    savedAt: "2026-07-06",
  },

  // ── 逐字滚动渐显（来自 3D Portfolio · About 区块）──
  {
    id: "scroll-character-reveal",
    title: "Scroll Character Reveal",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `<p id="r">With more than five years of experience in design, we focus on branding, web design, and AI‑powered experiences.</p>
    <script>
    (function(){
      const p=document.getElementById('r'),t=p.textContent;
      p.textContent='';
      t.split('').forEach((c,i)=>{
        const s=document.createElement('span');
        s.textContent=c;s.style.opacity='0.2';
        p.appendChild(s);
      });
      const spans=p.querySelectorAll('span');
      let dir=1,i=0;
      function step(){
        if(i>=spans.length){dir=-1;setTimeout(step,800);return}
        if(i<0){dir=1;setTimeout(step,500);return}
        spans[i].style.opacity='1';
        i+=dir;
        setTimeout(step,30);
      }
      step();
    })();
    </script>`,
    css: `
      body { background: #111; color: #D7E2EA; font-family: -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; padding: 24px; }
      p { font-size: clamp(0.85rem, 1.8vw, 1.2rem); font-weight: 500; text-align: center; line-height: 1.7; max-width: 560px; }
      p span { transition: opacity 0.3s ease; }
    `,
    notes: "实时页面用 Framer Motion useScroll：每个字符的 opacity 从 0.2 → 1，映射到滚动进度。这里用 JS 循环模拟：正向逐字点亮 → 全部亮起后反向熄灭 → 循环。适合 About / 介绍段落。",
    tags: ["scroll-driven", "character animation", "opacity", "fade in", "Framer Motion"],
    savedAt: "2026-07-06",
  },

  // ── Services 圆角卡片排版（来自 3D Portfolio）──
  {
    id: "services-numbered-list",
    title: "Numbered Service List",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `
    <section>
      <h2>Services</h2>
      <div class="list">
        <div class="item"><span class="num">01</span><div><h3>AI-Powered Design</h3><p>Leveraging artificial intelligence to create stunning visuals.</p></div></div>
        <div class="item"><span class="num">02</span><div><h3>Brand Identity</h3><p>Crafting cohesive visual identities from logos to full brand systems.</p></div></div>
        <div class="item"><span class="num">03</span><div><h3>Web & App Design</h3><p>Clean, modern, conversion-focused websites and applications.</p></div></div>
      </div>
    </section>`,
    css: `
      body { background: #FAFAF8; font-family: -apple-system, sans-serif; }
      section {
        background: #fff;
        border-radius: 30px 30px 0 0;
        padding: 40px 20px;
        max-width: 500px;
      }
      h2 {
        font-family: 'Georgia', serif;
        font-weight: 900;
        font-size: clamp(2.5rem, 8vw, 80px);
        text-transform: uppercase;
        text-align: center;
        color: #111;
        margin-bottom: 40px;
      }
      .list { display: flex; flex-direction: column; }
      .item {
        display: flex;
        gap: 24px;
        align-items: flex-start;
        padding: 24px 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .num {
        font-family: 'Georgia', serif;
        font-weight: 900;
        font-size: clamp(2.5rem, 8vw, 80px);
        color: #111;
        line-height: 0.8;
        flex-shrink: 0;
      }
      h3 {
        font-weight: 500;
        text-transform: uppercase;
        font-size: clamp(0.9rem, 1.6vw, 1.2rem);
        color: #111;
        margin-bottom: 4px;
      }
      p {
        font-weight: 300;
        color: rgba(0,0,0,0.6);
        font-size: clamp(0.75rem, 1.2vw, 0.95rem);
        line-height: 1.5;
        max-width: 400px;
      }
    `,
    notes: "白底圆角卡片（rounded top）+ 大数字编号 + 服务名 + 描述。Playfair 数字 + 无衬线正文的混搭。分隔线用 10% 黑色。每个 item 依次 FadeIn，delay 递增 0.1s。黑白交替区块过渡：上方深色 → 这里白色圆角顶部。",
    tags: ["layout", "numbered list", "rounded corners", "Playfair Display", "staggered fade"],
    savedAt: "2026-07-06",
  },

  // ── Projects 卡片堆叠（来自 3D Portfolio）──
  {
    id: "sticky-stacking-cards",
    title: "Sticky Stacking Cards",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `
    <div class="stack">
      <div class="card c3">03<span>Solaris Digital</span></div>
      <div class="card c2">02<span>Aura Brand</span></div>
      <div class="card c1">01<span>Nextlevel Studio</span></div>
    </div>
    <script>
    (function(){
      const cards=document.querySelectorAll('.card');
      let step=0;
      function cycle(){
        cards.forEach((c,i)=>{
          const offset=(step+i)%3;
          c.style.transform='scale('+(1-offset*0.03)+') translateY('+(-offset*8)+'px)';
          c.style.zIndex=3-offset;
          c.style.opacity=offset===2?'0.7':'1';
        });
        step=(step+1)%3;
        setTimeout(cycle,2000);
      }
      cycle();
    })();
    </script>`,
    css: `
      body { background: #111; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .stack { position: relative; width: 280px; height: 200px; }
      .card {
        position: absolute; inset: 0;
        background: #111; border: 2px solid #D7E2EA;
        border-radius: 30px; padding: 20px;
        display: flex; flex-direction: column; gap: 8px;
        color: #D7E2EA; font-weight: 900; font-size: clamp(2rem, 6vw, 3rem);
        font-family: 'Georgia', serif;
        transition: transform 0.7s cubic-bezier(0.25,0.1,0.25,1), opacity 0.7s ease;
      }
      .card span { font-size: 14px; font-weight: 400; font-family: -apple-system, sans-serif; text-transform: uppercase; color: rgba(215,226,234,0.7); }
    `,
    notes: "3 张卡片 sticky 堆叠，滚动时逐层缩小（scale = 1 - (totalCards-1-index) * 0.03）。每层 offset 28px。Framer Motion useScroll + useTransform 驱动。这里用 JS 循环模拟缩放切换。深色背景 + 2px 浅灰蓝描边 + 60px 大圆角。",
    tags: ["sticky", "stacking cards", "scroll-driven", "scale transform", "Framer Motion"],
    savedAt: "2026-07-06",
  },

  // ── Marquee 双排横滚（来自 3D Portfolio）──
  {
    id: "dual-marquee-scroll",
    title: "Dual Marquee Scroll",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `
    <div class="marquee">
      <div class="row r1"><div class="tile">01</div><div class="tile">02</div><div class="tile">03</div><div class="tile">04</div><div class="tile">05</div><div class="tile">06</div></div>
      <div class="row r2"><div class="tile">A</div><div class="tile">B</div><div class="tile">C</div><div class="tile">D</div><div class="tile">E</div><div class="tile">F</div></div>
    </div>
    <script>
    (function(){
      const r1=document.querySelector('.r1'),r2=document.querySelector('.r2');
      let t=0;
      function loop(){
        t+=0.3;
        r1.style.transform='translateX('+(t%600)+'px)';
        r2.style.transform='translateX('+(-t%600)+'px)';
        requestAnimationFrame(loop);
      }
      loop();
    })();
    </script>`,
    css: `
      body { background: #111; display: flex; align-items: center; justify-content: center; overflow: hidden; }
      .marquee { display: flex; flex-direction: column; gap: 8px; width: 100%; }
      .row { display: flex; gap: 8px; width: max-content; will-change: transform; }
      .tile {
        width: 140px; height: 90px; border-radius: 12px; flex-shrink: 0;
        background: linear-gradient(135deg, #1a1a2e, #254E7A);
        display: flex; align-items: center; justify-content: center;
        color: rgba(255,255,255,0.6); font-family: 'Georgia', serif;
        font-size: 24px; font-weight: 900;
      }
    `,
    notes: "两排图片/卡片水平无限滚动，上排右移、下排左移。速度由 window.scrollY 驱动（offset = (scrollY - sectionTop + innerHeight) * 0.3），形成视差横滚效果。每排图片 tripled 实现无缝循环。适合作品集/项目展示。",
    tags: ["marquee", "scroll-driven", "parallax", "horizontal scroll", "gallery"],
    savedAt: "2026-07-06",
  },

  // ── 文字翻转按钮（来自 Modern Agency）──
  {
    id: "text-roll-button",
    title: "Text Roll Hover Button",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/modern-agency",
    sourceName: "Modern Agency · AndDream",
    html: `<button id="btn"><span class="roll"><span>Start a project</span><span>Start a project</span></span><span class="arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></button>`,
    css: `
      body { background: #EFEFEF; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      button {
        display: flex; align-items: center; gap: 8px;
        background: #254E7A; color: white; border: none;
        border-radius: 999px; padding: 8px 8px 8px 24px;
        font-size: 13px; font-weight: 500; cursor: pointer;
        transition: background 0.5s cubic-bezier(0.25,0.1,0.25,1);
      }
      button:hover { background: #1a3d5e; }
      .roll { display: flex; flex-direction: column; height: 20px; overflow: hidden; }
      .roll span { display: block; line-height: 20px; transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1); }
      button:hover .roll span { transform: translateY(-50%); }
      .arrow {
        width: 28px; height: 28px; background: white; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        color: #254E7A; transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1);
      }
      button:hover .arrow { transform: rotate(-45deg); }
    `,
    notes: "Hover 时文字向上翻滚（translateY -50%）+ 箭头旋转 -45°。用 flex-col + overflow-hidden + duplicate text 实现。缓动曲线 cubic-bezier(0.25,0.1,0.25,1) 比默认 ease 更干脆。",
    tags: ["hover", "text roll", "rotate arrow", "pill button", "cubic-bezier"],
    savedAt: "2026-07-06",
  },

  // ── 实时时钟（来自 Modern Agency）──
  {
    id: "live-clock-navbar",
    title: "Live Clock in Navbar",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/modern-agency",
    sourceName: "Modern Agency · AndDream",
    html: `<div class="nav"><div class="logo">AD</div><div class="time"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span id="clock">14:32 in London</span></div></div><script>setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false})+' in Beijing'},1000)</script>`,
    css: `
      body { background: #EFEFEF; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .nav {
        display: flex; align-items: center; justify-content: space-between;
        background: white; border-radius: 999px; padding: 8px 20px;
        gap: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      }
      .logo {
        width: 36px; height: 36px; background: #111; color: white; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 10px; font-weight: 700; letter-spacing: -0.02em;
      }
      .time {
        display: flex; align-items: center; gap: 6px;
        font-size: 13px; color: #555; font-variant-numeric: tabular-nums;
      }
    `,
    notes: "导航栏右侧显示实时时钟（北京时区），每秒更新。用 setInterval + toLocaleTimeString，带 Clock 图标。药丸形白色 navbar 容器。适合 Agency 类网站增加全球感。",
    tags: ["live clock", "navbar", "timezone", "pill shape", "setInterval"],
    savedAt: "2026-07-06",
  },

  // ── 移动端抽屉菜单（来自 Modern Agency）──
  {
    id: "mobile-drawer-menu",
    title: "Mobile Bottom Drawer Menu",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/modern-agency",
    sourceName: "Modern Agency · AndDream",
    html: `<button class="toggle-btn" id="toggle">Close</button><div class="overlay open" id="overlay"><div class="sheet"><div class="time-row"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>22:15 in Beijing</span></div><a>Projects</a><a>Studio</a><a>Journal</a><a>Connect</a><button>Start a project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div></div><script>const btn=document.getElementById('toggle'),overlay=document.getElementById('overlay');let open=true;btn.onclick=()=>{open=!open;overlay.classList.toggle('open',open);overlay.classList.toggle('closed',!open);btn.textContent=open?'Close':'Menu'};overlay.onclick=(e)=>{if(e.target===overlay){open=false;overlay.classList.remove('open');overlay.classList.add('closed');btn.textContent='Menu'}}</script>`,
    css: `
      body { background: #EFEFEF; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .toggle-btn { background: #111; color: white; border: none; border-radius: 999px; padding: 10px 20px; font-size: 13px; cursor: pointer; position: relative; z-index: 60; }
      .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: flex-end; justify-content: center; z-index: 50; font-family: -apple-system, sans-serif; transition: opacity 0.5s cubic-bezier(0.32,0.72,0,1); }
      .overlay.closed { opacity: 0; pointer-events: none; }
      .overlay.closed .sheet { transform: translateY(100%); }
      .sheet { background: white; border-radius: 16px 16px 0 0; margin: 0 12px 12px; padding: 24px; width: 100%; display: flex; flex-direction: column; gap: 16px; transition: transform 0.5s cubic-bezier(0.32,0.72,0,1); }
      .time-row { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #555; margin-bottom: 8px; }
      .sheet a { font-size: 28px; font-weight: 500; color: #111; text-decoration: none; }
      .sheet button { display: flex; align-items: center; justify-content: space-between; background: #254E7A; color: white; border: none; border-radius: 999px; padding: 12px 24px; font-size: 14px; margin-top: 8px; cursor: pointer; }
    `,
    notes: "手机端菜单：点 Menu → 黑色遮罩落下 + 白色面板从底部滑上来。动画用 CSS transition（translateY 0→100%）+ opacity，缓动 cubic-bezier(0.32,0.72,0,1)。点遮罩空白处也能关闭。桌面端看不到这个（md:hidden），只在手机端出现。",
    tags: ["mobile", "drawer", "bottom sheet", "slide up", "overlay"],
    savedAt: "2026-07-06",
  },

  // ── Liquid Glass 卡片（来自 Email Landing）──
  {
    id: "liquid-glass-card",
    title: "Liquid Glass Card",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="glass-card"><h3>Priority</h3><p>4 messages · Sophia Chen, David Lim</p></div>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .glass-card {
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        border-radius: 16px; padding: 24px; width: 280px;
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
      }
      .glass-card::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit;
        padding: 1.4px;
        background: linear-gradient(180deg,
          rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
          rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
          rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude;
        pointer-events: none;
      }
      h3 { color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 600; margin-bottom: 8px; position: relative; }
      p { color: rgba(255,255,255,0.4); font-size: 12px; position: relative; }
    `,
    notes: "毛玻璃卡片：极低透明度背景 + backdrop-blur + 渐变边框伪元素（上亮→中透明→下亮）。mask-composite: exclude 让边框只显示在边缘，不覆盖内部。适合暗色背景上的卡片、弹窗、面板。深色底上才有'发光玻璃'质感。",
    tags: ["glassmorphism", "backdrop-blur", "gradient border", "mask-composite", "dark theme"],
    savedAt: "2026-07-07",
  },

  // ── 闪光渐变文字（来自 Email Landing）──
  {
    id: "shiny-gradient-text",
    title: "Shiny Gradient Text",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<h1>Reinvented</h1>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: 'Georgia', serif; }
      h1 {
        font-size: 80px; font-weight: 700;
        background-image: linear-gradient(to right,
          #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%,
          #4A78B0 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%);
        background-size: 200% auto;
        -webkit-background-clip: text; background-clip: text;
        color: transparent;
        animation: shiny 6s linear infinite;
      }
      @keyframes shiny {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
    `,
    notes: "高光从左到右扫过文字的动画。原理：background-size: 200% + background-clip: text + @keyframes 移动 background-position。渐变色标：深蓝→亮青→靛蓝→深蓝，中间亮两边暗。适合 Hero 大标题，替代静态渐变的动感升级版。",
    tags: ["shiny", "gradient text", "keyframes", "background-clip", "headline"],
    savedAt: "2026-07-07",
  },

  // ── 全屏背景视频（来自 Email Landing）──
  {
    id: "fullscreen-bg-video",
    title: "Fullscreen Background Video",
    category: "hero",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="video-bg"></div><div class="content"><h2>Your inbox,<br/>Reinvented</h2><p>Premium email for the AI era.</p><button>Download</button></div>`,
    css: `
      body { margin: 0; background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; color: white; position: relative; overflow: hidden; }
      .video-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #0c0c0c 100%); opacity: 0.6; }
      /* 线上用 <video autoPlay loop muted> 替换这个 div */
      .content { position: relative; z-index: 10; text-align: center; padding: 40px; }
      h2 { font-size: 48px; font-weight: 700; line-height: 1.05; margin-bottom: 12px; }
      p { color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 24px; }
      button { background: white; color: black; border: none; border-radius: 999px; padding: 12px 28px; font-size: 14px; font-weight: 500; cursor: pointer; }
    `,
    notes: "全屏固定背景视频：fixed inset-0 + z-0 + pointer-events-none + opacity 30%。视频用 CloudFront CDN 托管（.mp4，autoPlay loop muted playsInline）。上方所有内容 z-10 relative。适合 Hero 区增加电影感。视频来源：自行拍摄或用 coverr.co 等免费素材站。",
    tags: ["video background", "fullscreen", "cinematic", "fixed position", "hero"],
    savedAt: "2026-07-07",
  },

  // ── Apple 风格下载按钮（来自 Email Landing）──
  {
    id: "apple-download-button",
    title: "Apple-Style Download Button",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<button><svg viewBox="0 0 384 512" fill="currentColor" width="16" height="16"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9z"/></svg>Download ANDREAM<span class="chevron">›</span></button>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      button {
        display: inline-flex; align-items: center; gap: 8px;
        background: white; color: black; border: none;
        border-radius: 999px; padding: 12px 20px;
        font-size: 14px; font-weight: 500; cursor: pointer;
        transition: all 0.2s ease;
      }
      button:hover { background: rgba(255,255,255,0.9); }
      button:active { transform: scale(0.98); }
      .chevron { font-size: 18px; margin-left: auto; transition: transform 0.2s ease; }
      button:hover .chevron { transform: translateX(1px); }
    `,
    notes: "Apple 官网风格的白底黑字圆角按钮。Apple Logo SVG + 文字 + 右箭头。hover 时箭头右移 1px，active 时整体缩放到 0.98。简洁克制，高级感来自极小的细节变化。适合产品下载 CTA。",
    tags: ["Apple style", "pill button", "download CTA", "subtle animation", "logo SVG"],
    savedAt: "2026-07-07",
  },

  // ── Monthly/Yearly 切换按钮（来自 Email Landing）──
  {
    id: "pricing-toggle-switch",
    title: "Pricing Toggle Switch",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="toggle-row"><span class="active">Monthly</span><button id="sw"><div class="knob"></div></button><span>Yearly</span></div><script>const btn=document.getElementById('sw'),knob=btn.querySelector('.knob');let y=true;btn.onclick=()=>{y=!y;btn.classList.toggle('on',y);knob.classList.toggle('on',y);btn.previousElementSibling.classList.toggle('active',!y);btn.nextElementSibling.classList.toggle('active',y)}</script>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .toggle-row { display: flex; align-items: center; gap: 16px; color: white; }
      .toggle-row span { font-size: 14px; color: rgba(255,255,255,0.4); transition: color 0.3s; }
      .toggle-row span.active { color: white; }
      button {
        width: 48px; height: 24px; border-radius: 12px; border: none;
        background: #4A78B0; cursor: pointer; position: relative;
        transition: background 0.3s;
      }
      button:not(.on) { background: rgba(255,255,255,0.2); }
      .knob {
        width: 20px; height: 20px; background: white; border-radius: 50%;
        position: absolute; top: 2px; left: 2px;
        transition: transform 0.3s cubic-bezier(0.25,0.1,0.25,1);
      }
      .knob.on { transform: translateX(24px); }
    `,
    notes: "Monthly / Yearly 切换滑块。白色圆点 + 靛蓝背景（选中态）→ 灰色（未选中）。圆点 translateX 24px 平滑滑动，文字颜色同步切换。适合定价页。关键是 active 态使用品牌色，非 active 态使用低透明度白色。",
    tags: ["toggle", "pricing", "switch", "slider", "monthly yearly"],
    savedAt: "2026-07-07",
  },

  // ── 定价卡片排版（来自 Email Landing）──
  {
    id: "pricing-card-layout",
    title: "Pricing Card Layout",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="card"><span class="tier">Standard</span><span class="price">$99.99/y</span><p class="desc">For freelancers and small teams.</p><ul><li><span class="check">✓</span>Up to 50 projects</li><li><span class="check">✓</span>Export up to 4K</li><li><span class="check">✓</span>Advanced editing toolkit</li><li><span class="check">✓</span>Team collaboration (5)</li><li><span class="check">✓</span>Premium templates</li></ul><button>Choose Plan</button></div>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .card {
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        border-radius: 16px; padding: 32px; width: 300px;
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
        display: flex; flex-direction: column;
        border: 1px solid rgba(74,120,176,0.4);
      }
      .card::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      .tier { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 8px; position: relative; }
      .price { font-family: 'Georgia', serif; font-size: 36px; font-weight: 700; color: white; margin-bottom: 4px; position: relative; }
      .desc { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 24px; position: relative; }
      ul { list-style: none; padding: 0; margin: 0 0 24px; flex: 1; position: relative; }
      li { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,0.6); padding: 4px 0; }
      .check { width: 16px; height: 16px; border-radius: 50%; background: rgba(74,120,176,0.2); display: flex; align-items: center; justify-content: center; font-size: 10px; color: #4A78B0; font-weight: 700; flex-shrink: 0; }
      button { width: 100%; padding: 12px; border-radius: 999px; border: none; background: #4A78B0; color: white; font-size: 14px; font-weight: 500; cursor: pointer; position: relative; transition: background 0.2s; }
      button:hover { background: #3a6390; }
    `,
    notes: "定价卡片：liquid-glass 底 + 靛蓝 ring 边框（推荐计划高亮）。tier 标签（小号大写）→ 大号衬线价格 → 描述 → 功能列表（圆形 check 图标）→ 全宽 CTA 按钮。3 列 grid，中间列加 ring 突出推荐。价格字体用 Georgia/Playfair Display 等衬线体与正文形成对比。",
    tags: ["pricing", "glass card", "ring border", "check list", "tier layout"],
    savedAt: "2026-07-07",
  },

  // ── 用户评价卡片（来自 Email Landing）──
  {
    id: "testimonial-glass-card",
    title: "Testimonial Glass Card",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<figure class="card"><blockquote>"ANDREAM gave our leadership team four hours of their week back. It reads like email from the future."</blockquote><figcaption><p class="name">Parker Wilf</p><p class="role">Group Product Manager</p><p class="company">MERCURY</p></figcaption></figure>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .card {
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        border-radius: 16px; padding: 24px; width: 300px;
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
      }
      .card::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      blockquote { font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0; position: relative; }
      figcaption { margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); position: relative; }
      .name { font-size: 14px; font-weight: 600; color: white; }
      .role { font-size: 12px; color: rgba(255,255,255,0.5); }
      .company { font-size: 12px; font-weight: 600; color: white; letter-spacing: 0.05em; margin-top: 4px; text-transform: uppercase; }
    `,
    notes: "用户评价卡片：blockquote 引用 + 底部分隔线 + 姓名/职位/公司三层信息。公司名大写 + 加粗 + tracking 增加权威感。liquid-glass 背景 + 渐变边框。适合 3 列网格布局。",
    tags: ["testimonial", "blockquote", "glass card", "social proof", "review"],
    savedAt: "2026-07-07",
  },

  // ── 毛玻璃标签（来自 Email Landing）──
  {
    id: "glass-feature-chips",
    title: "Glass Feature Chips",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="chips"><span>Auto-categorize</span><span>Snooze for later</span><span>Silent newsletters</span><span>One-tap unsubscribe</span></div>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
      span {
        padding: 6px 12px; border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.03); backdrop-filter: blur(4px);
        font-size: 12px; color: rgba(255,255,255,0.7);
        transition: all 0.2s ease; cursor: default;
      }
      span:hover { border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.06); color: white; }
    `,
    notes: "毛玻璃功能标签：极低透明度背景 + backdrop-blur + 1px 半透明边框 + 圆角 pill。hover 时边框变亮、文字变白。适合功能列表、筛选标签、分类展示。不需要实色背景，靠 blur + border 在暗色底上营造玻璃感。",
    tags: ["chips", "pill", "glass", "feature tags", "backdrop-blur"],
    savedAt: "2026-07-07",
  },

  // ── Pill 按钮（来自 USD Halo）──
  {
    id: "pill-button-arrow-circle",
    title: "Pill Button with Arrow Circle",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/halo-usd-landing",
    sourceName: "USD Halo · AndDream",
    html: `<button>Join us<span class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></button>`,
    css: `
      body { background: #F5F5F5; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      button {
        display: inline-flex; align-items: center; gap: 12px;
        background: black; color: white; border: none;
        border-radius: 999px; padding: 8px 8px 8px 32px;
        font-size: 16px; font-weight: 500; cursor: pointer;
        transition: background 0.2s;
      }
      button:hover { background: #333; }
      .arrow {
        width: 36px; height: 36px; background: white; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        color: black;
      }
    `,
    notes: "极简 Pill 按钮：纯黑背景 + 白色文字 + 尾部白色圆形箭头。左文字右圆圈的经典组合，对比强烈。padding 不对称（左 32px 右 8px）让圆形完整露出。hover 时整体变灰。适合 Hero CTA 或主要行动按钮。",
    tags: ["pill button", "arrow circle", "black white", "CTA", "minimal"],
    savedAt: "2026-07-07",
  },

  // ── 品牌横滚文字（来自 USD Halo）──
  {
    id: "typographic-marquee",
    title: "Typographic Brand Marquee",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/halo-usd-landing",
    sourceName: "USD Halo · AndDream",
    html: `<div class="track"><span class="s1">Stripe</span><span class="s2">COINBASE</span><span class="s3">Uniswap</span><span class="s4">AAVE</span><span class="s5">Compound</span><span class="s6">MAKERDAO</span><span class="s7">Chainlink</span><span class="s1">Stripe</span><span class="s2">COINBASE</span><span class="s3">Uniswap</span><span class="s4">AAVE</span></div>`,
    css: `
      body { background: #F5F5F5; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; overflow: hidden; }
      @keyframes mq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .track { display: flex; width: max-content; animation: mq 22s linear infinite; }
      .track span { margin: 0 28px; white-space: nowrap; color: rgba(0,0,0,0.6); flex-shrink: 0; }
      .s1 { font-family: Georgia, serif; font-weight: 700; letter-spacing: -0.02em; font-size: 15px; }
      .s2 { font-family: Arial, sans-serif; font-weight: 900; letter-spacing: 0.08em; font-size: 13px; text-transform: uppercase; }
      .s3 { font-family: Trebuchet MS, sans-serif; font-weight: 600; letter-spacing: 0.01em; font-size: 15px; font-style: italic; }
      .s4 { font-family: Courier New, monospace; font-weight: 700; letter-spacing: 0.12em; font-size: 13px; text-transform: uppercase; }
      .s5 { font-family: Palatino, serif; font-weight: 400; letter-spacing: -0.01em; font-size: 16px; }
      .s6 { font-family: Impact, sans-serif; font-weight: 400; letter-spacing: 0.04em; font-size: 14px; }
      .s7 { font-family: Verdana, sans-serif; font-weight: 700; letter-spacing: -0.03em; font-size: 13px; }
    `,
    notes: "品牌横滚：每个品牌用不同字体（Georgia / Arial / Courier / Impact / Verdana…），字重、字间距、大小、大小写各不相同。通过差异化 typography 让横滚看起来像'杂志排版'。duplicate 列表实现无缝循环。22s 循环速度。",
    tags: ["marquee", "typography", "brand", "font mix", "horizontal scroll"],
    savedAt: "2026-07-07",
  },

  // ── 逐词弹入动画（来自 Prisma Studio）──
  {
    id: "word-pullup-animation",
    title: "Word Pull-Up Animation",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="lines"><div class="l1"><span>S</span><span>t</span><span>u</span><span>d</span><span>i</span><span>o</span><span>-</span><span>g</span><span>r</span><span>a</span><span>d</span><span>e</span></div><div class="l2"><span>w</span><span>o</span><span>r</span><span>k</span><span>f</span><span>l</span><span>o</span><span>w</span><span>s</span></div><div class="l3"><span>f</span><span>o</span><span>r</span></div><div class="l4"><span>v</span><span>i</span><span>s</span><span>i</span><span>o</span><span>n</span><span>a</span><span>r</span><span>y</span></div></div><script>(function(){document.querySelectorAll('.lines span').forEach((s,i)=>{s.style.animationDelay=(i*0.08)+'s';s.classList.add('in')})})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 20px; }
      .lines { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 10px; max-width: 600px; text-align: center; }
      .lines div { display: flex; flex-wrap: wrap; justify-content: center; }
      .l1 span, .l3 span, .l4 span { color: #E1E0CC; font-size: clamp(24px, 4vw, 36px); font-weight: 600; }
      .l2 span { color: #6B7280; font-size: clamp(24px, 4vw, 36px); font-weight: 600; }
      .lines span { display: inline-block; opacity: 0; transform: translateY(20px); }
      .lines span.in { animation: pull 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
      @keyframes pull { to { opacity: 1; transform: translateY(0); } }
    `,
    notes: "逐词从下方弹入（y:20 → 0）+ 透明度渐显。每个词 delay 递增 0.08s，形成涟漪效果。用 cubic-bezier(0.16,1,0.3,1) 让弹入有'减速停稳'的感觉。多段文字可混排样式（cream 正文 + gray 副文）。适合 Hero 标题或 Section 引言。",
    tags: ["stagger", "pull-up", "word animation", "cubic-bezier", "headline"],
    savedAt: "2026-07-07",
  },

  // ── 电影感视频 Hero（来自 Prisma Studio）──
  {
    id: "cinematic-video-hero",
    title: "Cinematic Video Hero with Noise",
    category: "hero",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="hero"><div class="noise"></div><div class="gradient"></div><div class="content"><h1>ANDREAM</h1><p>A worldwide network of visual artists.</p></div></div>`,
    css: `
      body { margin: 0; background: black; font-family: -apple-system, sans-serif; }
      .hero {
        position: relative; width: 100%; height: 100vh; border-radius: 16px; overflow: hidden;
        background: linear-gradient(135deg, #1a1a2e, #0c0c0c, #1a1020);
      }
      .noise {
        position: absolute; inset: 0; mix-blend-mode: overlay; opacity: 0.7; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 128px 128px;
      }
      .gradient {
        position: absolute; inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 40%, rgba(0,0,0,0.6));
      }
      .content {
        position: absolute; bottom: 40px; left: 40px; z-index: 10;
      }
      h1 { color: #E1E0CC; font-size: clamp(60px, 20vw, 200px); font-weight: 500; line-height: 0.85; letter-spacing: -0.07em; margin: 0 0 12px; font-family: 'Georgia', serif; }
      p { color: rgba(225,224,204,0.7); font-size: 14px; max-width: 320px; line-height: 1.3; }
    `,
    notes: "全屏视频 + SVG 噪点纹理 + 渐变遮罩的叠加组合。视频用 absolute inset-0 + object-cover，噪点用 mix-blend-mode: overlay，渐变从上到下黑→透明→黑压暗上下边缘。最终效果像电影胶片质感。视频 URL 托管在 CloudFront CDN，autoPlay loop muted。",
    tags: ["video background", "noise texture", "cinematic", "overlay", "film grain"],
    savedAt: "2026-07-07",
  },

  // ── 居中黑色药丸导航（来自 Prisma Studio）──
  {
    id: "centered-pill-navbar",
    title: "Centered Black Pill Navbar",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<nav><a>Our story</a><a>Collective</a><a>Workshops</a><a>Programs</a><a>Inquiries</a></nav>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; min-height: 100%; font-family: -apple-system, sans-serif; }
      nav { background: black; border-radius: 0 0 16px 16px; padding: 8px 32px; display: flex; gap: 48px; }
      a { color: rgba(225,224,204,0.8); font-size: 14px; font-weight: 500; cursor: pointer; transition: color 0.3s; }
      a:hover { color: #E1E0CC; }
    `,
    notes: "悬挂式黑色药丸导航：绝对定位在页面顶部中央（left-1/2 -translate-x-1/2），底部圆角（rounded-b-2xl）。看起来像一个从顶部边缘'挂下来'的标签栏。5 个链接等距排列，hover 时从暗奶油色变亮。适合全屏 Hero 上方覆盖。",
    tags: ["pill navbar", "centered", "hanging", "rounded bottom", "cream text"],
    savedAt: "2026-07-07",
  },

  // ── 噪点纹理叠加（来自 Prisma Studio）──
  {
    id: "svg-noise-texture",
    title: "SVG Noise Texture Overlay",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="base"><div class="noise"></div><h2>Noise adds film grain texture to any background, giving it a tactile, analog feel.</h2></div>`,
    css: `
      body { margin: 0; background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .base { position: relative; width: 100%; height: 300px; background: linear-gradient(135deg, #1a1a2e, #0a0a0a); display: flex; align-items: center; justify-content: center; padding: 40px; overflow: hidden; border-radius: 16px; }
      .noise { position: absolute; inset: 0; mix-blend-mode: overlay; opacity: 0.5; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 128px 128px; }
      h2 { position: relative; z-index: 1; color: #E1E0CC; font-size: 18px; font-weight: 600; text-align: center; line-height: 1.5; }
    `,
    notes: "纯 SVG 噪点纹理，不依赖外部图片。用 feTurbulence（fractalNoise）+ feColorMatrix 生成颗粒，mix-blend-mode: overlay 叠加到背景上。可调节 baseFrequency（粗细）、numOctaves（细节层数）、opacity（强度）。比 CSS noise 更可控，比 PNG 更轻量。",
    tags: ["noise", "texture", "SVG", "feTurbulence", "film grain"],
    savedAt: "2026-07-07",
  },

  // ── 卡片交错缩放入场（来自 Prisma Studio）──
  {
    id: "staggered-card-entrance",
    title: "Staggered Card Scale Entrance",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="grid"><div class="card c1">01<p>Project Storyboard</p></div><div class="card c2">02<p>Smart Critiques</p></div><div class="card c3">03<p>Immersion Capsule</p></div></div><script>(function(){document.querySelectorAll('.card').forEach((c,i)=>{setTimeout(()=>c.classList.add('in'),i*250)})})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 20px; }
      .grid { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
      .card { background: #212121; border-radius: 16px; padding: 24px; width: 180px; color: #E1E0CC; font-size: 24px; font-weight: 700; font-family: 'Georgia', serif; opacity: 0; transform: scale(0.95); transition: all 0.7s cubic-bezier(0.22,1,0.36,1); }
      .card.in { opacity: 1; transform: scale(1); }
      p { font-size: 12px; font-weight: 400; color: #9CA3AF; margin-top: 8px; font-family: -apple-system, sans-serif; }
    `,
    notes: "卡片从 scale(0.95) + opacity:0 → scale(1) + opacity:1，每张延迟 0.15-0.25s 依次触发（useInView once + margin: -100px 提前触发）。缓动 cubic-bezier(0.22,1,0.36,1) 让缩放有'弹出来再稳住'的感觉。适合 Feature 卡片网格。",
    tags: ["staggered", "scale", "card entrance", "cubic-bezier", "grid"],
    savedAt: "2026-07-07",
  },

  // ── 逐词弹入 + 多风格混排（来自 Prisma Studio · About）──
  {
    id: "multi-style-word-pullup",
    title: "Multi-Style Word Pull-Up",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="lines"><div class="l1"><span>I</span> <span>am</span> <span>Andrew</span> <span>Chen,</span></div><div class="l2"><span>a</span> <span>self-taught</span> <span>creative.</span></div></div><script>(function(){document.querySelectorAll('.lines span').forEach((s,i)=>{s.style.animationDelay=(i*0.08)+'s';s.classList.add('in')})})()</script>`,
    css: `
      body { background: #101010; display: flex; align-items: center; justify-content: center; min-height: 100%; font-family: -apple-system, sans-serif; padding: 20px; }
      .lines { text-align: center; font-size: clamp(24px, 5vw, 48px); line-height: 1.2; }
      .l1 span { color: #E1E0CC; font-weight: 400; }
      .l2 span { color: #E1E0CC; font-weight: 400; font-style: italic; font-family: 'Georgia', serif; }
      .lines span { display: inline-block; opacity: 0; transform: translateY(20px); }
      .lines span.in { animation: up 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
      @keyframes up { to { opacity: 1; transform: translateY(0); } }
    `,
    notes: "同一个句子中混用多种样式（normal + italic + serif），每个词独立弹入。用 segments 数组定义每段文字及其 className。所有词统一用 0.08s 递增 delay。适合 About 区个人介绍——'我是 XXX，一个 XXX'，其中名字或关键词用斜体衬线突出。",
    tags: ["multi-style", "word animation", "italic mix", "pull-up", "About section"],
    savedAt: "2026-07-07",
  },

  // ── 大标题逐词弹入（来自 Prisma Studio · Hero）──
  {
    id: "giant-hero-word-pullup",
    title: "Giant Hero Word Pull-Up",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<h1><span>A</span><span>N</span><span>D</span><span>R</span><span>E</span><span>A</span><span>M</span></h1><script>(function(){document.querySelectorAll('h1 span').forEach((s,i)=>{s.style.animationDelay=(i*0.08)+'s';s.classList.add('in')})})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; min-height: 100%; overflow: hidden; }
      h1 { font-size: clamp(80px, 20vw, 200px); font-weight: 500; letter-spacing: -0.07em; line-height: 0.85; color: #E1E0CC; font-family: 'Georgia', serif; margin: 0; }
      h1 span { display: inline-block; opacity: 0; transform: translateY(20px); }
      h1 span.in { animation: pull 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
      @keyframes pull { to { opacity: 1; transform: translateY(0); } }
    `,
    notes: "超大字号（20vw）+ 极窄行高（0.85）+ 负字间距（-0.07em）+ 逐字弹入。用 useInView 触发 + 每个字符 0.08s 递增 delay。文字几乎占满整个视口宽度，配合视频背景 + 噪点叠加，极具视觉冲击力。适合品牌名 Hero 大标题。",
    tags: ["giant text", "vw sizing", "letter-by-letter", "hero headline", "brand name"],
    savedAt: "2026-07-07",
  },

  // ── 滚动驱动逐字渐显段落（来自 Prisma Studio · About）──
  {
    id: "scroll-character-reveal-v2",
    title: "Scroll Character Reveal v2",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<p id="r">Over the last seven years, I have worked with studios across Berlin, Paris, and Tokyo — crafting cinema, brand identities, and interactive experiences that earned international acclaim.</p><script>(function(){const p=document.getElementById('r'),t=p.textContent;p.textContent='';t.split('').forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.opacity='0.2';s.style.transition='opacity 0.4s ease';p.appendChild(s)});const spans=p.querySelectorAll('span');let dir=1,i=0;function step(){if(i>=spans.length){dir=-1;setTimeout(step,600);return}if(i<0){dir=1;setTimeout(step,400);return}spans[i].style.opacity='1';i+=dir;setTimeout(step,25)}step()})()</script>`,
    css: `
      body { background: #101010; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 24px; }
      p { color: #DEDBC8; font-size: clamp(13px, 2vw, 16px); line-height: 1.7; text-align: center; max-width: 600px; }
    `,
    notes: "Framer Motion useScroll 版本：每个字符 opacity 从 0.2 → 1，映射到段落元素的滚动进度。用 useTransform 计算：charProgress 在 [cp-0.1, cp+0.05] 区间内从 0.2 过渡到 1。offset: ['start 0.8', 'end 0.2'] 让效果在段落进入视口 80% 时开始。这里用 JS 循环模拟。适合 About 区介绍段落，比一次性淡入更有'逐字阅读'的引导感。",
    tags: ["scroll-driven", "character opacity", "useTransform", "progressive reveal", "About"],
    savedAt: "2026-07-07",
  },

  // ── 视频淡入淡出无缝循环（来自 Innovation Landing）──
  {
    id: "video-crossfade-loop",
    title: "Video Crossfade Loop",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<div class="player"><div class="bar"></div><p>Seamless loop with crossfade</p></div><script>(function(){const bar=document.querySelector('.bar');let pos=0,dir=1;function loop(){pos+=dir*0.5;if(pos>=100){dir=-1;setTimeout(()=>{pos=100},100)}if(pos<=0){dir=1;setTimeout(()=>{pos=0},100)}bar.style.width=pos+'%';bar.style.opacity=pos>90||pos<10?(10-Math.abs(pos-5))/10+'':'';requestAnimationFrame(loop)}loop()})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 24px; font-family: -apple-system, sans-serif; min-height: 100%; }
      .player { width: 280px; height: 160px; background: #111; border-radius: 16px; overflow: hidden; position: relative; display: flex; align-items: flex-end; }
      .bar { height: 4px; background: #4A78B0; position: absolute; bottom: 0; left: 0; border-radius: 0 2px 2px 0; transition: opacity 0.1s; }
      p { color: rgba(255,255,255,0.4); font-size: 12px; position: relative; z-index: 1; padding: 12px; }
    `,
    notes: "用 JS requestAnimationFrame 实现视频无缝循环：timeupdate 检测剩余时间 ≤ 0.55s → 淡出到 opacity:0；ended → 重置 currentTime → 重新播放 + 淡入到 1。每次过渡 500ms。比原生 loop 属性更平滑，消除'跳回开头'的顿挫感。关键是 0.55s 的提前量让淡出有足够时间。",
    tags: ["video", "crossfade", "requestAnimationFrame", "seamless loop", "canvas-style"],
    savedAt: "2026-07-07",
  },

  // ── Liquid Glass 输入框（来自 Innovation Landing）──
  {
    id: "liquid-glass-input",
    title: "Liquid Glass Email Input",
    category: "forms",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<div class="input-wrap"><input placeholder="Enter your email" /><button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .input-wrap {
        display: flex; align-items: center; gap: 8px; padding: 8px 8px 8px 24px;
        border-radius: 999px; width: 400px; max-width: 100%;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
      }
      .input-wrap::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 14px; position: relative; }
      input::placeholder { color: rgba(255,255,255,0.4); }
      button { background: white; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: black; cursor: pointer; flex-shrink: 0; position: relative; transition: background 0.2s; }
      button:hover { background: #e5e5e5; }
    `,
    notes: "liquid-glass pill 输入框：左侧透明 input + 右侧白色圆形提交按钮。整体用 liquid-glass 渐变边框包裹。placeholder 半透明白色，输入文字白色。适合 Newsletter 订阅、搜索框等暗色背景上的表单。",
    tags: ["input", "glass", "newsletter", "pill shape", "subscription form"],
    savedAt: "2026-07-07",
  },

  // ── 字体混排（来自 Innovation Landing · About）──
  {
    id: "italic-font-mixing",
    title: "Italic / Normal Font Mixing",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<h2>Pioneering <em>ideas</em> for<br/>minds that <em>create</em>, <em>build</em>, and <em>inspire</em>.</h2>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 24px; }
      h2 { font-size: clamp(32px, 5vw, 56px); line-height: 1.1; letter-spacing: -0.02em; color: white; font-weight: 400; max-width: 700px; text-align: center; font-family: 'Georgia', serif; }
      em { font-style: italic; color: rgba(255,255,255,0.6); font-weight: 400; }
    `,
    notes: "同一标题中普通体（white）和斜体（white/60）交替使用。用 `<em>` 标签包裹关键词，斜体降低透明度制造'轻音'感。适合大标题——关键词用斜体像'旁白'一样飘过，比全加粗更优雅。Font pairing：Instrument Serif / Playfair Display 等衬线体效果最好。",
    tags: ["italic", "font mixing", "emphasis", "heading", "serif"],
    savedAt: "2026-07-07",
  },

  // ── Liquid Glass 导航栏（来自 Innovation Landing）──
  {
    id: "liquid-glass-navbar",
    title: "Liquid Glass Navbar Pill",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<nav><div class="logo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>ANDREAM</div><div class="links"><a>Features</a><a>Pricing</a><a>About</a></div><div class="btns"><a>Sign Up</a><button>Login</button></div></nav>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      nav {
        display: flex; align-items: center; justify-content: space-between;
        border-radius: 999px; padding: 12px 24px; width: 600px; max-width: 90%;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
      }
      nav::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      .logo { display: flex; align-items: center; gap: 8px; color: white; font-weight: 600; font-size: 16px; position: relative; font-family: 'Georgia', serif; }
      .links { display: flex; gap: 32px; position: relative; }
      .links a { color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 500; cursor: pointer; position: relative; }
      .links a:hover { color: white; }
      .btns { display: flex; align-items: center; gap: 16px; position: relative; }
      .btns a { color: white; font-size: 13px; font-weight: 500; cursor: pointer; }
      button { background: rgba(255,255,255,0.01); backdrop-filter: blur(4px); border: none; border-radius: 999px; padding: 8px 20px; color: white; font-size: 13px; cursor: pointer; position: relative; box-shadow: inset 0 1px 1px rgba(255,255,255,0.1); }
    `,
    notes: "整条导航栏用 liquid-glass 材质包裹成一根大 pill。左 Logo + 中链接 + 右按钮，flexbox 三段式。Login 按钮也是 mini liquid-glass pill，形成嵌套玻璃效果。backdrop-blur 让视频背景透过导航栏呈毛玻璃感。适合视频 Hero 上方的覆盖导航。",
    tags: ["glass", "navbar", "pill", "blur", "navigation"],
    savedAt: "2026-07-07",
  },

  // ── Hero 跳入标题（来自 Innovation Landing）──
  {
    id: "hero-jump-heading",
    title: "Hero Jump-In Heading",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<h1 class="jump">Know it then <em>all</em></h1><script>(function(){const w=document.querySelector('h1'),t=w.textContent;w.textContent='';let i=0;function add(){if(i>=t.length)return;const s=document.createElement('span');s.textContent=t[i];s.style.display='inline-block';s.style.animation='jumpIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards';s.style.animationDelay=(i*0.04)+'s';w.appendChild(s);i++;setTimeout(add,40)}add()})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: 'Georgia', serif; min-height: 100%; }
      h1 { font-size: clamp(60px, 12vw, 120px); color: white; letter-spacing: -0.02em; }
      h1 em { font-style: italic; color: rgba(255,255,255,0.6); }
      @keyframes jumpIn { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
      h1 span { opacity: 0; }
    `,
    notes: "大标题逐字从下方跳出（y:30 → 0），每个字 delay 递增 0.04s。用 cubic-bezier(0.16,1,0.3,1) 让跳入有弹性减速感。配合 `<em>` 斜体降低透明度，关键词像轻音飘过。比逐词弹入更细腻——逐字比逐词多一倍的动画层次。",
    tags: ["letter animation", "jump in", "hero", "serif", "staggered"],
    savedAt: "2026-07-07",
  },

  // ── Liquid Glass 图标按钮（来自 Innovation Landing）──
  {
    id: "liquid-glass-icon-buttons",
    title: "Liquid Glass Icon Buttons",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/innovation-landing",
    sourceName: "Innovation Landing · AndDream",
    html: `<div class="row"><button class="glass-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></button><button class="glass-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h20v18H2z"/><path d="M7 7h10M7 12h10M7 17h6"/></svg></button><button class="glass-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></button></div>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .row { display: flex; gap: 16px; }
      .glass-icon {
        width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        display: flex; align-items: center; justify-content: center;
        color: rgba(255,255,255,0.8); position: relative; overflow: hidden;
        transition: all 0.2s;
      }
      .glass-icon::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      .glass-icon:hover { color: white; background: rgba(255,255,255,0.05); }
    `,
    notes: "圆形 liquid-glass 图标按钮：56px 圆形 + SVG 图标 + 渐变边框。hover 时图标变亮 + 背景微增。适合社交图标、底部导航、操作按钮组。可以嵌套在任何暗色背景上，毛玻璃效果会让底层视频/图片透过来。",
    tags: ["glass", "icon button", "circle", "social", "blur"],
    savedAt: "2026-07-07",
  },

  // ── 彩色故障纹理（来自 Orbis NFT）──
  {
    id: "color-noise-texture",
    title: "Color Noise Texture Overlay",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<div class="scene"><div class="texture"></div><h2>Space Objects</h2></div>`,
    css: `
      body { margin: 0; background: #010828; font-family: -apple-system, sans-serif; }
      .scene { position: relative; width: 100%; height: 300px; background: radial-gradient(ellipse at center, #0a1a3a, #010828); display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 16px; }
      .texture { position: absolute; inset: 0; mix-blend-mode: lighten; opacity: 0.5; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 256px 256px; }
      h2 { position: relative; z-index: 1; color: #EFF4FF; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em; }
    `,
    notes: "SVG 噪点 + feColorMatrix 注入颜色通道 + mix-blend-mode: lighten。比单纯噪点多一层色彩偏移，产生类似 VHS 故障/星云纹理的效果。覆盖在视频或渐变背景上，增加科幻感。关键参数：baseFrequency 0.65（比标准噪点更细腻）+ matrix alpha 0.5。",
    tags: ["noise", "color matrix", "glitch", "texture", "scifi"],
    savedAt: "2026-07-07",
  },

  // ── 厚玻璃药丸导航（来自 Orbis NFT）──
  {
    id: "thick-glass-pill-nav",
    title: "Thick Glass Pill Navigation",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<nav><a>Homepage</a><a>Gallery</a><a>Buy NFT</a><a>FAQ</a><a>Contact</a></nav>`,
    css: `
      body { background: #010828; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      nav {
        display: flex; gap: 40px; padding: 24px 52px; border-radius: 28px;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden;
      }
      nav::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      a { color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; position: relative; transition: color 0.2s; }
      a:hover { color: #6FFF00; }
    `,
    notes: "超厚 liquid-glass 药丸导航：rounded-[28px] + px-[52px] py-[24px]。比标准 pill 更厚更圆，视觉权重更大。5 个链接等距排列，hover 变霓虹绿。适合深色空间主题的居中导航。字体用 Anton / 粗体无衬线等宽字效果最好。",
    tags: ["glass", "thick pill", "navigation", "rounded", "scifi"],
    savedAt: "2026-07-07",
  },

  // ── 等宽字体正文（来自 Orbis NFT）──
  {
    id: "monospace-body-text",
    title: "Monospace Uppercase Body",
    category: "other",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<p>A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.</p>`,
    css: `
      body { background: #010828; display: flex; align-items: center; justify-content: center; font-family: 'Courier New', monospace; min-height: 100%; padding: 24px; }
      p { font-family: 'Courier New', monospace; font-size: 14px; text-transform: uppercase; color: #EFF4FF; max-width: 266px; line-height: 1.6; letter-spacing: 0.02em; }
    `,
    notes: "等宽字体（Courier New / monospace）+ 全大写 + 窄宽度（max-w-[266px]）营造'电报/代码美学'。字间距 0.02em 让每个字母呼吸。适合 NFT/Web3/科技类页面的介绍段落——比常规正文更有'数据终端'质感。",
    tags: ["monospace", "uppercase", "code aesthetic", "narrow", "tech"],
    savedAt: "2026-07-07",
  },

  // ── 草书叠字（来自 Orbis NFT）──
  {
    id: "cursive-overlay-text",
    title: "Cursive Overlay Accent",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<div class="wrap"><h2>Hello!<br/>I'm orbis</h2><span class="cursive">Orbis</span></div>`,
    css: `
      body { background: #010828; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 24px; }
      .wrap { position: relative; display: inline-block; }
      h2 { font-size: clamp(32px, 6vw, 60px); font-weight: 900; text-transform: uppercase; color: white; line-height: 1; margin: 0; letter-spacing: 0.02em; }
      .cursive { font-family: 'Brush Script MT', 'Snell Roundhand', cursive; font-size: clamp(36px, 7vw, 68px); color: #6FFF00; position: absolute; bottom: -10px; right: -20px; transform: rotate(-2deg); mix-blend-mode: exclusion; opacity: 0.9; pointer-events: none; }
    `,
    notes: "草书叠字：Condiment 等手写体用 absolute 定位在标题右下角，mix-blend-mode: exclusion 让颜色随底层内容变化，-rotate-2 微倾斜增加手写感。霓虹绿（#6FFF00）在深蓝底上有强烈对比。适合 Hero 标题的装饰性签名/标签。",
    tags: ["cursive", "overlay", "exclusion", "handwriting", "neon green"],
    savedAt: "2026-07-07",
  },

  // ── 混排标题（来自 Orbis NFT · Collection）──
  {
    id: "mixed-font-collection-heading",
    title: "Mixed Font Collection Heading",
    category: "headings",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<h2>Collection of<br/><span class="indent"><em class="c">Space</em> <span class="a">objects</span></span></h2>`,
    css: `
      body { background: #010828; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 24px; }
      h2 { font-size: clamp(32px, 6vw, 60px); font-weight: 900; text-transform: uppercase; color: white; line-height: 1.1; letter-spacing: 0.02em; }
      .indent { display: block; padding-left: 64px; margin-top: 4px; }
      .c { font-family: 'Brush Script MT', cursive; font-style: normal; color: #6FFF00; text-transform: none; margin-right: 12px; font-weight: 400; }
      .a { font-weight: 900; color: white; }
    `,
    notes: "标题中混用三种样式：粗体无衬线（'Collection of'）+ 草书霓虹绿（'Space'）+ 粗体无衬线（'objects'）。第二行缩进 ml-24 制造层次。草书关键词打破全大写无衬线的'硬'感，加入一抹手写柔度。适合 Section 标题——用草书突出一个关键词。",
    tags: ["mixed fonts", "cursive accent", "indented", "section heading", "contrast"],
    savedAt: "2026-07-07",
  },

  // ── 数字计数加载屏（来自 Portfolio Cosmic）──
  {
    id: "counter-loading-screen",
    title: "Counter Loading Screen",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<div class="screen"><span class="label">Portfolio</span><span class="word" id="w">Design</span><div class="counter"><span class="num" id="n">000</span><div class="bar"><div class="fill" id="f"></div></div></div></div><script>(function(){const n=document.getElementById('n'),f=document.getElementById('f'),w=document.getElementById('w'),words=['Design','Create','Inspire'];let c=0,wi=0,s=performance.now();function swapWord(){wi=(wi+1)%3;w.style.transition='all 0.4s ease-out';w.style.opacity='0';w.style.transform='translateY(-20px)';setTimeout(()=>{w.textContent=words[wi];w.style.transition='none';w.style.transform='translateY(20px)';requestAnimationFrame(()=>{w.style.transition='all 0.4s ease-out';w.style.opacity='1';w.style.transform='translateY(0)'})},400)}setInterval(swapWord,900);function tick(){const p=Math.min((performance.now()-s)/2700,1);c=Math.floor(p*100);n.textContent=String(c).padStart(3,'0');f.style.transform='scaleX('+(c/100)+')';if(p<1)requestAnimationFrame(tick)}tick()})()</script>`,
    css: `
      body { margin:0; background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; color: white; overflow:hidden; }
      .screen { position: relative; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; }
      .label { position: absolute; top: 24px; left: 24px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; color: #555; }
      .word { font-family: 'Georgia', serif; font-style: italic; font-size: clamp(28px, 6vw, 56px); color: rgba(255,255,255,0.8); transition: all 0.4s ease-out; }
      .counter { position: absolute; bottom: 32px; right: 32px; text-align: right; }
      .num { font-family: 'Georgia', serif; font-size: clamp(40px, 8vw, 80px); display: block; font-variant-numeric: tabular-nums; }
      .bar { width: 160px; height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 8px; overflow: hidden; }
      .fill { height: 100%; background: linear-gradient(90deg, #89AACC, #4E85BF); box-shadow: 0 0 8px rgba(137,170,204,0.35); transform-origin: left; transform: scaleX(0); }
    `,
    notes: "加载屏：数字从 000 用 requestAnimationFrame 计数到 100（2700ms），用 padStart(3,'0') 保证三位数。渐变进度条 scaleX 从 0→1。中央单词每 900ms 轮换——先向上滑出（y→-20 + opacity 0），然后从下方弹入（y 20→0 + opacity 1）。左上角标签 + 右下角计数器构成对角线构图。",
    tags: ["loading screen", "counter", "progress bar", "requestAnimationFrame", "preloader"],
    savedAt: "2026-07-07",
  },

  // ── 单词轮换动画（来自 Portfolio Cosmic）──
  {
    id: "cycling-words-animation",
    title: "Cycling Words Animation",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<span id="cw">Design</span><script>(function(){const w=document.getElementById('cw'),words=['Design','Create','Inspire'];let i=0;function swap(){i=(i+1)%3;w.style.transition='all 0.4s ease-out';w.style.opacity='0';w.style.transform='translateY(-20px)';setTimeout(()=>{w.textContent=words[i];w.style.transition='none';w.style.transform='translateY(20px)';requestAnimationFrame(()=>{w.style.transition='all 0.4s ease-out';w.style.opacity='1';w.style.transform='translateY(0)'})},400)}setInterval(swap,900)})()</script>`,
    css: `
      body { background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: 'Georgia', serif; font-style: italic; min-height: 100%; }
      span { font-size: clamp(32px, 6vw, 56px); color: rgba(255,255,255,0.8); }
    `,
    notes: "单词每 900ms 轮换：先向上滑出（y→-20px + opacity 0）→ 替换文字 → 从下方弹入（y 20px→0 + opacity 1）。模拟 Framer Motion AnimatePresence mode='wait' 的效果。适合加载屏或 Hero 的职位/标签动态展示。",
    tags: ["cycling", "word swap", "AnimatePresence", "role display", "loading"],
    savedAt: "2026-07-07",
  },

  // ── 悬浮药丸导航（来自 Portfolio Cosmic）──
  {
    id: "floating-pill-nav-glow",
    title: "Floating Pill Nav with Glow",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<nav><div class="logo"><span class="logo-ring"></span><span class="logo-inner">AD</span></div><span class="sep"></span><a class="active">Home</a><a>Work</a><a>Resume</a><span class="sep"></span><button class="say-hi"><span class="glow-ring"></span><span class="btn-text">Say hi ↗</span></button></nav>`,
    css: `
      body { background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      nav { display: inline-flex; align-items: center; gap: 2px; padding: 8px; border-radius: 999px; backdrop-filter: blur(12px); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
      .logo { width: 36px; height: 36px; border-radius: 50%; position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; }
      .logo-ring { position: absolute; inset: 0; border-radius: 50%; background: linear-gradient(90deg, #4A78B0, #254E7A); }
      .logo-inner { position: absolute; inset: 2px; border-radius: 50%; background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: 'Georgia', serif; font-style: italic; font-size: 13px; color: white; transition: transform 0.2s; }
      .logo:hover .logo-inner { transform: scale(1.1); }
      .sep { width: 1px; height: 20px; background: rgba(255,255,255,0.1); margin: 0 4px; }
      a { font-size: 13px; padding: 6px 16px; border-radius: 999px; color: #999; cursor: pointer; transition: all 0.2s; text-decoration: none; }
      a.active { color: white; background: rgba(255,255,255,0.1); }
      a:hover:not(.active) { color: white; background: rgba(255,255,255,0.05); }
      .say-hi { font-size: 13px; padding: 6px 16px; border-radius: 999px; color: #999; cursor: pointer; border: none; background: transparent; position: relative; transition: all 0.2s; }
      .glow-ring { position: absolute; inset: -2px; border-radius: 999px; background: linear-gradient(90deg, #4A78B0, #254E7A); opacity: 0; transition: opacity 0.3s; }
      .say-hi:hover .glow-ring { opacity: 1; }
      .say-hi:hover { color: white; }
      .btn-text { position: relative; z-index: 1; background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); border-radius: 999px; padding: 6px 12px; display: inline-block; }
    `,
    notes: "悬浮在页面顶部中央的药丸导航。Logo 是渐变环（外圈靛蓝渐变 + 内圈 2px 缩进暗底形成'发光环'）hover 放大 1.1×。'Say hi' 按钮 hover 时外层出现渐变光环（absolute inset:-2px + 渐变背景 + opacity 0→1）。导航链接 active 态有浅色背景。整体 backdrop-blur + 1px 白边框。",
    tags: ["floating", "pill", "navbar", "blur", "gradient hover"],
    savedAt: "2026-07-07",
  },

  // ── 角色轮换文字（来自 Portfolio Cosmic）──
  {
    id: "role-rotating-text",
    title: "Role Rotating Text",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<p>A <span id="role">Creative</span> lives in Shanghai.</p><script>(function(){const r=document.getElementById('role'),roles=['Creative','Designer','Builder','Dreamer'];let i=0;setInterval(()=>{i=(i+1)%4;r.style.opacity='0';r.style.transform='translateY(8px)';setTimeout(()=>{r.textContent=roles[i];r.style.opacity='1';r.style.transform='translateY(0)'},200)},2000)})()</script>`,
    css: `
      body { background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      p { color: #999; font-size: 16px; }
      span { font-family: 'Georgia', serif; font-style: italic; color: white; display: inline-block; transition: all 0.4s ease-out; }
    `,
    notes: "句子中嵌入一个轮换词：'A ___ lives in Shanghai.'，每 2s 切换一次。角色词用斜体衬线体 + 白色突出，与正文灰色无衬线形成对比。用 AnimatePresence 做淡入淡出 + 微上移。适合 Hero 区个人介绍——展示多重身份（设计师/开发者/创始人...）。",
    tags: ["rotating", "role", "italic", "sentence", "identity"],
    savedAt: "2026-07-07",
  },

  // ── 渐变边框悬停按钮（来自 Portfolio Cosmic）──
  {
    id: "gradient-border-hover-button",
    title: "Gradient Border Hover Button",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<div class="row"><button class="solid">See Works</button><button class="outline">Reach out...</button></div>`,
    css: `
      body { background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .row { display: flex; gap: 16px; }
      button { border-radius: 999px; padding: 14px 28px; font-size: 14px; cursor: pointer; transition: all 0.3s; }
      .solid { background: white; color: black; border: 2px solid white; }
      .solid:hover { background: #0a0a0a; color: white; border-color: #4A78B0; transform: scale(1.05); }
      .outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.15); }
      .outline:hover { border-color: #4A78B0; transform: scale(1.05); }
    `,
    notes: "两组 CTA 按钮并排：Solid（白底黑字 → hover 反转为黑底白字 + 靛蓝边框）和 Outline（透明底 + 半透明白边框 → hover 靛蓝边框）。两个都 hover:scale-105 微放大。简洁克制——不需要渐变光环，靠颜色反转和边框变色就足够表达交互。",
    tags: ["gradient border", "hover glow", "CTA pair", "outline", "scale"],
    savedAt: "2026-07-07",
  },

  // ── Scroll 指示器动态竖条（来自 Portfolio Cosmic）──
  {
    id: "scroll-indicator-bar",
    title: "Scroll Indicator with Animated Bar",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<div class="indicator"><span>SCROLL</span><div class="line"><div class="glow"></div></div></div>`,
    css: `
      body { background: #0a0a0a; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .indicator { display: flex; flex-direction: column; align-items: center; gap: 8px; }
      span { font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #666; }
      .line { width: 1px; height: 40px; background: rgba(255,255,255,0.1); position: relative; overflow: hidden; }
      .glow { width: 100%; height: 35%; position: absolute; top: 0; animation: scroll 1.5s ease-in-out infinite; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent); }
      @keyframes scroll { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
    `,
    notes: "Hero 底部的滚动提示：'SCROLL' 标签 + 1px 竖线 + 内部高光条从上往下循环移动。高光用 translateY(-100%→300%) 动画 + 渐变（透明→白→透明），制造'还有内容在下面'的暗示。适合全屏 Hero 引导用户向下滚动。",
    tags: ["scroll indicator", "animated bar", "hero", "vertical line", "call to action"],
    savedAt: "2026-07-07",
  },

  // ── HLS 视频背景（来自 Portfolio Cosmic）──
  {
    id: "hls-video-background",
    title: "HLS Streaming Video Background",
    category: "hero",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/portfolio-cosmic-hero",
    sourceName: "Portfolio Cosmic · AndDream",
    html: `<div class="player"><div class="bar"></div><p>HLS: adaptive bitrate streaming</p></div><script>(function(){const bar=document.querySelector('.bar');let q=100;function sim(){q=q+(Math.random()>0.5?1:-1)*Math.random()*15;q=Math.max(20,Math.min(100,q));bar.style.width=q+'%';bar.style.background=q>70?'#4A78B0':q>40?'#89AACC':'#666';setTimeout(sim,800)}sim()})()</script>`,
    css: `
      body { background: #0a0a0a; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; font-family: -apple-system, sans-serif; min-height: 100%; }
      .player { width: 300px; height: 180px; background: #111; border-radius: 16px; display: flex; align-items: flex-end; padding: 12px; }
      p { color: rgba(255,255,255,0.5); font-size: 12px; position: relative; z-index: 1; }
      .bar { height: 3px; background: #4A78B0; border-radius: 2px; position: absolute; bottom: 0; left: 0; transition: all 0.8s; }
    `,
    notes: "HLS（HTTP Live Streaming）比 MP4 更适合 Hero 背景视频：自适应码率（根据网速自动切换 720p/1080p/4K）、秒开无需完整下载、支持直播。托管方案：Mux.com（模板用的这个，免费额度够用）、Cloudflare Stream、或者直接用 Vimeo 的直链。实现上用 hls.js 库，Hls.isSupported() 检测 → new Hls() 加载 .m3u8 播放列表。",
    tags: ["HLS", "video streaming", "adaptive bitrate", "mux", "background"],
    savedAt: "2026-07-07",
  },

  // ── 渐变发光 Contact 按钮（来自 3D Portfolio）──
  {
    id: "gradient-glow-contact-button",
    title: "Gradient Glow Contact Button",
    category: "buttons",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/3d-jack-portfolio-hero",
    sourceName: "3D Portfolio · AndDream",
    html: `<button>Contact Us</button>`,
    css: `
      body { background: #111; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      button {
        padding: 12px 48px; border: none; border-radius: 999px;
        font-size: 14px; font-weight: 500; text-transform: uppercase;
        letter-spacing: 0.15em; color: white; cursor: pointer;
        background: linear-gradient(123deg, #18011F 7%, #254E7A 37%, #4A78B0 72%, #1A1A1A 100%);
        box-shadow: 0px 4px 4px rgba(37,78,122,0.25), inset 4px 4px 12px #254E7A;
        outline: 2px solid white; outline-offset: -3px;
        transition: opacity 0.2s;
      }
      button:hover { opacity: 0.8; }
    `,
    notes: "复杂的渐变按钮：4 色标（紫→靛蓝→浅蓝→深灰）+ 外发光 box-shadow + 内阴影 inset + 白色双层描边（outline + outline-offset -3px）。2px 白线在按钮内侧 3px 处形成'悬浮边框'效果。这个按钮用了 4 层视觉叠加：渐变底色 + 外发光 + 内阴影 + 内描边。",
    tags: ["gradient", "inner shadow", "outline", "glow", "CTA"],
    savedAt: "2026-07-07",
  },

  // ── macOS 菜单栏（来自 Email Landing）──
  {
    id: "macos-menu-bar",
    title: "macOS Menu Bar Strip",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="bar"><div class="left"><svg viewBox="0 0 384 512" fill="currentColor" width="14" height="14"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9z"/></svg><b>ANDREAM</b><span>File</span><span>Edit</span><span>View</span></div><div class="right">Wed May 6 1:09 PM</div></div>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 24px; background: rgba(0,0,0,0.4); backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; max-width: 600px; border-radius: 4px; }
      .left, .right { display: flex; align-items: center; gap: 16px; color: rgba(255,255,255,0.6); font-size: 12px; }
      .left span { color: rgba(255,255,255,0.5); }
      b { color: white; font-weight: 700; }
      .right { color: rgba(255,255,255,0.5); font-size: 12px; }
    `,
    notes: "仿 macOS 顶部菜单栏：黑色半透明底 + backdrop-blur + 上下 1px 白边框。Apple Logo SVG + 粗体 App 名 + 菜单项（File/Edit/View...）+ 右侧日期。菜单项在小屏幕逐步隐藏（hidden sm:inline / hidden md:inline）。给页面增加'桌面应用'的沉浸感。",
    tags: ["macOS", "menu bar", "Apple", "desktop", "immersive"],
    savedAt: "2026-07-07",
  },

  // ── AI 摘要卡片（来自 Email Landing · Inbox）──
  {
    id: "ai-summary-card",
    title: "AI Summary Card in Inbox",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/email-landing-page",
    sourceName: "Email Landing · AndDream",
    html: `<div class="card"><div class="header"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A4F4FD" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>Summary by ANDREAM</span></div><p>Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.</p></div>`,
    css: `
      body { background: #0c0c0c; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .card { background: rgba(74,120,176,0.1); border: 1px solid rgba(74,120,176,0.2); border-radius: 8px; padding: 12px; max-width: 320px; }
      .header { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
      .header span { font-size: 11px; font-weight: 600; color: #A4F4FD; }
      p { font-size: 11px; color: rgba(255,255,255,0.7); line-height: 1.5; }
    `,
    notes: "收件箱内的 AI 摘要卡片：靛蓝半透明底 + 靛蓝边框 + 青色图标/标题（#A4F4FD）。用 Sparkles/Stars 图标暗示 AI 生成。适合邮件客户端、Dashboard 等 SaaS 产品的 AI 功能展示。",
    tags: ["AI", "summary", "inbox", "card", "SaaS"],
    savedAt: "2026-07-07",
  },

  // ── 深紫实色卡片（来自 USD Halo）──
  {
    id: "dark-purple-solid-card",
    title: "Dark Purple Solid Card",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/halo-usd-landing",
    sourceName: "USD Halo · AndDream",
    html: `<div class="card"><h3>Always fluid,<br/>always pegged.</h3><p>Keep fully anchored with on-demand access to funds — no lockups or waits.</p></div>`,
    css: `
      body { background: #F5F5F5; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .card { background: #2B2644; border-radius: 16px; padding: 28px; width: 260px; min-height: 320px; display: flex; flex-direction: column; justify-content: space-between; }
      h3 { font-family: 'Georgia', serif; font-size: 24px; font-weight: 500; color: white; line-height: 1.2; letter-spacing: -0.02em; }
      p { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.5; }
    `,
    notes: "深紫色实色卡片（#2B2644）：无渐变无毛玻璃，纯色填充。白色衬线标题 + 60% 透明度白色正文。与同组的图片卡片和玻璃卡片形成材质对比。适合 4 列网格中作为'实心锚点'——周围是图片/视频/玻璃卡，它是唯一不透明的。",
    tags: ["solid", "purple", "dark", "contrast", "material mix"],
    savedAt: "2026-07-07",
  },

  // ── 功能 Check 列表卡片（来自 Prisma Studio）──
  {
    id: "feature-checklist-card",
    title: "Feature Checklist Card",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/prisma-landing",
    sourceName: "Prisma Studio · AndDream",
    html: `<div class="card"><span class="num">02</span><h3>Smart Critiques</h3><ul><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DEDBC8" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>AI-powered color analysis</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DEDBC8" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>Creative notes on every frame</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DEDBC8" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>Integrated tool ecosystem</li></ul><a>Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DEDBC8" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .card { background: #212121; border-radius: 16px; padding: 20px; width: 240px; display: flex; flex-direction: column; }
      .num { font-family: 'Georgia', serif; font-size: 24px; font-weight: 700; color: #DEDBC8; margin-bottom: 4px; }
      h3 { font-size: 16px; font-weight: 500; color: #E1E0CC; margin-bottom: 16px; }
      ul { list-style: none; padding: 0; margin: 0 0 16px; flex: 1; }
      li { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: #9CA3AF; padding: 3px 0; }
      li svg { flex-shrink: 0; margin-top: 2px; }
      a { font-size: 12px; color: #DEDBC8; text-decoration: none; display: flex; align-items: center; gap: 4px; }
      a svg { transform: rotate(-45deg); transition: transform 0.3s; }
      a:hover svg { transform: rotate(0deg); }
    `,
    notes: "深灰卡片 + 大数字编号 + 标题 + Check SVG 图标列表 + Learn more 斜箭头链接。数字用衬线体（Playfair/Georgia），列表项用 Check 图标而非默认 bullet。'Learn more' 的箭头初始 -45deg → hover 旋转到 0deg。适合 Features 网格。",
    tags: ["checklist", "feature card", "numbered", "arrow rotate", "dark"],
    savedAt: "2026-07-07",
  },

  // ── NFT 视频评分卡片（来自 Orbis NFT）──
  {
    id: "nft-score-video-card",
    title: "NFT Score Video Card",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/orbis-nft-landing",
    sourceName: "Orbis NFT · AndDream",
    html: `<div class="card"><div class="video"><div class="badge"><span class="star">★</span> 9.0/10 <span class="name">Void Walker</span></div></div></div>`,
    css: `
      body { background: #010828; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; }
      .card { width: 280px; border-radius: 32px; padding: 18px; position: relative; overflow: hidden;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1); }
      .card::before { content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
      .video { position: relative; padding-bottom: 100%; border-radius: 24px; overflow: hidden;
        background: linear-gradient(135deg, #1a1a3e 0%, #0d1b2a 50%, #1a1a3e 100%); }
      .badge { position: absolute; bottom: 16px; left: 16px; display: flex; align-items: center; gap: 8px;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        border-radius: 999px; padding: 6px 16px;
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1); color: white; font-size: 14px; }
      .star { color: #6FFF00; font-size: 12px; font-weight: 700; }
      .name { color: rgba(255,255,255,0.8); }
    `,
    notes: "NFT 收藏卡片：外层 liquid-glass 大圆角（32px）+ 内层正方形视频区（24px 圆角）+ 左下角 liquid-glass pill 评分标签（霓虹绿星级 + 名称）。hover 整体变亮（bg-white/10）。适合 NFT 市场、作品集网格。评分 pill 也是毛玻璃材质，形成嵌套玻璃效果。",
    tags: ["NFT", "video card", "score badge", "nested glass", "collection"],
    savedAt: "2026-07-07",
  },

  // ── 同心圆 Logo 导航（来自 Mindloop）──
  {
    id: "concentric-circles-logo-nav",
    title: "Concentric Circles Logo Nav",
    category: "navigation",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/mindloop-landing",
    sourceName: "Mindloop · AndDream",
    html: `<nav><div class="logo"><span class="outer"></span><span class="inner"></span>ANDREAM</div><div class="links"><span>Home</span><span>•</span><span>How It Works</span><span>•</span><span>Philosophy</span><span>•</span><span>Use Cases</span></div><div class="icons"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></nav>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      nav { display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; width: 100%; max-width: 800px; }
      .logo { display: flex; align-items: center; gap: 8px; color: white; font-weight: 700; font-size: 16px; }
      .outer { width: 28px; height: 28px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.6); display: inline-block; position: relative; }
      .inner { width: 12px; height: 12px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.6); position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
      .links { display: flex; align-items: center; gap: 4px; font-size: 13px; color: rgba(255,255,255,0.65); }
      .links span:nth-child(odd) { cursor: pointer; }
      .links span:nth-child(odd):hover { color: white; }
      .links span:nth-child(even) { color: rgba(255,255,255,0.2); font-size: 10px; }
      .icons { display: flex; gap: 8px; }
      .dot { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.01); backdrop-filter: blur(4px); box-shadow: inset 0 1px 1px rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
      .dot:hover { background: rgba(255,255,255,0.05); }
      .dot::after { content: ''; width: 16px; height: 16px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.5); }
    `,
    notes: "纯黑白导航栏：同心圆 Logo（外圈 28px + 内圈 12px 叠在中心）+ • 分隔的导航链接 + 3 个 liquid-glass 圆形社交图标按钮。链接 hover 从 65%→100% 白色，• 分隔符 20% 白色。整体透明底 + 固定顶部。极简单色克制。",
    tags: ["concentric", "logo", "dot separator", "monochrome", "navbar"],
    savedAt: "2026-07-07",
  },

  // ── 平台图标卡片（来自 Mindloop）──
  {
    id: "platform-icon-cards",
    title: "Platform Icon Cards",
    category: "cards",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/mindloop-landing",
    sourceName: "Mindloop · AndDream",
    html: `<div class="grid"><div class="card"><div class="icon">1</div><h3>ChatGPT</h3><p>Conversational AI that answers questions, writes code, and generates ideas in real time.</p></div><div class="card"><div class="icon">2</div><h3>Perplexity</h3><p>AI-powered search engine that provides cited, accurate answers to complex questions.</p></div><div class="card"><div class="icon">3</div><h3>Google AI</h3><p>Search reimagined with generative AI overviews and multimodal understanding.</p></div></div>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; padding: 20px; min-height: 100%; }
      .grid { display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; }
      .card { text-align: center; max-width: 200px; }
      .icon { width: 200px; height: 200px; border-radius: 16px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; font-size: 60px; font-weight: 700; color: rgba(255,255,255,0.2); margin-bottom: 24px; }
      h3 { font-size: 16px; font-weight: 600; color: white; margin-bottom: 8px; }
      p { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.5; }
    `,
    notes: "3 列平台卡片：200×200 图标占位区（白底 5% + 大号数字）+ 粗体标题 + 描述。每个卡片用 fadeUp 依次淡入（delay 递增 0.1s）。纯黑白配色，图标区用极低透明度占位。适合展示工具/平台/合作伙伴。",
    tags: ["icon card", "platform", "monochrome", "fade up", "grid"],
    savedAt: "2026-07-07",
  },

  // ── fadeUp 动画模式（来自 Mindloop）──
  {
    id: "fadeup-animation-pattern",
    title: "FadeUp Animation Pattern",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/mindloop-landing",
    sourceName: "Mindloop · AndDream",
    html: `<div class="items"><div class="item i1">Section Title</div><div class="item i2">Subtitle text below</div><div class="item i3">Card content here</div></div><script>(function(){document.querySelectorAll('.item').forEach((el,i)=>{setTimeout(()=>el.classList.add('show'),i*250)})})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 20px; }
      .items { display: flex; flex-direction: column; align-items: center; gap: 16px; }
      .item { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; color: white; font-size: 18px; }
      .item.show { opacity: 1; transform: translateY(0); }
    `,
    notes: "Framer Motion 的 fadeUp 可复用模式：whileInView 触发（once:true, margin:-100px 提前 100px 触发），opacity 0→1 + y 20→0，duration 0.6s + easeOut。每个组件用 delay 参数做 stagger（delay = index * 0.1）。适合所有需要'滚到才出现'的 Section。全站统一动画语言。",
    tags: ["fade up", "whileInView", "stagger", "reusable pattern", "scroll trigger"],
    savedAt: "2026-07-07",
  },

  // ── 滚动驱动词亮度（来自 Mindloop · Mission）──
  {
    id: "scroll-word-brightness",
    title: "Scroll Word Brightness Reveal",
    category: "animations",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/mindloop-landing",
    sourceName: "Mindloop · AndDream",
    html: `<p id="rp">We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.</p><script>(function(){const p=document.getElementById('rp'),t=p.textContent;const words=t.split(' ');p.textContent='';words.forEach(w=>{const s=document.createElement('span');s.textContent=w+' ';s.style.opacity='0.15';s.style.transition='opacity 0.4s ease';p.appendChild(s)});const spans=p.querySelectorAll('span');let i=0,dir=1;function step(){if(i>=spans.length){dir=-1;setTimeout(step,500);return}if(i<0){dir=1;setTimeout(step,300);return}spans[i].style.opacity='1';i+=dir;setTimeout(step,80)}step()})()</script>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; padding: 24px; color: white; }
      p { font-size: clamp(18px, 3vw, 28px); font-weight: 500; line-height: 1.5; max-width: 700px; text-align: center; }
      p span { opacity: 0.15; }
    `,
    notes: "滚动驱动词亮度：每个词初始 opacity 0.15，随 useScroll + useTransform 映射到滚动进度。词在 [start, end] 区间内 opacity 0.15→1。具体：start = index/total, end = (index+3)/total（3 个词的过渡窗口）。关键词（curiosity/clarity/depth 等）额外用斜体衬线突出。适合 Mission/About 大段文字。",
    tags: ["scroll", "word reveal", "brightness", "useTransform", "progressive"],
    savedAt: "2026-07-07",
  },

  // ── 纯黑白 Liquid Glass 邮箱输入框（来自 Mindloop）──
  {
    id: "monochrome-glass-email-input",
    title: "Monochrome Glass Email Input",
    category: "forms",
    sourceUrl: "https://andrewyy5178.github.io/motionsites-showcase/#/templates/mindloop-landing",
    sourceName: "Mindloop · AndDream",
    html: `<div class="input-wrap"><input placeholder="Enter your email" /><button>SUBSCRIBE</button></div>`,
    css: `
      body { background: black; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; min-height: 100%; }
      .input-wrap {
        display: flex; align-items: center; padding: 8px; border-radius: 999px;
        background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        position: relative; overflow: hidden; width: 420px; max-width: 100%;
      }
      .input-wrap::before {
        content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
        background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }
      input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 14px; padding: 4px 16px; position: relative; }
      input::placeholder { color: rgba(255,255,255,0.3); }
      button { background: white; color: black; border: none; border-radius: 999px; padding: 12px 32px; font-size: 14px; font-weight: 600; cursor: pointer; position: relative; transition: transform 0.2s; }
      button:hover { transform: scale(1.03); }
      button:active { transform: scale(0.98); }
    `,
    notes: "纯黑白 newsletter 订阅框：liquid-glass pill 外壳 + 透明 input + 白色实心 SUBSCRIBE 按钮。与 Email Landing 的暗色版本不同——这个是纯黑底纯白字，按钮用全白实色而非圆形箭头。Framer Motion whileHover scale 1.03 + whileTap scale 0.98 增加反馈感。适合纯黑白设计的订阅 CTA。",
    tags: ["monochrome", "newsletter", "subscribe", "glass", "black white"],
    savedAt: "2026-07-07",
  },
];
