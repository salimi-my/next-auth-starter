'use client';

import { signOut } from '@/actions/sign-out';

interface SignOutButtonProps {
  children?: React.ReactNode;
}

export function SignOutButton({ children }: SignOutButtonProps) {
  return (
    <span onClick={() => signOut()} className='cursor-pointer'>
      {children}
    </span>
  );
}
