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
}

export const CATEGORIES: { id: ServerCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'All Servers', icon: 'Grid' },
  { id: 'ftp', label: 'Movies & Series FTP', icon: 'Film' },
  { id: 'tv', label: 'Live TV & IPTV', icon: 'Tv' },
  { id: 'sports', label: 'Live Sports', icon: 'Trophy' },
  { id: 'software', label: 'Software & ISOs', icon: 'Download' },
];

export const BDIX_SERVERS: BdixServer[] = [
  // FTP / Movies
  {
    id: 'circus-ftp',
    name: 'Circus FTP',
    url: 'http://circleftp.net',
    category: 'ftp',
    description: 'Popular high-speed movie and TV show server with wide ISP BDIX peering.',
    badge: 'Popular',
    featured: true,
  },
  {
    id: 'samonline-ftp',
    name: 'SamOnline FTP',
    url: 'http://ftp.samonline.com.bd',
    category: 'ftp',
    description: 'Extensive library of HD movies, 4K releases, and web series.',
    badge: 'BDIX Core',
    featured: true,
  },
  {
    id: 'dhaka-ftp',
    name: 'Dhaka FTP',
    url: 'http://dhakaftp.com',
    category: 'ftp',
    description: 'Fast streaming and downloading portal for Bangla, Hindi, and English movies.',
    featured: true,
  },
  {
    id: 'ftpbd',
    name: 'FTPBD Media Server',
    url: 'http://ftpbd.com',
    category: 'ftp',
    description: 'Clean user interface with instant bufferless video streaming.',
  },
  {
    id: 'roarbd',
    name: 'RoarBD Media Hub',
    url: 'http://roarbd.com',
    category: 'ftp',
    description: 'Dedicated high-speed BDIX movie portal for fast downloads.',
  },
  {
    id: 'crazyctg',
    name: 'CrazyCTG FTP',
    url: 'http://crazyctg.com',
    category: 'ftp',
    description: 'Chittagong BDIX peering FTP server with massive video archive.',
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
    name: 'NaturalBD Software',
    url: 'http://naturalbd.com',
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
];
