import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main, Detail } from './pages';
import Search from './pages/Search';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/movie/:id', element: <Detail /> },
      { path: '/search', element: <Search /> },
      { path: '*', element: <div className="p-6">Not Found</div> },
    ],
  },
]);
