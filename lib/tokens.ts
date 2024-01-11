import { v4 as uuidv4 } from 'uuid';

import { db } from '@/lib/db';
import { getVerificationTokenByEmail } from '@/data/verification-token';

export async function generateVerificationToken(email: string) {
  const token = uuidv4();

  // Expire the token in one hour
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  const verficationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return verficationToken;
}
