import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Walletconnect from './components/Walletconnect'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
      {/* <Walletconnect/> */}
    </React.StrictMode>
)
