import { db } from '@/lib/db';

export async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token
      }
    });

    return verificationToken;
  } catch {
    return null;
  }
}

export async function getVerificationTokenByUserId(userId: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        userId
      }
    });

    return verificationToken;
  } catch {
    return null;
  }
}
