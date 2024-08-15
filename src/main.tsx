import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <footer className="py-8 border-t border-orange-900/30">
      <p className="text-center text-gray-500 text-base">
        &copy; 2024 - Designed by{' '}
        <a
          href=" "
          target="_blank"
          rel="noreferrer"
          className="text-orange-400">
          Brian Figueroa
        </a>
      </p>
    </footer>
  </StrictMode>
)
