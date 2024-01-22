'use server';

import { db } from '@/lib/db';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/authentication';
import { getVerificationTokenByUserId } from '@/data/verification-token';

export async function cancelNewEmail() {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized.' };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: 'Unauthorized.' };
  }

  await db.user.update({
    where: {
      id: dbUser.id
    },
    data: {
      tempEmail: null
    }
  });

  const existingToken = await getVerificationTokenByUserId(dbUser.id);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  return { success: 'Email update canceled.' };
}
