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
    html: `<div class="overlay" id="overlay"><div class="sheet"><div class="time-row"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>14:32 in Beijing</span></div><a>Projects</a><a>Studio</a><a>Journal</a><a>Connect</a><button>Start a project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div></div><button class="toggle-btn" id="toggle">Menu</button><script>const btn=document.getElementById('toggle'),overlay=document.getElementById('overlay');let open=false;btn.onclick=()=>{open=!open;overlay.style.display=open?'flex':'none';btn.textContent=open?'Close':'Menu'}</script>`,
    css: `
      body { background: #EFEFEF; display: flex; align-items: center; justify-content: center; font-family: -apple-system, sans-serif; }
      .toggle-btn { background: #111; color: white; border: none; border-radius: 999px; padding: 10px 20px; font-size: 13px; cursor: pointer; }
      .overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); align-items: flex-end; justify-content: center; z-index: 50; font-family: -apple-system, sans-serif; }
      .sheet { background: white; border-radius: 16px 16px 0 0; margin: 0 12px 12px; padding: 24px; width: 100%; display: flex; flex-direction: column; gap: 16px; }
      .time-row { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #555; margin-bottom: 8px; }
      .sheet a { font-size: 28px; font-weight: 500; color: #111; text-decoration: none; }
      .sheet button { display: flex; align-items: center; justify-content: space-between; background: #254E7A; color: white; border: none; border-radius: 999px; padding: 12px 24px; font-size: 14px; margin-top: 8px; cursor: pointer; }
    `,
    notes: "移动端底部滑出抽屉。黑色半透明遮罩 + 白色圆角底部面板。Framer Motion: translateY 从 100% → 0，缓动 cubic-bezier(0.32,0.72,0,1)。遮罩点击关闭。内含时间、大号导航链接（28-32px）、CTA 按钮。",
    tags: ["mobile", "drawer", "bottom sheet", "slide up", "overlay"],
    savedAt: "2026-07-06",
  },
];
