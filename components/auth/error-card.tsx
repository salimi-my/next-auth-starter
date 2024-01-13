import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { CardWrapper } from '@/components/auth/card-wrapper';

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonLabel='Back to sign in'
      backButtonHref='/auth/sign-in'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive w-16 h-auto' />
      </div>
    </CardWrapper>
  );
}
