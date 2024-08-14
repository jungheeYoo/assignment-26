'use server';

export async function uploadTweet(formData: FormData) {
  const data = {
    photo: formData.get('photo'),
    description: formData.get('description'),
  };
  console.log(data);
}
