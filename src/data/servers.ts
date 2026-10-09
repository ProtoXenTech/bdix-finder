export type ServerCategory = 'all' | 'ftp' | 'tv' | 'sports' | 'software';

export interface BdixServer {
  id: string;
  name: string;
  url: string;
  category: 'ftp' | 'tv' | 'sports' | 'software';
  description: string;
  badge?: string;
  featured?: boolean;
  ispNote?: string;
  mirrorUrls?: string[];
}

export const CATEGORIES: { id: ServerCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'All Servers', icon: 'Grid' },
  { id: 'ftp', label: 'Movies & Series FTP', icon: 'Film' },
  { id: 'tv', label: 'Live TV & IPTV', icon: 'Tv' },
  { id: 'sports', label: 'Live Sports', icon: 'Trophy' },
  { id: 'software', label: 'Software & ISOs', icon: 'Download' },
];

export const BDIX_SERVERS: BdixServer[] = [
  // Top Featured FTP / Movies
  {
    id: 'ftpbd-net',
    name: 'FTPBD (Business Network)',
    url: 'http://ftpbd.net',
    category: 'ftp',
    description: 'Top-tier BDIX FTP server featuring massive collections of HD movies, TV shows, and games.',
    badge: '⭐ Top 1',
    featured: true,
    mirrorUrls: ['http://103.58.73.6', 'http://server1.ftpbd.net'],
  },
  {
    id: 'circus-ftp',
    name: 'Circle Network (Circus FTP)',
    url: 'http://circleftp.net',
    category: 'ftp',
    description: 'One of Bangladesh’s largest BDIX FTP platforms with high-speed movie and series streaming.',
    badge: '⭐ Top 2',
    featured: true,
    mirrorUrls: ['http://new.circleftp.net', 'http://103.170.204.84'],
  },
  {
    id: 'samonline-ftp',
    name: 'SamOnline FTP',
    url: 'http://ftp.samonline.com.bd',
    category: 'ftp',
    description: 'High-speed media server with 4K movies, series, software, and anime archives.',
    badge: '⭐ Top 3',
    featured: true,
    mirrorUrls: ['https://samftp.com', 'http://172.16.50.4'],
  },
  {
    id: 'khulnaflix',
    name: 'KhulnaFlix (Cogent Broadband)',
    url: 'http://khulnaflix.net',
    category: 'ftp',
    description: 'Popular regional and national BDIX FTP portal with ultra-fast streaming.',
    badge: 'Popular',
    featured: true,
    mirrorUrls: ['http://bokasoka.net'],
  },
  {
    id: 'discovery-ftp',
    name: 'Discovery FTP',
    url: 'http://discoveryftp.net',
    category: 'ftp',
    description: 'Discovery Network BDIX media portal with multi-mirror fast playback.',
    badge: 'Fast Mirror',
    featured: true,
    mirrorUrls: ['http://dflix.discoveryftp.net', 'http://cds1.discoveryftp.net'],
  },
  {
    id: 'showtime-bd',
    name: 'Showtime BD (One Sky / OneNet)',
    url: 'http://www.showtimebd.com',
    category: 'ftp',
    description: 'Dedicated entertainment server for OneNet and OneSky broadband subscribers.',
    featured: true,
  },
  {
    id: 'ctgmovies',
    name: 'CtgMovies (Digital Dot Net)',
    url: 'http://ctgmovies.com',
    category: 'ftp',
    description: 'Chittagong region BDIX entertainment portal with vast film archives.',
    badge: 'CTG Region',
  },
  {
    id: 'ebox-live',
    name: 'E-Box Live (Exord Online)',
    url: 'http://fs.ebox.live',
    category: 'ftp',
    description: 'High-bandwidth file server and online media streaming directory.',
    featured: true,
  },
  {
    id: 'dhakamovie',
    name: 'DhakaMovie (Antaranga)',
    url: 'http://dhakamovie.com',
    category: 'ftp',
    description: 'Antaranga Dot Com BDIX portal for movies, drama, and TV shows.',
  },
  {
    id: 'nagordola',
    name: 'Nagordola (Carnival Internet)',
    url: 'http://www.nagordola.com.bd',
    category: 'ftp',
    description: 'Carnival Broadband BDIX media hub with bufferless local streaming.',
    badge: 'Carnival',
    featured: true,
  },
  {
    id: 'ihub-live',
    name: 'iHub Live (Inspire Broadband)',
    url: 'http://ihub.live',
    category: 'ftp',
    description: 'Inspire Broadband media and game download server.',
  },
  {
    id: 'moviedom-race',
    name: 'Moviedom / MovieHaat (Race Online)',
    url: 'http://moviedom.live',
    category: 'ftp',
    description: 'Race Online Ltd BDIX media streaming and file sharing server.',
    badge: 'Race Net',
    featured: true,
    mirrorUrls: ['http://moviehaat.net'],
  },
  {
    id: 'dflix-dot',
    name: 'DFlix (Dot Internet)',
    url: 'http://dflix.live',
    category: 'ftp',
    description: 'Dot Internet BDIX entertainment hub with fast movie playback.',
  },
  {
    id: 'mazeda-ftp',
    name: 'Mazeda Network FTP',
    url: 'http://ftpweb.mazedanetworks.net',
    category: 'ftp',
    description: 'Mazeda Networks local BDIX file and movie server.',
  },

  // Live TV & IPTV
  {
    id: 'jagobd-tv',
    name: 'JagoBD Live TV',
    url: 'http://www.jagobd.com',
    category: 'tv',
    description: 'Premier Bangladeshi live television streaming channel directory.',
    badge: 'Live TV',
    featured: true,
  },
  {
    id: 'samonline-tv',
    name: 'SamOnline IPTV',
    url: 'http://tv.samonline.com.bd',
    category: 'tv',
    description: 'Live HD Bangladeshi, Indian, and International TV channels over BDIX.',
    featured: true,
  },
  {
    id: 'bdix-tv-net',
    name: 'BDIX TV Network',
    url: 'http://bdixtv.net',
    category: 'tv',
    description: 'Low-latency live TV streaming optimized for BDIX broadband users.',
  },

  // Live Sports
  {
    id: 'toffee-sports',
    name: 'Toffee Live Sports',
    url: 'https://toffeelive.com',
    category: 'sports',
    description: 'Official sports and live cricket streaming portal in Bangladesh.',
    badge: 'HD Sports',
    featured: true,
  },
  {
    id: 'tsports-live',
    name: 'T-Sports Web',
    url: 'https://www.tsports.com',
    category: 'sports',
    description: 'Live coverage of Bangladesh national cricket matches and sports leagues.',
    featured: true,
  },

  // Software & ISOs
  {
    id: 'natural-bd',
    name: 'NaturalBD Software (X-Press Tech)',
    url: 'http://www.naturalbd.com',
    category: 'software',
    description: 'Fast BDIX mirror for PC software, games, and OS ISO images.',
    featured: true,
  },
  {
    id: 'samonline-soft',
    name: 'SamOnline Software Hub',
    url: 'http://software.samonline.com.bd',
    category: 'software',
    description: 'Dedicated software archive with high-bandwidth BDIX downloads.',
  },
  {
    id: 'ihub-games',
    name: 'iHub Games & Software',
    url: 'http://sg-cdn.ihub.live:8787/download/games',
    category: 'software',
    description: 'High-speed game installer downloads over BDIX peering.',
  },
];
