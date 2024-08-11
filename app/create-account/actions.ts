'use server';
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
  USERNAME_MIN_LENGTH,
  USERNAME_MIN_LENGTH_ERROR,
} from '@/lib/constants';
import { z } from 'zod';

const checkUsername = (username: string) => !username.includes('potato');
const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({ invalid_type_error: 'Username must be a string' })
      .toLowerCase()
      .min(USERNAME_MIN_LENGTH, USERNAME_MIN_LENGTH_ERROR)
      .trim(),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine((val) => val.endsWith('@zod.com'), {
        message: 'Only @zod.com emails are allowed',
      }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: 'Both passwords should be the same!',
    path: ['confirm_password'],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());

    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
