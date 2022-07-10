import { useState, useEffect } from 'react'
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
function App() {
  const [active, setActive] = useState('Page1')

  return (
    <div className="App bg-gradient-to-t from-blue-400  to-purple-300 h-screen">
      {active === 'Page1' && <Page1 set={(x) => setActive(x)} />}
      {active === 'Page2' && <Page2 />}
    </div>
  )
}

export default App
