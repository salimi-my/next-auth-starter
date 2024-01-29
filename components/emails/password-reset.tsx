import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from '@react-email/components';

const baseUrl = process.env.AUTH_URL;

interface PasswordResetProps {
  name: string | null;
  resetLink: string;
}

export function PasswordReset({ name, resetLink }: PasswordResetProps) {
  return (
    <Html>
      <Head>
        <title>Password Reset</title>
      </Head>
      <Preview>Reset your Next Auth Starter account password</Preview>
      <Tailwind>
        <Body className='bg-white text-gray-900 font-sans'>
          <Container className='max-w-[480px] my-0 mx-auto pt-5 pb-12 px-0'>
            <Link href={baseUrl} className='flex items-center text-gray-800'>
              <Img
                src={`${baseUrl}/shield-check.png`}
                width='32'
                height='32'
                className='mr-1 -ml-1'
                alt='Auth'
              />
              <Heading as='h1' className='text-3xl font-bold m-0'>
                Auth
              </Heading>
            </Link>

            <Text className='text-xl'>
              Hi <strong>{typeof name === 'string' ? name : 'User'}</strong>,
              your account has requested for password change.
            </Text>

            <Section className='p-6 border-solid border border-gray-300 rounded-md text-center'>
              <Text className='m-0 mb-3 text-left'>
                Greeting from <strong>Next Auth Starter</strong>!
              </Text>
              <Text className='m-0 mb-3 text-left'>
                Someone recently requested a password change for your Next Auth
                Starter account. If this was you, please click the button below
                to set a new password.
              </Text>

              <Button
                href={resetLink}
                className='text-sm font-semibold bg-gray-900 rounded-md text-white py-2 px-6'
              >
                Reset Password
              </Button>

              <Text className='m-0 my-3 text-left'>
                If you don&apos;t want to change your password or didn&apos;t
                request this, just ignore and delete this message.
              </Text>
            </Section>

            <Text className='text-gray-500 text-xs text-center mt-5'>
              <Link
                href='https://github.com/salimi-my/next-auth-starter'
                className='text-gray-500 font-semibold'
              >
                Next Auth Starter
              </Link>
              ・ Created by{' '}
              <Link
                href='https://www.salimi.my'
                className='underline text-gray-500 underline-offset-2'
              >
                Salimi
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
