import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import Defail from './pages/Detail';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/movie/:id', element: <Defail /> },
      { path: '*', element: <div className="p-6">Not Found</div> },
    ],
  },
]);
