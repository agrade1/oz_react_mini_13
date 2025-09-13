import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/RTK/authSlice';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // 첫 로드시 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        dispatch(setUser(session.user));
      } else {
        dispatch(clearUser());
      }
    });

    // 로그인/로그아웃 상태 변경 감지
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        dispatch(setUser(session.user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return <>{children}</>;
}
