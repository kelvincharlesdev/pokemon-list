import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalsStyle.js'
import { ThemeProviderContext } from './contexts/ThemeContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderContext >
      <GlobalStyles />
      <App />
    </ThemeProviderContext>

  </React.StrictMode>,
)
