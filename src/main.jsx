import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Books from './components/Books/Books';
import Courses from './components/Courses/Courses';
import Others from './components/Others/Others';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>
      },
      {
        path: 'courses',
        element: <Courses></Courses>
      },
      {
        path: 'others',
        element: <Others></Others>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
