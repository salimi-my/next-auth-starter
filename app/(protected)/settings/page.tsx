'use client';

import { signOut } from '@/actions/sign-out';
import { useCurrentUser } from '@/hooks/use-current-user';

export default function SettingsPage() {
  const user = useCurrentUser();

  return (
    <div className='bg-white p-10 rounded-xl'>
      <button type='submit' onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}
