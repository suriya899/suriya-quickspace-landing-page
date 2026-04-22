import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'  // ← แก้ path ตรงนี้
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
