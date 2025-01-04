import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.jsx'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
     defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
     },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </QueryClientProvider>
  </StrictMode>,
)
