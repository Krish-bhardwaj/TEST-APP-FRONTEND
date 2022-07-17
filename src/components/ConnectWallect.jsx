import React, { useEffect, useState } from 'react'
import ClaimNFT from './ClaimNFT'
const ConnectWallect = (props) => {
  const [walletAddress, setWalletAddress] = useState('')
  const connectMetamask = async () => {
    console.log('connect to metamask')
    if (window.ethereum) {
      console.log('Metamask detected')
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        console.log('User account : ', accounts.toString(0))
        setWalletAddress(accounts[0])
      } catch (error) {
        console.log('Error connecting')
      }
    } else {
      console.log('Metamask not detected')
    }
  }

  return (
    <div className="flex content-start justify-center flex-1">
      <div className="flex flex-col items-center justify-center w-11/12 p-5 mb-auto space-y-2 bg-white md:mt-0 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <button
          className="self-start px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-full w-fit hover:bg-black hover:text-white md:rounded-lg text-md md:text-xl "
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        {walletAddress !== '' && (
          <>
            <ClaimNFT address={user.get('ethAddress')} />
          </>
        )}
        {walletAddress === '' && (
          <>
            <h1 className="font-mono text-3xl font-extrabold text-center md:text-5xl">
              Connect Wallet
            </h1>
            <div className="grid grid-flow-row space-y-5 ">
              <div className="flex flex-col space-y-5 font-mono text-xl font-extrabold md:text-2xl ">
                <button
                  className="inline-flex items-center font-semibold text-black bg-transparent border-2 border-black rounded-full w-80 hover:bg-black hover:text-white"
                  onClick={connectMetamask}
                >
                  <img
                    src="https://dummyimage.com/50x50"
                    className="rounded-full"
                  />
                  <p className="flex-1 align-center"> Metamask</p>
                </button>
                <button className="inline-flex items-center font-semibold text-black bg-transparent border-2 border-black rounded-full w-80 hover:bg-black hover:text-white"
                >
                  <img
                    src="https://dummyimage.com/50x50"
                    className="rounded-full"
                  />
                  <p className="flex-1 align-center"> Wallect Connect</p>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ConnectWallect
