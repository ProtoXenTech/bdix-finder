import { ConnectionCard } from '@/components/connection-card';
import { ServerList } from '@/components/server-list';
import { SeoFaq } from '@/components/seo-faq';
import { StructuredData } from '@/components/structured-data';
import { Zap, Layers, Code2, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950">
      <StructuredData />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-lg tracking-tight">
                  BDIX Finder
                </h1>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  v1.0
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Bangladesh Peering & Server Directory
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://protoxen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 text-emerald-400 border border-emerald-500/30 transition"
            >
              <span>ProtoXen</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://vercel.com/protoxen"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vercel</span>
            </a>

            <a
              href="https://github.com/ProtoXenTech/bdix-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition"
            >
              <Code2 className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-12">
        {/* Hero Connection Card */}
        <section>
          <ConnectionCard />
        </section>

        {/* Server Directory Section */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Curated BDIX Server Directory (2026 Active List)
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Browse verified high-bandwidth BDIX FTP portals, Live IPTV streams, Sports hubs, and Software mirrors.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Cached via Vercel</span>
            </div>
          </div>

          <ServerList />
        </section>

        {/* SEO Knowledge Base & FAQs */}
        <SeoFaq />
      </main>

      {/* Branded Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <a
              href="https://protoxen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold transition"
            >
              <span>ProtoXen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-400">
              Engineered & Maintained by <a href="https://protoxen.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 underline decoration-slate-700 underline-offset-4 font-semibold transition">ProtoXen Engine</a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with Next.js 15 & Vercel Edge</span>
            <span>•</span>
            <p>© 2026 BDIX Finder. Crafted for Bangladesh Internet Community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
