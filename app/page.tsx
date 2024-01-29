import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@/components/auth/sign-in-button';

export default function HomePage() {
  return (
    <>
      <main className='flex h-full min-h-[calc(100vh_-_36px_-_48px)] flex-col items-center justify-center'>
        <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
          <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
            <Link href='/' className='flex items-center mb-5'>
              <ShieldCheck
                strokeWidth={2.5}
                className='mr-1 w-10 md:w-14 lg:w-16 h-auto'
              />
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                Auth
              </h1>
            </Link>
            <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              An example authentication app built using Auth.js
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8'>
              This is a complete authentication example app built with Next.js
              14 and Auth.js using the latest server actions.
            </p>
            <div className='space-x-4 mt-5'>
              <SignInButton mode='redirect' asChild>
                <Button variant='default' size='lg'>
                  Sign in <ArrowRightIcon className='ml-2' />
                </Button>
              </SignInButton>
              <Button variant='secondary' size='lg' asChild>
                <Link
                  href='https://github.com/salimi-my/next-auth-starter'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
