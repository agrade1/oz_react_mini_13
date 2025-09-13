import { useEffect } from 'react';

type AlertProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
};

export default function Alert({ message, type = 'info', onClose, duration = 3000 }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor =
    type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';

  return (
    <div
      onClick={onClose}
      className={`fixed top-10 left-1/2 z-50 -translate-x-1/2 cursor-pointer rounded px-6 py-3 text-white shadow-lg ${bgColor}`}
    >
      {message}
    </div>
  );
}
