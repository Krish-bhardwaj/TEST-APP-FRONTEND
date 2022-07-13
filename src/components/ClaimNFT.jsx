import React from 'react'
import { useState } from 'react'

const ClaimNFT = (props) => {
  const [success, setSuccess] = useState(1)
  // Smart Contract Integration
  const main = () => {
    console.log('TEST')
    // setSuccess(2)
  }
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
          onClick={main}
        >
          {
            success === 1 && (
              <p className="flex-1 align-center">Clam your NFT</p>
            )
          }
          {
            success === 2 && (
              <p className="flex-1 align-center">View your NFT on OpenSea</p>
            )
          }
        </button>
    </div>
  )
}

export default ClaimNFT
