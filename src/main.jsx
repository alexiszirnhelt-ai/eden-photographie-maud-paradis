import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/bootstrap-custom.scss'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/collapse'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
