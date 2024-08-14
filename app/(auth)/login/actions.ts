'use server';

import bcrypt from 'bcrypt';
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MIN_LENGTH_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '@/lib/constants';
import db from '@/lib/db';
import { z } from 'zod';
import getSession from '@/lib/session';
import { redirect } from 'next/navigation';

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine((val) => val.endsWith('@zod.com'), {
      message: 'Only @zod.com emails are allowed',
    })
    .refine(checkEmailExists, 'An accout with this email.'),
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

export async function login(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
      success: false,
    };
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? 'xxxx'
    );
    // console.log(ok);

    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect('/profile');
    } else {
      return {
        fieldErrors: {},
        success: true,
      };
    }
  }
}
