import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bdix-finder.vercel.app'),
  title: {
    default: 'BDIX Finder | Bangladesh ISP, BDIX Tester & FTP Server Directory 2026',
    template: '%s | BDIX Finder — ProtoXen',
  },
  description:
    'Free live BDIX peering status checker, ISP network detector, bandwidth speed tester, and curated directory of 25+ active Bangladesh BDIX FTP servers, Live IPTV, Sports, and Software mirrors.',
  applicationName: 'BDIX Finder',
  authors: [{ name: 'ProtoXen Engine', url: 'https://protoxen.com/' }],
  generator: 'Next.js 15',
  keywords: [
    'BDIX',
    'BDIX Tester',
    'BDIX FTP Server List 2026',
    'BDIX Speed Test',
    'Bangladesh ISP',
    'Circus FTP',
    'FTPBD',
    'SamOnline FTP',
    'KhulnaFlix',
    'Discovery FTP',
    'Dhaka Movie FTP',
    'BDIX TV Live',
    'BDIX IP Check',
    'BDIX Movie Server',
    'Bangladesh Internet Exchange',
  ],
  alternates: {
    canonical: 'https://bdix-finder.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bdix-finder.vercel.app',
    title: 'BDIX Finder | Bangladesh ISP & FTP Server Directory 2026',
    description:
      'Check your Bangladesh internet connection, BDIX peering status, run BDIX speed test, and discover curated high-speed FTP servers.',
    siteName: 'BDIX Finder by ProtoXen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDIX Finder | Bangladesh ISP & FTP Directory 2026',
    description:
      'Live BDIX tester, ISP detector, speed test, and directory of active BD FTP & IPTV servers.',
    creator: '@ProtoXenTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
