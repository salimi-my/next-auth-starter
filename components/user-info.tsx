import { LucideIcon } from 'lucide-react';

import { ExtendedUser } from '@/next-auth';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
  icon: LucideIcon;
}

export function UserInfo({ user, label, icon: Icon }: UserInfoProps) {
  return (
    <div className='flex flex-col'>
      <h2 className='text-xl md:text-3xl font-bold tracking-tight pb-4 flex items-center'>
        <Icon className='mr-2 w-6 md:w-8 h-auto' />
        {label}
      </h2>
      <Card className='w-full'>
        <CardHeader>
          <h3 className='font-semibold'>User Information</h3>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex flex-row items-center justify-between rounded-md border px-3 py-1.5'>
            <p className='text-sm font-medium'>ID</p>
            <p className='truncate text-xs max-w-[200px] font-mono px-2 bg-zinc-100 dark:bg-zinc-700 rounded-sm'>
              {user?.id}
            </p>
          </div>
          <div className='flex flex-row items-center justify-between rounded-md border px-3 py-1.5'>
            <p className='text-sm font-medium'>Name</p>
            <p className='truncate text-xs max-w-[200px] font-mono px-2 bg-zinc-100 dark:bg-zinc-700 rounded-sm'>
              {user?.name}
            </p>
          </div>
          <div className='flex flex-row items-center justify-between rounded-md border px-3 py-1.5'>
            <p className='text-sm font-medium'>Email</p>
            <p className='truncate text-xs max-w-[200px] font-mono px-2 bg-zinc-100 dark:bg-zinc-700 rounded-sm'>
              {user?.email}
            </p>
          </div>
          <div className='flex flex-row items-center justify-between rounded-md border px-3 py-1.5'>
            <p className='text-sm font-medium'>Role</p>
            <p className='truncate text-xs max-w-[200px] font-mono px-2 bg-zinc-100 dark:bg-zinc-700 rounded-sm'>
              {user?.role}
            </p>
          </div>

          <div className='flex flex-row items-center justify-between rounded-md border px-3 py-1.5'>
            <p className='text-sm font-medium'>Two Factor Authentication</p>
            <Badge
              variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}
            >
              {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
