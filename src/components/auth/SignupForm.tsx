import { useForm } from 'react-hook-form';
import { Button } from '../ui';
import { supabase } from '@/lib/supabase';
import { useDispatch } from 'react-redux';
import { showAlert } from '@/RTK/alertSlice';

type SignupFormProps = {
  onLoginClick: () => void;
};

type SignupInputs = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm({ onLoginClick }: SignupFormProps) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupInputs>({ mode: 'onBlur' });

  const submitHandler = async (data: SignupInputs) => {
    const { email, password, name } = data;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error) {
      dispatch(showAlert({ type: 'error', message: '회원가입 실패: 이미 등록된 이메일입니다.' }));
      return;
    }

    dispatch(showAlert({ type: 'success', message: '회원가입 성공! 로그인해주세요.' }));
    onLoginClick(); // ✅ 회원가입 성공 후 로그인 폼으로 전환
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-col gap-6 rounded p-10"
    >
      <h2 className="text-3xl font-bold">회원가입</h2>

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

      {/* 이름(닉네임) */}
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="이름(닉네임)"
          className="w-full rounded bg-zinc-800 p-3 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-red-600"
          {...register('name', {
            required: '이름을 입력해주세요.',
            minLength: { value: 2, message: '이름은 최소 2자 이상이어야 합니다.' },
          })}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      {/* 비밀번호 */}
      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full rounded bg-zinc-800 p-3 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-red-600"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: { value: 6, message: '비밀번호는 최소 6자리 이상이어야 합니다.' },
          })}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      {/* 비밀번호 확인 */}
      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="w-full rounded bg-zinc-800 p-3 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-red-600"
          {...register('confirmPassword', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* 회원가입 버튼 */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-red-600 py-3 font-semibold hover:bg-red-700"
      >
        {isSubmitting ? '회원가입 중...' : '회원가입'}
      </Button>

      {/* 로그인으로 돌아가기 */}
      <p className="mt-4 text-center text-sm text-zinc-400">
        이미 계정이 있으신가요?{' '}
        <button
          type="button"
          onClick={onLoginClick}
          className="font-semibold text-white hover:underline"
        >
          로그인
        </button>
      </p>
    </form>
  );
}
