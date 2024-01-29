import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import './globals.css';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.AUTH_URL
      ? `${process.env.AUTH_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: 'Auth — Next.js 14 Authentication Example',
  description:
    'This is a complete authentication example app built with Next.js 14 and Auth.js using the latest server actions.',
  openGraph: {
    url: '/',
    title: 'Auth — Next.js 14 Authentication Example',
    description:
      'This is a complete authentication example app built with Next.js 14 and Auth.js using the latest server actions.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auth — Next.js 14 Authentication Example',
    description:
      'This is a complete authentication example app built with Next.js 14 and Auth.js using the latest server actions.'
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang='en' suppressHydrationWarning>
        <body className={cn('relative', inter.className)}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='w-full flex justify-end pt-4 pr-4'>
              <ModeToggle />
            </div>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
