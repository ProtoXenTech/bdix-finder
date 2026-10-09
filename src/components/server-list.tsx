'use client';

import { useState, useMemo } from 'react';
import { BDIX_SERVERS, CATEGORIES, ServerCategory } from '@/data/servers';
import { ServerCard } from './server-card';
import { SpeedTestWidget } from './speed-test';
import { Search, Film, Tv, Trophy, Download, Grid, X, Gauge } from 'lucide-react';

const iconMap = {
  Grid,
  Film,
  Tv,
  Trophy,
  Download,
  Gauge,
};

export function ServerList() {
  const [selectedCategory, setSelectedCategory] = useState<ServerCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServers = useMemo(() => {
    return BDIX_SERVERS.filter((server) => {
      const matchesCategory =
        selectedCategory === 'all' || server.category === selectedCategory;
      const matchesSearch =
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (server.providerIsp &&
          server.providerIsp.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] || Grid;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        {selectedCategory !== 'speedtest' && (
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by server name, ISP, or keyword..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-9 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Render Speed Test Widget if Speed Test Tab is selected */}
      {selectedCategory === 'speedtest' ? (
        <SpeedTestWidget />
      ) : (
        <>
          {/* Results Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing{' '}
              <strong className="text-white font-semibold">
                {filteredServers.length}
              </strong>{' '}
              servers {selectedCategory !== 'all' ? `in ${selectedCategory.toUpperCase()}` : ''}
            </span>
            {searchQuery && (
              <span>
                Filtering by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Server Grid */}
          {filteredServers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServers.map((server) => (
                <ServerCard key={server.id} server={server} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center">
              <p className="text-slate-400 text-base mb-2">
                No BDIX servers match your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-semibold text-emerald-400 hover:underline"
              >
                Clear filters & show all servers
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
