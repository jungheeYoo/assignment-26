'use server';

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const password = formData.get('password');
  if (password === '12345') {
    return { success: true, errors: [] };
  } else {
    return { success: false, errors: ['wrong password 😣'] };
  }
}
