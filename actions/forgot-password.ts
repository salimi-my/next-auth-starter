'use server';

import * as z from 'zod';

import { getUserByEmail } from '@/data/user';
import { ForgotPasswordSchema } from '@/schemas';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export async function forgotPassword(
  values: z.infer<typeof ForgotPasswordSchema>
) {
  const validatedFields = ForgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid email.' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'Email does not exist.' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    existingUser.name,
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: 'Reset link sent to your email.' };
}
