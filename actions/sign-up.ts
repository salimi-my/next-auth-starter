'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { db } from '@/lib/db';
import { SignUpSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields.' };
  }

  const { email, password, name } = validatedFields.data;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already exist.' };
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  if (!newUser || !newUser.email) {
    return { error: 'Oops! Something went wrong.' };
  }

  const verificationToken = await generateVerificationToken(newUser.id);

  await sendVerificationEmail(
    newUser.name,
    newUser.email,
    verificationToken.token
  );

  return {
    success: 'Sign up successful. Check your email to verify.'
  };
}
