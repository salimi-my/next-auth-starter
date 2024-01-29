'use server';

import { db } from '@/lib/db';
import { getUserById } from '@/data/user';
import { getVerificationTokenByToken } from '@/data/verification-token';

export async function emailVerification(token: string) {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token does not exist.' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has expired.' };
  }

  const existingUser = await getUserById(existingToken.userId);

  if (!existingUser) {
    return { error: 'Email does not exist.' };
  }

  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.isUpdateEmail ? existingUser.tempEmail : undefined,
      tempEmail: existingToken.isUpdateEmail ? null : undefined
    }
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id
    }
  });

  return { success: 'Email successfully verified. You can now sign in.' };
}
