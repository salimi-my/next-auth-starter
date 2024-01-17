'use client';

import { useRouter } from 'next/navigation';

import { SignInForm } from '@/components/auth/sign-in-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface SignInButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export function SignInButton({
  children,
  mode = 'redirect',
  asChild
}: SignInButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/sign-in');
  };

  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className='p-0 w-auto bg-transparent border-none'>
          <SignInForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
}
