import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';

export default function Login() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-2xl">🔥</h1>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput
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
