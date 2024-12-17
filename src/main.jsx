import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
  </StrictMode>,
)
