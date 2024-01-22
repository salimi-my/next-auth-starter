import * as z from 'zod';
import { UserRole } from '@prisma/client';

export const SignInSchema = z.object({
  email: z.string().email({
    message: 'Valid email is required.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  }),
  code: z.optional(z.string())
});

export const SignUpSchema = z
  .object({
    email: z.string().email({
      message: 'Valid email is required.'
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

export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Valid email is required.'
  })
});

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: 'Minimum of 8 characters required.'
    }),
    confirm: z.string().min(8, {
      message: 'Minimum 8 characters required.'
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords does not match.',
    path: ['confirm']
  });

export const UpdateProfileSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.'
  }),
  email: z.string().email({
    message: 'Valid email is required.'
  }),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  isTwoFactorEnabled: z.boolean()
});

export const UpdatePasswordSchema = z
  .object({
    currentPassword: z.string().min(8, {
      message: 'Minimum of 8 characters required.'
    }),
    newPassword: z.string().min(8, {
      message: 'Minimum of 8 characters required.'
    }),
    confirmPassword: z.string().min(8, {
      message: 'Minimum 8 characters required.'
    })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords does not match.',
    path: ['confirm']
  });
