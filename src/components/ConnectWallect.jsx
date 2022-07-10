import React, { useEffect } from 'react'
import Connect from './Connect'

const ConnectWallect = (props) => {
  return (
    <div className="flex-1 flex justify-center content-start">
      <div className="flex flex-col justify-center items-center md:mt-0 mb-auto w-11/12 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg space-y-2">
        <button
          className="w-fit self-start bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-lg text-md md:text-xl "
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        <h1 className="font-mono text-center text-3xl md:text-5xl font-extrabold">
          Connect Wallet
        </h1>
        <Connect/>
        <div className="grid grid-flow-row space-y-5 ">
          <div className="font-mono font-extrabold text-xl md:text-2xl flex flex-col space-y-5 ">
            <button className="w-80 bg-transparent hover:bg-black text-black font-semibold hover:text-white border-2 border-black rounded-full inline-flex  items-center">
              <img
                src="https://dummyimage.com/50x50"
                className="rounded-full"
              />
              <p className="align-center flex-1"> Metamask</p>
            </button>
            <button className="w-80 bg-transparent hover:bg-black text-black font-semibold hover:text-white border-2 border-black rounded-full inline-flex  items-center">
              <img
                src="https://dummyimage.com/50x50"
                className="rounded-full"
              />
              <p className="align-center flex-1"> Wallect Connect</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallect
