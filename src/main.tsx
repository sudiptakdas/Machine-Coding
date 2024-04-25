import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import GridLight from './pages/GridLights.tsx';
import Counter from './pages/Counter.tsx';
import Rating from './pages/Rating.tsx';
import ProgressBarPage from './pages/ProgressBarPage.tsx';
import Pagination from './pages/Pagination.tsx';
import InfiniteScroll from './pages/InfiniteScroll.tsx';
import AutoComplete from './pages/AutoComplete.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './pages/TodoList.tsx';

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
    path: '/todoList',
    element: <TodoList />,
  },
  {
    path: '/pagination',
    element: <Pagination />,
  },
  {
    path: '/infiniteScroll',
    element: <InfiniteScroll />,
  },
  {
    path: '/autoComplete',
    element: <AutoComplete />,
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
