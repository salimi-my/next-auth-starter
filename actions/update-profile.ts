'use server';

import * as z from 'zod';

import { db } from '@/lib/db';
import { update } from '@/auth';
import { UpdateProfileSchema } from '@/schemas';
import { sendVerificationEmail } from '@/lib/mail';
import { currentUser } from '@/lib/authentication';
import { generateVerificationToken } from '@/lib/tokens';
import { getUserByEmail, getUserById } from '@/data/user';

export async function updateProfile(
  values: z.infer<typeof UpdateProfileSchema>
) {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized.' };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: 'Unauthorized.' };
  }

  let updateEmail = false;

  if (values.email && values.email !== user.email) {
    updateEmail = true;
  }

  if (updateEmail) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: 'Email already exist.' };
    }

    const verificationToken = await generateVerificationToken(dbUser.id, true);

    await sendVerificationEmail(
      values.name,
      values.email,
      verificationToken.token
    );
  }

  const updatedUser = await db.user.update({
    where: {
      id: dbUser.id
    },
    data: {
      name: values.name,
      tempEmail: user.isOAuth || !updateEmail ? undefined : values.email,
      role: values.role,
      isTwoFactorEnabled: user.isOAuth ? undefined : values.isTwoFactorEnabled
    }
  });

  update({
    user: {
      name: updatedUser.name,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
      role: updatedUser.role
    }
  });

  return {
    success: !updateEmail
      ? 'Profile updated.'
      : 'Profile updated & verification email sent.'
  };
}
