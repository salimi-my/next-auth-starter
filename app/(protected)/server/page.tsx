import { UserInfo } from '@/components/user-info';
import { currentUser } from '@/lib/authentication';

export default async function ServerPage() {
  const user = await currentUser();

  return <UserInfo label='💻 Server component' user={user} />;
}
