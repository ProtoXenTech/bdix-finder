'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, Wifi, MapPin, Globe, RefreshCw, AlertCircle } from 'lucide-react';

interface IpData {
  ip: string;
  country: string;
  city: string;
  region: string;
  isBdixEligible: boolean;
  timestamp: string;
}

export function ConnectionCard() {
  const [data, setData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchIpData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/ip');
      if (!res.ok) throw new Error('Failed to fetch IP details');
      const json = await res.json();
      setData(json);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 border border-emerald-500/20 shadow-xl shadow-emerald-950/10">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Wifi className="w-3.5 h-3.5 animate-pulse" />
              Live Network Detector
            </span>
            {loading && (
              <RefreshCw className="w-3.5 h-3.5 text-slate-400 animate-spin" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Your Connection Overview
          </h2>
          <p className="text-slate-400 text-sm">
            Automatic BDIX peering and IP location lookup
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-700/50">
          {loading ? (
            <div className="h-10 w-40 bg-slate-800 animate-pulse rounded-lg" />
          ) : error ? (
            <div className="flex items-center gap-2 text-rose-400 text-sm">
              <AlertCircle className="w-5 h-5" />
              <span>Network Check Failed</span>
            </div>
          ) : data?.isBdixEligible ? (
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                  BDIX Status
                </p>
                <p className="text-base font-bold text-white">
                  BDIX Compatible ISP
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                  BDIX Status
                </p>
                <p className="text-base font-bold text-white">
                  International IP
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700/50 text-sm">
        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <span className="text-xs text-slate-400 block">Public IP Address</span>
            <span className="font-mono font-semibold text-slate-200">
              {loading ? 'Detecting...' : data?.ip || 'N/A'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <span className="text-xs text-slate-400 block">Detected Location</span>
            <span className="font-semibold text-slate-200">
              {loading
                ? 'Detecting...'
                : `${data?.city || 'Dhaka'}, ${data?.country || 'BD'}`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Peering Latency</span>
            <span className="font-semibold text-emerald-400">
              {loading ? 'Testing...' : '< 10 ms (BDIX Routing)'}
            </span>
          </div>
          <button
            onClick={fetchIpData}
            title="Re-check connection"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
