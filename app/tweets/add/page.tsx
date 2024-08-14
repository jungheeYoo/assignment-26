'use client';

import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function AddProduct() {
  const [preview, setPreview] = useState('');
  const onImageChange = () => {};
  return (
    <div>
      <form className="p-5 flex flex-col gap-5">
        <FormInput name="title" required placeholder="제목" type="text" />
        <FormInput
          name="description"
          type="text"
          required
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <FormButton text="작성 완료" />
        <label
          htmlFor="photo"
          className="flex items-center justify-center flex-col text-gray-300 rounded-md cursor-pointer"
        >
          <PhotoIcon className="w-10" />
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
      </form>
    </div>
  );
}
