'use server';

import { UserRole } from '@prisma/client';

import { currentRole } from '@/lib/authentication';

export async function admin() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: 'Allowed Server Action!' };
  }

  return { error: 'Forbidden Server Action!' };
}
