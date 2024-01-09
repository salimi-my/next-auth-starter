import { auth, signOut } from '@/auth';

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button type='submit'>Sign out</button>
      </form>
    </div>
  );
}
