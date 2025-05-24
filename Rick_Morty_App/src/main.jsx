import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext.jsx'

console.log("main");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ThemeContextProvider>  
  </StrictMode>
)
