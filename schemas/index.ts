import * as z from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({
    message: 'Email is required.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  }),
  code: z.optional(z.string())
});

export const SignUpSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required.'
    }),
    password: z.string().min(8, {
      message: 'Minimum 8 characters required.'
    }),
    confirm: z.string().min(8, {
      message: 'Minimum 8 characters required.'
    }),
    name: z.string().min(1, {
      message: 'Name is required.'
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords does not match.',
    path: ['confirm']
  });
