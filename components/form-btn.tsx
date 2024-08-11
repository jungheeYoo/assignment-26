'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  text: string;
  success: boolean;
}

export default function FormButton({ text, success }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        disabled={pending}
        className="w-full bg-gray-200 text-black font-medium rounded-full text-center h-12 hover:bg-gray-300 transition-colors hover:text-white mt-5"
      >
        {pending ? 'Loading...' : text}
      </button>

      {success && (
        <div className="w-full flex items-center justify-start bg-green-500 text-black font-medium rounded-xl text-center h-10 mt-3 px-5">
          <span>
            <CheckCircleIcon className="bg-transparent w-4 h-4" />
          </span>
          <span className="ml-3">Welcome back 🤗</span>
        </div>
      )}
    </div>
  );
}
