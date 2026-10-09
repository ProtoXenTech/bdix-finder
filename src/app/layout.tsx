import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'BDIX Finder | ProtoXen — Bangladesh ISP & FTP Directory',
  description:
    'A ProtoXen Web Engineering Project. Check your Bangladesh internet connection, BDIX peering status, and discover curated high-speed BDIX FTP, Live TV, Sports, and Software servers.',
  authors: [{ name: 'ProtoXen', url: 'https://protoxen.com/' }],
  keywords: [
    'ProtoXen',
    'BDIX',
    'BDIX Tester',
    'BDIX FTP List',
    'Bangladesh ISP',
    'Circus FTP',
    'SamOnline',
    'Dhaka FTP',
    'BDIX TV',
  ],
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
