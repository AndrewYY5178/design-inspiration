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
        position: relative;
        padding: 12px 48px;
        border: none;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 500;
        font-family: -apple-system, sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: white;
        cursor: pointer;
        background: linear-gradient(123deg, #18011F 7%, #254E7A 37%, #4A78B0 72%, #1A1A1A 100%);
        box-shadow:
          0px 4px 4px rgba(37,78,122,0.25),
          inset 4px 4px 12px #254E7A;
        outline: 2px solid white;
        outline-offset: -3px;
        transition: opacity 0.2s ease;
      }
      button:hover { opacity: 0.8; }
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
];
