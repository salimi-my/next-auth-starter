import {
  Body,
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

interface TwoFactorAuthenticationProps {
  name: string | null;
  token: string;
}

export function TwoFactorAuthentication({
  name,
  token
}: TwoFactorAuthenticationProps) {
  return (
    <Html>
      <Head>
        <title>Two Factor Authentication</title>
      </Head>
      <Preview>
        Enter the following code to finish signing into your account
      </Preview>
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
              continue your account sign in by entering the following code.
            </Text>

            <Section className='p-6 border-solid border border-gray-300 rounded-md text-center'>
              <Text className='m-0 mb-3 text-left'>
                Greeting from <strong>Next Auth Starter</strong>!
              </Text>
              <Text className='m-0 mb-3 text-left'>
                Someone recently try to sign in to your Next Auth Starter
                account. If this was you, please use below code to continue sign
                in.
              </Text>

              <Text className='inline-flex py-2 px-5 bg-zinc-100 rounded text-center font-bold text-xl'>
                {token}
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
