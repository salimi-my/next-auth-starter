import { CardWrapper } from '@/components/auth/card-wrapper';

export function SignInForm() {
  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Dont't have an account?"
      backButtonHref='/auth/sign-up'
      showSocial
    >
      SignInForm
    </CardWrapper>
  );
}
