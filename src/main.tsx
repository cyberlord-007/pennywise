import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './views/Home/Home.tsx'
import { Authentication } from './components/Protected/Authentication.tsx'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      }
    ]
  },
  {
    path: '/auth',
    element: <Authentication/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}/>
  </React.StrictMode>,
)
