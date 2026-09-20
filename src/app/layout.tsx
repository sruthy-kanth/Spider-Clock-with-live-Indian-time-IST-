import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spider Clock — Live Indian Standard Time (IST)',
  description: 'An elegant, interactive Spider Clock web application with live IST synchronization, dynamic spider leg inverse kinematics, rotating web gears, and custom themes.',
  keywords: ['Spider Clock', 'Indian Standard Time', 'IST Clock', 'SVG Clock', 'Interactive Art', 'Next.js'],
  authors: [{ name: 'Spider Clock Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
