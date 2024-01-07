'use server';

import * as z from 'zod';

import { SignInSchema } from '@/schemas';

export async function signIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
}
