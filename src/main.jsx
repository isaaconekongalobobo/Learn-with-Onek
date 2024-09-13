import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './assets/components/Body/body'
import '../src/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)
