import * as z from 'zod';
import { UserRole } from '@prisma/client';

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

export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Email is required.'
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

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    currentPassword: z.optional(
      z.string().min(8, {
        message: 'Minimum of 8 characters required.'
      })
    ),
    password: z.optional(
      z.string().min(8, {
        message: 'Minimum of 8 characters required.'
      })
    ),
    confirm: z.optional(
      z.string().min(8, {
        message: 'Minimum 8 characters required.'
      })
    )
  })
  .refine(
    (data) => {
      if (data.currentPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['password']
    }
  )
  .refine(
    (data) => {
      if (data.password && !data.currentPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'Current password is required!',
      path: ['currentPassword']
    }
  )
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords does not match.',
    path: ['confirm']
  });
