import React from 'react'
import NFT from './assets/NFT.png'
const Main = () => {
  return (
    <div className="hidden md:contents">
      <div className="inline-flex justify-center">
        <div className="flex flex-col items-center justify-center w-2/3 p-2 bg-white md:w-fit md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
          <h1 className="font-mono text-xl font-extrabold text-center md:text-3xl">
            Connect Wallet
          </h1>
          <img
            src={NFT}
            className="w-3/6 md:w-8/12"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
