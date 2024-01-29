import { Resend } from 'resend';

import { PasswordReset } from '@/components/emails/password-reset';
import { EmailVerification } from '@/components/emails/email-verification';
import { TwoFactorAuthentication } from '@/components/emails/two-factor-authentication';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.AUTH_URL;

export async function sendVerificationEmail(
  name: string | null,
  email: string,
  token: string
) {
  const verifyLink = `${domain}/auth/email-verification?token=${token}`;

  await resend.emails.send({
    from: 'Next Auth Starter <confirmation@auth.salimi.my>',
    to: [email],
    subject: 'Email Verification',
    react: EmailVerification({ name, verifyLink })
  });
}

export async function sendPasswordResetEmail(
  name: string | null,
  email: string,
  token: string
) {
  const resetLink = `${domain}/auth/reset-password?token=${token}`;

  await resend.emails.send({
    from: 'Next Auth Starter <reset@auth.salimi.my>',
    to: [email],
    subject: 'Password Reset',
    react: PasswordReset({ name, resetLink })
  });
}

export async function sendTwoFactorTokenEmail(
  name: string | null,
  email: string,
  token: string
) {
  await resend.emails.send({
    from: 'Next Auth Starter <2fa@auth.salimi.my>',
    to: [email],
    subject: 'Two Factor Authentication Code',
    react: TwoFactorAuthentication({ name, token })
  });
}
