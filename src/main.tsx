import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <footer className="py-8 ">
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
    </ThemeProvider>
  </StrictMode>
)
