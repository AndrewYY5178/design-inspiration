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
    html: `<p>With more than five years of experience in design, we focus on branding, web design, and AI‑powered experiences.</p>`,
    css: `
      body {
        background: #111;
        color: #D7E2EA;
        font-family: -apple-system, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      p {
        font-size: clamp(1rem, 2vw, 1.35rem);
        font-weight: 500;
        text-align: center;
        line-height: 1.6;
        max-width: 560px;
      }
      /* 每个字符 opacity 0.2 → 1，由 JS 控制 */
      p span {
        transition: opacity 0.3s ease;
      }
    `,
    notes: "用 Framer Motion useScroll + useTransform，每个字符根据其在文本中的位置映射到滚动进度：progress 越过字符位置时，opacity 从 0.2 平滑过渡到 1。关键是 offset: ['start 0.8', 'end 0.2'] 让动画在元素进入视口时触发。适合 About / 介绍段落。",
    tags: ["scroll-driven", "character animation", "opacity", "fade in", "Framer Motion"],
    savedAt: "2026-07-06",
  },
];
