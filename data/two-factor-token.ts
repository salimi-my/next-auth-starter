import { db } from '@/lib/db';

export async function getTwoFactorTokenByToken(token: string) {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        token
      }
    });

    return twoFactorToken;
  } catch {
    return null;
  }
}

export async function getTwoFactorTokenByEmail(email: string) {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: {
        email
      }
    });

    return twoFactorToken;
  } catch {
    return null;
  }
}
