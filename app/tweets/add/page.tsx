'use client';

import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { uploadTweet } from './actions';

export default function AddProduct() {
  const [preview, setPreview] = useState('');
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  return (
    <div>
      <form action={uploadTweet} className="p-5 flex flex-col gap-5">
        <FormInput
          name="description"
          type="text"
          required
          placeholder="무슨 일이 일어나고 있나요?"
        />

        <label
          htmlFor="photo"
          className="flex aspect-square items-center justify-center flex-col text-gray-300 rounded-md cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === '' ? <PhotoIcon className="w-10" /> : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
        <FormButton text="게시하기" />
      </form>
    </div>
  );
}
