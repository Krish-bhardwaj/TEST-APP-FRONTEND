import React from 'react'
import NFT from './assets/NFT.png'
import Web3Modal from './Web3Modal'
import { ethers } from 'ethers'

// import WalletConnectProvider from "@walletconnect/web3-provider";

// const providerOptions = {
//   // walletconnect: {
//   //   package: WalletConnectProvider, // required
//   //   options: {
//   //     infuraId: "26157b8cd83d4de1a2e617703d981da8" // required
//   //   }
//   // }
// };

const Content1 = (props) => {
  
  // async function connectWallect(){
  //   console.log("ok")
  //   try {
  //     let web3Modal = new Web3Modal({
  //       cacheProvider: false, // optional
  //       providerOptions // required
  //     });
  //     const instance = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(instance);
  //     console.log(instance);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  return (
    <div className="flex content-start justify-center flex-1">
      <div className="flex flex-col justify-center w-11/12 p-5 mt-5 mb-auto space-y-5 bg-white md:mt-0 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg md:space-y-20">
        <h1 className="font-mono text-xl font-extrabold text-center md:text-left md:text-3xl">
          Get a chance to mint this NFT!
        </h1>
        <div className="md:hidden contents ">
          <img
            src={NFT}
            className="w-4/6 mx-auto my-5 md:w-auto"
          />
        </div>

        <p className="font-mono text-sm font-extrabold text-center text-purple-900 md:text-left md:text-xl">
          Join Konma x Social Works' meet and greet this weekend.
        </p>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10">
          <button
            className="px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-full hover:bg-black hover:text-white md:rounded-none text-md md:text-xl "
            type="button"
            onClick={() => props.set('connect')}
            // onClick={connectWallect}
          >
            Connect Wallet
          </button>
          <button
            className="flex-1 px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-2xl hover:bg-black hover:text-white md:rounded-none text-md md:text-xl hover-span:text-yellow-400"
            type="button"
            onClick={() => props.set('wallet')}
          >
            Don't have a crypto wallet?
            <br className="lg:hidden" /> Let's make one!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content1
