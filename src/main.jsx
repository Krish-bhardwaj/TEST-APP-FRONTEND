import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <MoralisProvider appId="qdhL7hSOaqHmutbJnHIpQFibaRiPx3F3N7KeKEwN" serverUrl="https://x2srdnf3uvqk.usemoralis.com:2053/server">
      <App />
      </MoralisProvider>
    </React.StrictMode>
)
