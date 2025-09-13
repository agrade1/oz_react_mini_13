import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type AuthView = 'login' | 'signup';

type AuthModalProps = {
  view: AuthView;
  onClose: () => void;
  onChangeView: (view: AuthView) => void;
};

export default function AuthModal({ view, onClose, onChangeView }: AuthModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* 모달 본체 */}
      <div className="relative z-10 w-[400px] rounded bg-black/80 text-white shadow-lg">
        {view === 'login' ? (
          <LoginForm onSignupClick={() => onChangeView('signup')} onClose={onClose} />
        ) : (
          <SignupForm onLoginClick={() => onChangeView('login')} />
        )}
      </div>
    </div>
  );
}
