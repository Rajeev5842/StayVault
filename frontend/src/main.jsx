import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import routes from './routes.jsx'


const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        error: {
          style: {
            background: '#ef4444',
            color: '#fff',
            fontWeight: '500',
          },
        },
        success: {
          style: {
            background: '#22c55e',
            color: '#fff',
            fontWeight: '700',
          },
        },
      }}
    />
    <RouterProvider router={router} />
  </StrictMode>,
)
