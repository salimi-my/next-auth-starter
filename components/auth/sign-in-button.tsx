'use client';

import { useRouter } from 'next/navigation';

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
    return <span>Modal to be created</span>;
  }

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
}