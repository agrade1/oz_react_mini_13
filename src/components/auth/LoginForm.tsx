import { useForm } from 'react-hook-form';
import Button from '../ui/Button';

type LoginFormProps = {
  onSignupClick: () => void;
  onSubmit?: (data: LoginInputs) => void; // API 연동용
};

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginForm({ onSignupClick, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    mode: 'onBlur',
  });

  const submitHandler = (data: LoginInputs) => {
    if (onSubmit) onSubmit(data);
    console.log('로그인 시도:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-col gap-6 rounded p-10"
    >
      <h2 className="text-3xl font-bold">로그인</h2>

      {/* 이메일 */}
      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="이메일"
          className="w-full rounded bg-zinc-800 p-3 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-red-600"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      {/* 비밀번호 */}
      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full rounded bg-zinc-800 p-3 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-red-600"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자리 이상이어야 합니다.',
            },
          })}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      {/* 로그인 버튼 */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-red-600 py-3 font-semibold hover:bg-red-700"
      >
        {isSubmitting ? '로그인 중...' : '로그인'}
      </Button>

      {/* 회원가입 링크 */}
      <p className="mt-4 text-center text-sm text-zinc-400">
        아직 회원이 아니신가요?{' '}
        <button
          type="button"
          onClick={onSignupClick}
          className="font-semibold text-white hover:underline"
        >
          회원가입
        </button>
      </p>
    </form>
  );
}
