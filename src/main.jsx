import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { IntroPage, Weather, RealNews, Quotes, FakeNews,FakeNewsCard } from './pages/index.js';


// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Parent route
    children: [
      {
        path: '/', // Default child route
        element: <IntroPage />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
      {
        path: '/real',
        element: <RealNews />,
      },
      {
        path: '/fake',
        element: <FakeNews />,
      },
      {
        path: '/fake/:id',
        element: <FakeNewsCard />,
      },
      {
        path: '/quotes',
        element: <Quotes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
