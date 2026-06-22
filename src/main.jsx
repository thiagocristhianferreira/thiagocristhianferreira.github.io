import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PerfProvider } from './context/PerfContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PerfProvider>
        <App />
      </PerfProvider>
    </ThemeProvider>
  </StrictMode>,
)
