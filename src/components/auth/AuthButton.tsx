import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/RTK/store';
import { Button } from '../ui';
import AuthModal from './AuthModal';
import { supabase } from '@/lib/supabase';
import { clearUser } from '@/RTK/authSlice';
import { showAlert } from '@/RTK/alertSlice';

type AuthView = 'login' | 'signup';

export default function AuthButton() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>('login');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(clearUser());
    dispatch(showAlert({ type: 'success', message: '로그아웃 되었습니다.' }));
  };

  if (user) {
    return <Button onClick={handleLogout}>로그아웃</Button>;
  }

  return (
    <>
      <Button
        onClick={() => {
          setAuthView('login');
          setAuthOpen(true);
        }}
      >
        로그인
      </Button>

      {authOpen && (
        <AuthModal view={authView} onClose={() => setAuthOpen(false)} onChangeView={setAuthView} />
      )}
    </>
  );
}
