import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import type { MenuItem } from './types/headerTypes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const menus: MenuItem[] = [
  { id: 1, to: '/', label: 'movies' },
  { id: 2, to: '/favorites', label: 'favorites' },
];
function App() {
  return (
    <div>
      <Header menus={menus} />
      <main className="relative min-h-dvh bg-white pt-24 transition-all dark:bg-black">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
