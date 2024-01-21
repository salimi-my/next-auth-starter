'use client';

import { UserCog } from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UpdateProfileForm from '@/components/auth/update-profile-form';
import UpdatePasswordForm from '@/components/auth/update-password-form';

export default function SettingsPage() {
  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight pb-4 flex items-center'>
        <UserCog className='mr-2 w-8 h-auto' />
        Settings
      </h2>
      <Card className='w-[600px]'>
        <CardHeader>
          <h3 className='font-semibold'>Update Profile</h3>
        </CardHeader>
        <CardContent>
          <UpdateProfileForm />
        </CardContent>
      </Card>
      <Card className='w-[600px] mt-6'>
        <CardHeader>
          <h3 className='font-semibold'>Update Password</h3>
        </CardHeader>
        <CardContent>
          <UpdatePasswordForm />
        </CardContent>
      </Card>
    </>
  );
}
