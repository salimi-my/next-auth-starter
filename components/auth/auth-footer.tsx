import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface AuthFooterProps {
  href: string;
  label: string;
  description: string;
}

export function AuthFooter({ href, label, description }: AuthFooterProps) {
  return (
    <div className='flex items-center'>
      <p className='text-muted-foreground text-xs'>{description}</p>
      <Button variant='link' className='p-0 pl-1.5' size='sm' asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}
