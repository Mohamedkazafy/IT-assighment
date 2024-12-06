import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import {IntroPage, Weather, RealNews, Quotes,FakeNews } from './pages/index.js'
import FakeNewsCard from './pages/FakeNewsCard.jsx'
import RealNewsCard from './RealNewsCard.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<IntroPage/>
      },
      {
        path:"/weather",
        element:<Weather/>
      },
      {
        path:"/real",
        element:<RealNews/>
      },
      {
        path:"/real/:{id}",
        element:<RealNewsCard/>
      },
      {
        path:"/fake",
        element:<FakeNews/>
      },
      {
        path:"/fake/:{id}",
        element:<FakeNewsCard/>
      },
      {
        path:"/quotes",
        element:<Quotes/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,

)
