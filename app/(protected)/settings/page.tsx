import { UserCog } from 'lucide-react';

import { currentUser } from '@/lib/authentication';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UpdateProfileForm from '@/components/auth/update-profile-form';
import UpdatePasswordForm from '@/components/auth/update-password-form';

export default async function SettingsPage() {
  const user = await currentUser();

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold tracking-tight pb-4 flex items-center'>
        <UserCog className='mr-2 w-6 md:w-8 h-auto' />
        Settings
      </h2>
      <Card className='w-full'>
        <CardHeader>
          <h3 className='font-semibold'>Update Profile</h3>
        </CardHeader>
        <CardContent>
          <UpdateProfileForm />
        </CardContent>
      </Card>
      {user?.isOAuth === false && (
        <Card className='w-full mt-6'>
          <CardHeader>
            <h3 className='font-semibold'>Update Password</h3>
          </CardHeader>
          <CardContent>
            <UpdatePasswordForm />
          </CardContent>
        </Card>
      )}
    </>
  );
}
