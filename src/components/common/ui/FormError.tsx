interface FormErrorProps {
  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="mt-2 w-fit rounded-md bg-red-200/60 px-4 py-2 text-sm text-red-700">
      {message}
    </div>
  );
}
