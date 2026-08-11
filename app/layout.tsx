import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

const appUrl = process.env.APP_URL || 'https://base.org';

export const metadata: Metadata = {
  title: 'Base Node & Mini App Suite',
  description: 'Interactive Base Mini App built with Farcaster MiniApp SDK and OnchainKit, featuring 200ms Flashblocks testing, Base Node RPC monitoring, and Account Association tools.',
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: `${appUrl}/hero.png`,
      button: {
        title: 'Launch Base Suite',
        action: {
          type: 'launch_miniapp',
          name: 'Base Suite',
          url: appUrl,
          splashImageUrl: `${appUrl}/splash.png`,
          splashBackgroundColor: '#0052FF',
        },
      },
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-slate-50 text-slate-800 antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

