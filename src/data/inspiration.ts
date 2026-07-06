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
];
