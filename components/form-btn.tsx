'use client';

import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full bg-gray-200 text-black font-medium rounded-full text-center h-10 hover:bg-gray-300 transition-colors hover:text-white"
    >
      {pending ? 'Loading...' : text}
    </button>
  );
}
