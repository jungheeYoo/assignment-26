'use client';

import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';
import { uploadTweet } from './actions';
import { useFormState } from 'react-dom';

export default function AddTweet() {
  const [state, action] = useFormState(uploadTweet, null);
  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        <FormInput
          name="tweet"
          type="text"
          required
          placeholder="무슨 일이 일어나고 있나요?"
          errors={state?.fieldErrors.tweet}
        />
        <FormButton text="게시하기" />
      </form>
    </div>
  );
}
