import { useState } from 'react'
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
function App() {
  const [active, setActive] = useState('Page1')

  return (
    <div className="flex flex-col h-screen App bg-gradient-to-t from-blue-400 to-purple-300">
      {active === 'Page1' && <Page1 set={(x) => setActive(x)} />}
      {active === 'Page2' && <Page2 />}
      <strong className='text-center'>
        <a href='https://www.linkedin.com/company/konmacommunity/mycompany/' target='_blank'>@KONMA DAO</a> |  
        <a href='https://www.linkedin.com/in/krish-bhardwaj-22b7ba1b7/' target='_blank'> KRISH BHARDWAJ</a>
      </strong>
    </div>
  )
}

export default App
