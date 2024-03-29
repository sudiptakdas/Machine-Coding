import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import GridLight from './pages/GridLights.tsx';
import Counter from './pages/Counter.tsx';
import Rating from './pages/Rating.tsx';
import ProgressBarPage from './pages/ProgressBarPage.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/grid-light',
    element: <GridLight />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/rating',
    element: <Rating />,
  },
  {
    path: '/progress-bar',
    element: <ProgressBarPage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
