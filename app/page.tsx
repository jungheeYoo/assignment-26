import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';

export default function Login() {
  async function handleForm(formData: FormData) {
    'use server';
    console.log(formData.get('email'), formData.get('password'));
    console.log('서버에서 실행 됨!');
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-2xl">🔥</h1>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="text"
          type="text"
          placeholder="Username"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Log in" />
      </form>
    </div>
  );
}
