// assignment-27
import { ReactNode } from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
  icon?: ReactNode;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors = [],
  name,
  icon,
}: FormInputProps) {
  const errorClass = errors.length > 0 ? 'border-red-400 ring-red-400' : '';
  return (
    <div className="flex flex-col relative">
      <div className="relative flex items-center">
        {icon && <div className="absolute left-5">{icon}</div>}
        <input
          name={name}
          className={`bg-transparent rounded-full w-full h-12 p-4 focus:outline-none ring-2 focus:ring-2 transition ring-neutral-200 focus:ring-gray-400 border-none placeholder:text-neutral-400 ${errorClass} ${
            icon ? 'pl-12' : ''
          }`}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {errors.length > 0 && (
        <div className="mt-3">
          {errors.map((error, index) => (
            <span key={index} className="text-red-400 font-medium block ml-3">
              {error}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
