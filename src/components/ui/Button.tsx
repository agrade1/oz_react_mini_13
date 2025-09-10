import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 ${className}`}
    />
  );
}
