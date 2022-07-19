import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import ConnectWallect from './ConnectWallect'
import Content1 from './Content1'
import Main from './Main'
import Wallet from './Wallet'
import WalletSetup from './WalletSetup'
import Web3Modal from './Web3Modal'

const Page2 = () => {
  const [block, setBlock] = useState('main')
  return (
    <div className="flex flex-col items-center justify-center flex-1 space-x-0 space-y-5 md:flex-row md:mx-10 md:space-x-5 md:space-y-0 mt-5">
      {block === 'main' && <Main />}
      {/* {block === 'wallet' && <Main />} */}
      {/* {block === 'connect' && <Card />} */}

      {block === 'main' && <Content1 set={(x) => setBlock(x)} />}
      {/* {block === 'connect' && <Web3Modal set={(x) => setBlock(x)}/>} */}
      {block === 'connect' && <ConnectWallect set={(x) => setBlock(x)}/> }
      {block === 'wallet' && <WalletSetup set={(x) => setBlock(x)} />}
    </div>
  )
}

export default Page2
