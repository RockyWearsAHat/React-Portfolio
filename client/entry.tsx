import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/tailwind.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
