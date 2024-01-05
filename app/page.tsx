import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@/components/auth/sign-in-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
});

export default function HomePage() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className='text-white text-lg'>A simple authentication service</p>
        <div>
          <SignInButton asChild>
            <Button variant='secondary' size='lg'>
              Sign in
            </Button>
          </SignInButton>
        </div>
      </div>
    </main>
  );
}
