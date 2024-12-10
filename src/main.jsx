import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { IntroPage, Weather, RealNews, Quotes, FakeNews } from './pages/index.js';
import FakeNewsCard from './pages/FakeNewsCard.jsx';
import RealNewsCard from './pages/RealNewsCard.jsx';

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
        path: '/real/:id', // Correct syntax for dynamic route
        element: <RealNewsCard />,
      },
      {
        path: '/fake',
        element: <FakeNews />,
      },
      {
        path: '/fake/:id', // Correct syntax for dynamic route
        element: <FakeNewsCard />,
      },
      {
        path: '/quotes',
        element: <Quotes />,
      },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
