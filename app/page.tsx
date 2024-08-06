'use client';

import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';
import { useFormState } from 'react-dom';
import { handleForm } from './actions';
import { EnvelopeIcon, KeyIcon, UserIcon } from '@heroicons/react/24/solid';

export default function Login() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col gap-10 mt-10 py-8 px-6">
      <div className="flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-2xl">🔥</h1>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
          icon={<EnvelopeIcon className="w-4 h-4 text-gray-400" />}
        />
        <FormInput
          name="text"
          type="text"
          placeholder="Username"
          required
          errors={[]}
          icon={<UserIcon className="w-4 h-4 text-gray-400" />}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
          icon={<KeyIcon className="w-4 h-4 text-gray-400" />}
        />
        <FormButton text="Log in" success={state?.success} />
      </form>
    </div>
  );
}
