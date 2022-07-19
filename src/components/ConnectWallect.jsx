import React, { useState } from 'react'
import ClaimNFT from './ClaimNFT'
import logo from './assets/MetaMask.png'
const ConnectWallect = (props) => {
  const [walletAddress, setWalletAddress] = useState('')
  const [move, setMove] = useState(0)
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
          className="self-start px-4 py-2 font-semibold text-black bg-transparent border border-black w-fit  hover:bg-black hover:text-white text-md md:text-xl rounded-none hover:fill-white"
          type="button"
          onClick={() => props.set('main')}
        >
          Back
          
        </button>
        {move === 1 && (
          <>
            <ClaimNFT address={walletAddress} />
          </>
        )}
        {move === 0 && (
          <>
            <h1 className="font-mono text-3xl font-extrabold text-center md:text-5xl">
              Connect Wallet
            </h1>
            <div className="grid grid-flow-row space-y-5 ">
              <div className="flex flex-col space-y-5 font-mono text-xl font-extrabold md:text-2xl justify-center items-center">
                <img src={logo} className="w-1/2 md:w-1/3" />
                {/* <MetamaskLogo/> */}
                {walletAddress === '' && (
                  <button
                    className="inline-flex items-center font-semibold text-black md:bg-transparent bg-orange-300 border-4 border-black md:w-2/4 w-3/4  p-3 rounded-2xl hover:bg-orange-300 "
                    onClick={connectMetamask}
                  >
                    <p className="flex-1 align-center">Connect Metamask</p>
                  </button>
                )}
                {walletAddress !== '' && (
                  <div className="flex flex-col w-full justify-center items-center">
                    <div className="inline-flex items-center font-semibold md:w-2/4 w-full text-black bg-transparent border-4 border-b-0 border-black  p-1 md:p-3 rounded-t-2xl bg-orange-300 text-lg md:text-xl justify-center">
                      Wallet Address :{' '}
                      {walletAddress.slice(0, 4) +
                        '...' +
                        walletAddress.slice(38)}
                    </div>
                    <button
                      className="inline-flex items-center font-semibold md:w-2/4 w-full  text-orange-300 bg-transparent border-4 border-t-0 border-black   p-1 md:p-3 rounded-b-2xl bg-black text-lg md:text-xl md:hover:fill-orange-300 fill-orange-300 md:fill-black "
                      onClick={() => {
                        setMove(1)
                      }}
                    >
                      <p className="flex-1 align-center">Next </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ConnectWallect
