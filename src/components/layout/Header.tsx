import type { MenuItem } from '@/types/headerTypes';
import { NavLink } from 'react-router-dom';
import SearchInput from '../ui/SearchInput';
import ThemeButton from '../ui/ThemeButton';
import { useEffect, useState } from 'react';

type HeaderProps = { menus: MenuItem[] };

export default function Header({ menus }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // 10px 이상 스크롤되면 true
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 h-20 w-full transition-colors duration-300 ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'}`}
    >
      <nav className="flex-between cont-wrap h-full text-white">
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className="flex-center gap-10">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <NavLink to="/">CineScore</NavLink>
          </h1>
          <ul className="flex-between gap-6 text-lg font-medium">
            {menus.map(({ id, to, label }) => (
              <NavLink key={id} to={to}>
                <li className="transition-colors hover:text-red-500">{label}</li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* 오른쪽: 검색 + 테마버튼 + 로그인 */}
        <div className="flex-center gap-6 text-lg">
          <SearchInput debounce />
          <ThemeButton />
          <NavLink to="/">로그인</NavLink>
        </div>
      </nav>
    </header>
  );
}
