'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { SignInSchema } from '@/schemas';
import { signIn as authSignIn } from '@/auth';
import { DEFAULT_SIGNIN_REDIRECT } from '@/routes';

export async function signIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields.' };
  }

  const { email, password, code } = validatedFields.data;

  try {
    await authSignIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_SIGNIN_REDIRECT
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Incorrect email or password.' };
        default:
          return { error: 'Oops! Something went wrong.' };
      }
    }

    throw error;
  }
}
