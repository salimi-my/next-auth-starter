'use client';

import { toast } from 'sonner';
import { Lock } from 'lucide-react';
import { UserRole } from '@prisma/client';

import { admin } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AdminPage() {
  const onApiRouteClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('API route allowed.');
      } else {
        toast.error('API route forbidden.');
      }
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  return (
    <div className='flex flex-col'>
      <h2 className='text-xl md:text-3xl font-bold tracking-tight pb-4 flex items-center'>
        <Lock className='mr-2 w-6 md:w-8 h-auto' />
        Admin
      </h2>
      <Card className='w-full'>
        <CardHeader>
          <h3 className='font-semibold'>Admin-only Information</h3>
        </CardHeader>
        <CardContent className='space-y-4'>
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSuccess message='You are allowed to see this content.' />
          </RoleGate>
          <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between rounded-lg border p-2'>
            <p className='text-sm font-medium'>Admin-only API Route</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>

          <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between rounded-lg border p-2'>
            <p className='text-sm font-medium'>Admin-only Server Action</p>
            <Button onClick={onServerActionClick}>Click to test</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
