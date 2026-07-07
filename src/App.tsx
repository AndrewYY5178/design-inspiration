import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Search, X, Plus, Maximize2 } from 'lucide-react';
import { inspirationItems, CATEGORIES, type Category, type InspirationItem } from './data/inspiration';

/* ── Live Preview iframe ── */
function LivePreview({ item }: { item: InspirationItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      // Scale down if content overflows
      const w = entry.contentRect.width;
      setScale(w < 280 ? w / 280 : 1);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const srcDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{height:100%}
    body{display:flex;align-items:center;justify-content:center;background:transparent;font-family:-apple-system,sans-serif}
    ${item.css}
  </style></head><body>${item.html}</body></html>`;

  return (
    <div ref={containerRef} className="aspect-[16/10] bg-white overflow-hidden relative group/preview">
      <div
        className="w-full h-full origin-top-left"
        style={{ transform: `scale(${scale})`, width: scale < 1 ? `${100 / scale}%` : '100%', height: scale < 1 ? `${100 / scale}%` : '100%' }}
      >
        <iframe
          srcDoc={srcDoc}
          className="w-full h-full border-0"
          sandbox="allow-scripts"
          title={item.title}
          scrolling="no"
        />
      </div>
      {/* Click to view full page */}
      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 z-10 cursor-pointer"
        title="Open full page">
        <div className="bg-black/60 hover:bg-black/80 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 transition-all opacity-0 group-hover/preview:opacity-100">
          <Maximize2 className="w-3 h-3" strokeWidth={1.5} />
          Full page ↗
        </div>
      </a>
    </div>
  );
}

/* ═══════════════════════ MAIN ═══════════════════════ */
export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = inspirationItems.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch =
      !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      item.notes.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const hasItems = inspirationItems.length > 0;

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <header className="bg-[#111] text-[#FAFAF8] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }} />
        <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 text-sm font-medium text-white/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4A78B0]" strokeWidth={1.5} />
            Design Inspiration · Live Preview
          </div>
          <h1 className="font-[family-name:var(--font-heading),'Playfair Display',serif] text-[clamp(36px,5vw,56px)] font-black tracking-[0.08em] leading-[1.1] mb-3">
            ANDREAM
          </h1>
          <p className="text-white/50 text-lg leading-[1.8] max-w-lg">
            按部件分类收藏喜欢的网页设计。直接在卡片内实时渲染组件，不用截图。
          </p>
        </div>
      </header>

      {/* ── Category tabs ── */}
      <nav className="sticky top-0 z-40 border-b border-black/5" style={{ background: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10 py-3 flex items-center gap-2 flex-wrap">
          <button onClick={() => setActiveCategory('all')} className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-[0.04em] transition-colors duration-300 ${
            activeCategory === 'all' ? 'bg-[#111] text-[#FAFAF8]' : 'bg-transparent text-[#3A3A3A] hover:text-[#111]'
          }`}>
            All{hasItems ? ` (${inspirationItems.length})` : ''}
          </button>
          {CATEGORIES.map((cat) => {
            const count = inspirationItems.filter((i) => i.category === cat.key).length;
            return (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-[0.04em] transition-colors duration-300 ${
                activeCategory === cat.key ? 'bg-[#111] text-[#FAFAF8]' : 'bg-transparent text-[#3A3A3A] hover:text-[#111]'
              }`}>
                {cat.label}{count > 0 ? ` (${count})` : ''}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
          {/* Search */}
          {hasItems && (
            <div className="relative mb-10 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3A3A3A]/40" strokeWidth={1.5} />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, tag, or notes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-[#111] placeholder:text-[#3A3A3A]/40 outline-none focus:border-[#254E7A] transition-colors duration-300" />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-[#3A3A3A]/40" strokeWidth={1.5} />
                </button>
              )}
            </div>
          )}

          {/* Empty */}
          {!hasItems && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(37,78,122,0.06)] flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-[#4A78B0]" strokeWidth={1.5} />
              </div>
              <h2 className="font-[family-name:var(--font-heading),'Playfair Display',serif] text-xl font-bold text-[#111] mb-2 tracking-[0.04em]">
                Start Collecting
              </h2>
              <p className="text-[#3A3A3A] leading-[1.8] max-w-md mx-auto text-sm">
                在 <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">src/data/inspiration.ts</code> 添加条目，<br />
                只需写 <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">html</code> + <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">css</code>，组件会在卡片内实时渲染。<br />
                无需截图。
              </p>
            </div>
          )}

          {/* Grid */}
          {hasItems && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div key={item.id} layout
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}>
                    <div className="rounded-[16px] border border-black/8 bg-white overflow-hidden transition-all duration-500 ease-out"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#254E7A'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}>

                      {/* Live Preview */}
                      <LivePreview item={item} />

                      <div className="p-5">
                        {/* Title + link */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-[family-name:var(--font-heading),'Playfair Display',serif] text-base font-bold tracking-[0.04em] text-[#111] leading-snug">
                            {item.title}
                          </h3>
                          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                            className="text-[#3A3A3A]/30 hover:text-[#254E7A] shrink-0 mt-0.5 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                          </a>
                        </div>

                        {/* Source */}
                        <p className="text-xs text-[#3A3A3A]/50 mb-3">{item.sourceName}</p>

                        {/* Notes */}
                        {item.notes && (
                          <p className="text-sm text-[#3A3A3A] leading-[1.7] mb-3 line-clamp-2">{item.notes}</p>
                        )}

                        {/* Tags */}
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-[0.04em]"
                                style={{ background: 'rgba(37,78,122,0.08)', color: '#254E7A' }}>{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {hasItems && filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#3A3A3A]">No items match.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="text-sm text-[#254E7A] hover:underline mt-2">Clear filters</button>
            </div>
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-black/5 bg-[#FAFAF8] text-center py-8 text-sm text-[#3A3A3A]">
        ANDREAM · Design Inspiration
      </footer>
    </div>
  );
}
