// assignment-27
'use server';

import {
  USERNAME_MIN_LENGTH,
  USERNAME_MIN_LENGTH_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '@/lib/constants';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine((val) => val.endsWith('@zod.com'), {
      message: 'Only @zod.com emails are allowed',
    }),
  username: z
    .string({ invalid_type_error: 'Username must be a string' })
    .toLowerCase()
    .min(USERNAME_MIN_LENGTH, USERNAME_MIN_LENGTH_ERROR)
    .trim(),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
      success: false,
    };
  } else {
    return {
      fieldErrors: {},
      success: true,
    };
  }
}
