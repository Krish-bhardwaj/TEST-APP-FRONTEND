import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { injected } from './Connector'
injected
// ---------- APP -------------
function Connect() {

  const {active , account , library , connector , activate , deactivate} = useWeb3React()

  async function connect() {
      try{
        await activate(injected)
      }catch(e){console.log(e)}
  }
  async function disconnect() {
    try{
      await deactivate(injected)
    }catch(e){console.log(e)}
}
  return(
    <>
    <button onClick={connect}>Connect to Metamask</button>
    <button onClick={disconnect}>Disconnect</button>
    
    {
      active ? <span>connected : {account}</span> :
      <span>not connected</span>
    }
    </>
  )
}

const ConnectWallect = (props) => {
  return (
    <div className="flex-1 flex justify-center content-start">
      <div className="flex flex-col justify-center items-center md:mt-0 mb-auto w-11/12 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg space-y-2">
        <button
          class="w-fit self-start bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-lg text-md md:text-xl "
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        <h1 className="font-mono text-center text-3xl md:text-5xl font-extrabold">
          Connect Wallet
        </h1>
        <Connect />
        {/* Dont delete this */}
        {/* <div className="grid grid-flow-row space-y-5 ">
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
        </div> */}
      </div>
    </div>
  )
}

export default ConnectWallect
