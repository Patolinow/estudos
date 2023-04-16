import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './components/contexts/CartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartContextProvider>
    <div id="modal-root"></div>
    <App />
    </CartContextProvider>
  </React.StrictMode>,
)
