import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './app'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Composant principale de mon application, qui contient les differentes routes: App.jsx */}
    <App/>
  </StrictMode>,
)
