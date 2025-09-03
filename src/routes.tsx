import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: '*', element: <div className="p-6">Not Found</div> },
    ],
  },
]);
