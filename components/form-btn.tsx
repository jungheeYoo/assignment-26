interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      className="w-full bg-gray-200 text-black font-medium rounded-full text-center h-10 hover:bg-gray-300 transition-colors hover:text-white"
      disabled={loading}
    >
      {loading ? 'Loading...' : text}
    </button>
  );
}
