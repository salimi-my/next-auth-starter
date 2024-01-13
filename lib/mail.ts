import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.APP_URL;

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${domain}/auth/email-verification?token=${token}`;

  await resend.emails.send({
    from: 'Next Auth Starter <confirmation@auth.salimi.my>',
    to: [email],
    subject: 'Email Verification',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${domain}/auth/reset-password?token=${token}`;

  await resend.emails.send({
    from: 'Next Auth Starter <reset@auth.salimi.my>',
    to: [email],
    subject: 'Password Reset',
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
  });
}

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await resend.emails.send({
    from: 'Next Auth Starter <2fa@auth.salimi.my>',
    to: [email],
    subject: 'Two Factor Authentication Code',
    html: `<p>Your 2FA code: ${token}</p>`
  });
}
