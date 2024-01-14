'use client';

import { UserInfo } from '@/components/user-info';
import { useCurrentUser } from '@/hooks/use-current-user';

export default function ClientPage() {
  const user = useCurrentUser();

  return <UserInfo label='📱 Client component' user={user} />;
}
