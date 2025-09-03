import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import type { MenuItem } from './types/headerTypes';

const menus: MenuItem[] = [
  { id: 1, to: '/', label: 'movies' },
  { id: 2, to: '/favorites', label: 'favorites' },
];
function App() {
  return (
    <div>
      <Header menus={menus} />
      <main className="cont-wrap">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
