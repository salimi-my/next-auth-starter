'use client';

import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { UserButton } from '@/components/auth/user-button';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='w-full h-16 border-b flex items-center px-4'>
      <Link href='/server' className='flex items-center mr-8'>
        <ShieldCheck strokeWidth={2.5} className='mr-1 w-8 h-auto' />
        <h1 className='text-2xl font-bold'>Auth</h1>
      </Link>
      <div className='flex items-center space-x-6'>
        <Link
          href='/server'
          className={cn(
            'text-sm font-semibold transition-colors hover:text-primary',
            pathname !== '/server' && 'text-muted-foreground'
          )}
        >
          Server
        </Link>
        <Link
          href='/client'
          className={cn(
            'text-sm font-semibold transition-colors hover:text-primary',
            pathname !== '/client' && 'text-muted-foreground'
          )}
        >
          Client
        </Link>
        <Link
          href='/admin'
          className={cn(
            'text-sm font-semibold transition-colors hover:text-primary',
            pathname !== '/admin' && 'text-muted-foreground'
          )}
        >
          Admin
        </Link>
        <Link
          href='/settings'
          className={cn(
            'text-sm font-semibold transition-colors hover:text-primary',
            pathname !== '/settings' && 'text-muted-foreground'
          )}
        >
          Settings
        </Link>
      </div>
      <div className='ml-auto flex items-center space-x-4'>
        <UserButton />
      </div>
    </nav>
  );
}
