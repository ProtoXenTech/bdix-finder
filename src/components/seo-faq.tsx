import { HelpCircle, ShieldCheck, Zap, Info } from 'lucide-react';

export function SeoFaq() {
  const faqs = [
    {
      question: 'What is BDIX and how do BDIX FTP servers work?',
      answer:
        'BDIX (Bangladesh Internet Exchange) is the national peering hub that connects local Broadband ISPs across Bangladesh. BDIX FTP servers are high-speed media repositories connected directly to BDIX peering nodes, allowing users to stream movies and download files at 50–100+ Mbps without using international internet data.',
    },
    {
      question: 'Why does an FTP server show "Offline" or not open on my phone?',
      answer:
        'Most BDIX FTP servers use private local IP addresses (like 172.x.x.x or 103.x.x.x) that are only accessible through specific broadband ISPs (e.g. Amber IT, Link3, SamOnline, Circle, Carnival). Mobile data (GP, Robi, Banglalink, Teletalk) does not support private BDIX routing.',
    },
    {
      question: 'How do I test if my ISP has BDIX peering?',
      answer:
        'Our Live Connection Overview automatically checks your IP and location. You can also click "Test Ping" on any server card or use our BDIX Speed Test tab to measure real-time peering throughput.',
    },
    {
      question: 'What are the top active BDIX FTP servers in Bangladesh for 2026?',
      answer:
        'Popular nationwide servers include FTPBD (Business Network), Circle FTP (Circle Network), SamOnline FTP, KhulnaFlix, Discovery FTP, Showtime BD, CtgMovies, Nagordola (Carnival), Moviedom (Race Online), and DFlix (Dot Internet).',
    },
  ];

  return (
    <section className="mt-16 border-t border-slate-800/80 pt-12 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base & SEO Guide
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Frequently Asked Questions about BDIX & FTP Servers
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 space-y-2 hover:border-slate-700 transition"
          >
            <h3 className="font-semibold text-white text-base flex items-start gap-2">
              <span className="text-emerald-400 font-mono font-bold shrink-0">
                Q{index + 1}.
              </span>
              <span>{faq.question}</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Verified Peering Status
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Automated client-side IP lookup & latency detection for BD networks.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
          <Zap className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Ultra-Fast Performance
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Built on Next.js 15, Turbopack, and Vercel Edge Runtime CDN.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Curated Directory
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              25+ active BDIX FTP portals, IPTV channels, Sports hubs, and Software mirrors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
