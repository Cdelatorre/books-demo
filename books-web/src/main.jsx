import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
