import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({
  children,
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`w-full py-2 text-white font-semibold rounded
        bg-linear-to-r from-blue-500 to-purple-600
        hover:opacity-90 disabled:opacity-50
        cursor-pointer disabled:cursor-not-allowed
        ${className}`}
    >
      {isLoading ? "جاري الإرسال..." : children}
    </button>
  );
}
