import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRote from './layout/MainRote';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';
import AuthProvider from './Provider/AuthProvider';
import PrivetRoued from './route/PrivetRoued';
import Oreader from './Compment/Oreader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRote></MainRote>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>,
      },
      {
        path: '/order',
        element: (
          <PrivetRoued>
            <Oreader></Oreader>
          </PrivetRoued>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
