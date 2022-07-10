import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLiberary(provider) {
  return new Web3(provider)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Web3ReactProvider getLibrary={getLiberary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Web3ReactProvider>
)
