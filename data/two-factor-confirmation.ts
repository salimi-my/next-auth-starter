import { db } from '@/lib/db';

export async function getTwoFactorConfirmationByUserId(userId: string) {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: {
        userId
      }
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
}
