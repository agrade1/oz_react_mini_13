import type { MenuItem } from '@/types/headerTypes';
import { NavLink } from 'react-router-dom';

type HeaderProps = { menus: MenuItem[] };
export default function Header({ menus }: HeaderProps) {
  return (
    <header className="h-16 bg-black text-white">
      <nav className="flex-between cont-wrap h-full">
        <div className="flex-center gap-8">
          <h1 className="text-2xl">
            <NavLink to={'/'}>CineScore</NavLink>
          </h1>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="min-w-60 rounded-sm border border-white p-2 outline-0"
          />
        </div>
        <ul className="flex-between gap-4">
          {menus.map(({ id, to, label }) => (
            <NavLink key={id} to={to}>
              <li>{label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}
