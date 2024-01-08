'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { SignUpSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

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

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return { success: 'User created.' };
}
