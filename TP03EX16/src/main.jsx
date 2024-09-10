import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Badge from './components/StatusBadge.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className ="container">
    <Badge status='ativo' />
    <br/>
    <Badge status='pendente' />
    <br />
    <Badge status='inativo' />
    </div>
  </StrictMode>,
)
