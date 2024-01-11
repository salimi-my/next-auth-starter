import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.APP_URL;

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'Next Auth Starter <confirmation@auth.salimi.my>',
    to: [email],
    subject: 'Email Verification',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
  });
}
