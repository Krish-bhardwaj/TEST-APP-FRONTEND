import React from 'react'
import { useState } from 'react'
import { Main } from './smartcontract/NFT'


const ClaimNFT = (props) => {
  const [success, setSuccess] = useState(1)
  const [url , setUrl] = useState('')
  // Smart Contract Integration
  const main = async (address) => {
    console.log('TEST')
    const x = await Main(address);
    setUrl(x);
    setSuccess(2)
  }
  const openInNewTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <p className="font-bold">
        Wallet Address :{' '}
        {props.address.substring(0, 4) + '...' + props.address.substring(38)}
      </p>
      <div className="flex flex-col items-center justify-center w-4/5 border-4 border-black h-80 rounded-xl">
        <img
          src="https://dummyimage.com/100x100"
          className="rounded-full w-fit"
        />
      </div>
      <button
          className="inline-flex items-center font-semibold text-black bg-transparent border-2 border-black rounded-full w-80 hover:bg-black hover:text-white"
          onClick={() => main(props.address)}
        >
          {
            success === 1 && (
              <p className="flex-1 align-center">Clam your NFT</p>
            )
          }
          {
            success === 2 && (
              <p className="flex-1 align-center" onClick={() => openInNewTab()}>View your NFT on OpenSea</p>
            )
          }
        </button>
    </div>
  )
}

export default ClaimNFT
