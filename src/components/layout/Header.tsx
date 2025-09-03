import { NavLink } from 'react-router-dom';
import type { MenuItem } from '../../types/headerTypes';

type HeaderProps = { menus: MenuItem[] };
export default function Header({ menus }: HeaderProps) {
  return (
    <header className="h-16 bg-black text-white">
      <nav className="flex-between cont-wrap h-full">
        <h1 className="text-2xl">
          <NavLink to={'/'}>CineScore</NavLink>
        </h1>
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
