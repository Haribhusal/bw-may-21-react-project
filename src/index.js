import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './store';
import CartPage from './pages/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/my-cart',
        element: <CartPage />

      },
      {
        path: '/products/:id',
        element: <SingleProductPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
