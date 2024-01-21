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

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: 'Email already exist.' };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: 'Confirmation email sent.' };
  }

  const updatedUser = await db.user.update({
    where: {
      id: dbUser.id
    },
    data: {
      name: values.name,
      email: user.isOAuth ? undefined : values.email,
      role: values.role,
      isTwoFactorEnabled: user.isOAuth ? undefined : values.isTwoFactorEnabled
    }
  });

  update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
      role: updatedUser.role
    }
  });

  return { success: 'Profile updated.' };
}
