import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import ConnectWallect from './ConnectWallect'
import Content1 from './Content1'
import Main from './Main'
import Wallet from './Wallet'
import WalletSetup from './WalletSetup'

const Page2 = () => {
  const [block, setBlock] = useState('main')
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center md:mx-10 space-x-0 md:space-x-5 space-y-5 md:space-y-0">
      {block === 'main' && <Main />}
      {block === 'wallet' && <Wallet />}
      {block === 'connect' && <Card />}

      {block === 'main' && <Content1 set={(x) => setBlock(x)} />}
      {block === 'connect' && <ConnectWallect set={(x) => setBlock(x)} />}
      {block === 'wallet' && <WalletSetup set={(x) => setBlock(x)} />}
    </div>
  )
}

export default Page2
