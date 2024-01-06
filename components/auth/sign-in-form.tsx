'use client';

import * as z from 'zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { SignInSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { CardWrapper } from '@/components/auth/card-wrapper';

export function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {};

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Dont't have an account?"
      backButtonHref='/auth/sign-up'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='name@domain.com'
                      type='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='••••••••' type='password' />
                  </FormControl>
                  <FormMessage />
                  <Button
                    size='sm'
                    variant='link'
                    asChild
                    className='px-0 font-normal'
                  >
                    <Link href='/auth/reset'>Forgot password?</Link>
                  </Button>
                </FormItem>
              )}
            />
          </div>
          <FormError message='' />
          <FormSuccess message='' />
          <Button type='submit' className='w-full'>
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
