'use client';

interface SignInButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export default function SignInButton({
  children,
  mode = 'redirect',
  asChild
}: SignInButtonProps) {
  const onClick = () => {
    console.log('Sign in button clicked.');
  };

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
}
