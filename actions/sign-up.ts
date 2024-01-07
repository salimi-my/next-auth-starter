'use server';

import * as z from 'zod';

import { SignUpSchema } from '@/schemas';

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
}
