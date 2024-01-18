'use client';

import { Computer } from 'lucide-react';

import { UserInfo } from '@/components/user-info';
import { useCurrentUser } from '@/hooks/use-current-user';

export default function ClientPage() {
  const user = useCurrentUser();

  return <UserInfo icon={Computer} label='Client component' user={user} />;
}
