import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { CardWrapper } from '@/components/auth/card-wrapper';

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      footerLabel='Go back.'
      footerHref='/auth/sign-in'
      footerDesc='Back to sign in'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive w-16 h-auto' />
      </div>
    </CardWrapper>
  );
}
