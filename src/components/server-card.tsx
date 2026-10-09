'use client';

import { useState } from 'react';
import { BdixServer } from '@/data/servers';
import { ExternalLink, Copy, Check, Radio, Layers } from 'lucide-react';

interface ServerCardProps {
  server: BdixServer;
}

export function ServerCard({ server }: ServerCardProps) {
  const [copied, setCopied] = useState(false);
  const [pingStatus, setPingStatus] = useState<'idle' | 'testing' | 'online' | 'offline'>('idle');
  const [pingMs, setPingMs] = useState<number | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const testPing = () => {
    setPingStatus('testing');
    const startTime = performance.now();
    const img = new Image();

    const timeout = setTimeout(() => {
      setPingStatus('offline');
      setPingMs(null);
    }, 4000);

    img.onload = img.onerror = () => {
      clearTimeout(timeout);
      const elapsed = Math.round(performance.now() - startTime);
      setPingMs(elapsed);
      setPingStatus('online');
    };

    // Append timestamp to prevent cached responses
    img.src = `${server.url}/favicon.ico?t=${Date.now()}`;
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-slate-900/80 border border-slate-800 p-5 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-200 shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition">
              {server.name}
            </h3>
            {server.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">
                {server.badge}
              </span>
            )}
          </div>

          {/* Ping status badge */}
          <button
            onClick={testPing}
            title="Click to test ping"
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-mono bg-slate-950/80 border border-slate-700/60 text-slate-300 hover:border-slate-600 transition shrink-0"
          >
            <Radio
              className={`w-3.5 h-3.5 ${
                pingStatus === 'testing'
                  ? 'text-amber-400 animate-spin'
                  : pingStatus === 'online'
                  ? 'text-emerald-400'
                  : pingStatus === 'offline'
                  ? 'text-rose-400'
                  : 'text-slate-500'
              }`}
            />
            <span>
              {pingStatus === 'idle' && 'Test Ping'}
              {pingStatus === 'testing' && 'Checking...'}
              {pingStatus === 'online' && `${pingMs}ms`}
              {pingStatus === 'offline' && 'Offline'}
            </span>
          </button>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {server.description}
        </p>

        {/* Mirror URLs Pill */}
        {server.mirrorUrls && server.mirrorUrls.length > 0 && (
          <div className="mb-4 flex items-center gap-2 flex-wrap text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
            <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-semibold text-slate-300">Mirrors:</span>
            {server.mirrorUrls.map((mirror, idx) => (
              <a
                key={idx}
                href={mirror}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-mono"
              >
                Mirror {idx + 1}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80 mt-auto">
        <a
          href={server.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition"
        >
          <span>Visit Server</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => handleCopy(server.url)}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition"
          title="Copy URL"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
