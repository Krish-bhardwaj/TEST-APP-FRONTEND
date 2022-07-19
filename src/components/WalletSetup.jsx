import React from 'react'
import Metamask from './assets/MetaMask.png'
import Login from './assets/Login.png'
import Secreat from './assets/secreat.png'
import Pass from './assets/pass.png'
import Confirm from './assets/confirm.png'
const WalletSetup = (props) => {
  return (
    <div className="flex content-start justify-center flex-1">
      <div className="flex flex-col items-center justify-center w-11/12 p-5 mb-auto space-y-2 bg-white md:mt-0 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <button
          className="self-start px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-none w-fit hover:bg-black hover:text-white text-md md:text-xl hover-span:text-yellow-400"
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        <h1 className="font-mono text-3xl font-extrabold text-center md:text-left md:text-5xl">
          Wallet steup
        </h1>
        <h2 className="font-mono text-sm font-extrabold text-center md:text-left md:text-lg ">
          Follow these 5 easy steps to get started
        </h2>

        <div className="grid grid-flow-row p-0 space-y-0 border-4 border-black md:grid-flow-col md:space-x-0 md:space-y-0 md:p-0 rounded-3xl">
          <p className="flex flex-row font-mono text-sm font-extrabold text-left md:text-xl md:flex-col md:space-y-2 ">
            <span className="flex flex-col justify-center px-2 text-center text-white bg-black w-fit md:w-full rounded-tl-xl md:rounded-tl-xl md:py-1 ">
              1
            </span>
            <img
              src={Metamask}
              className="self-center px-2 w-20 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="px-2 text-center ">
                Download the MetaMask extension onto your preferred browser.
              </span>
            </div>
            <span className="flex flex-col justify-center w-full p-2 text-left text-white bg-black rounded-tr-xl md:hidden">
              Download the MetaMask extension onto your preferred browser.
            </span>
          </p>

          <p className="flex flex-row font-mono text-sm font-extrabold text-left md:text-xl md:flex-col md:space-y-2 ">
            <span className="flex flex-col justify-center px-2 text-center text-white bg-black rounded-l-none w-fit md:w-full md:py-1 ">
              2
            </span>
            <img
              src={Login}
              className="self-center px-2 w-20 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="px-2 text-center ">
                Setup your login password
              </span>
            </div>
            <span className="flex flex-col justify-center w-full p-2 text-left text-white bg-black rounded-none md:hidden">
              Setup your login password
            </span>
          </p>

          <p className="flex flex-row font-mono text-sm font-extrabold text-left md:text-xl md:flex-col md:space-y-2 ">
            <span className="flex flex-col justify-center px-2 text-center text-white bg-black rounded-l-none w-fit md:w-full md:py-1 ">
              3
            </span>
            <img
              src={Secreat}
              className="self-center px-2 w-20 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="px-2 text-center ">
                Click on “Click here to reveal secret words” to show the seed
                phrase.
              </span>
            </div>
            <span className="flex flex-col justify-center w-full p-2 text-left text-white bg-black rounded-none md:hidden">
              Click on “Click here to reveal secret words” to show the seed
              phrase.
            </span>
          </p>

          <p className="flex flex-row font-mono text-sm font-extrabold text-left md:text-xl md:flex-col md:space-y-2 ">
            <span className="flex flex-col justify-center px-2 text-center text-white bg-black rounded-l-none w-fit md:w-full md:py-1 ">
              4
            </span>
            <img
              src={Pass}
              className="self-center px-2 w-20 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="px-2 text-center ">
                Enter and confirm your secret seed phrase in the order in which
                it was presented to you
              </span>
            </div>
            <span className="flex flex-col justify-center w-full p-2 text-left text-white bg-black rounded-none md:hidden">
              Enter and confirm your secret seed phrase in the order in which it
              was presented to you
            </span>
          </p>

          <p className="flex flex-row font-mono text-sm font-extrabold text-left md:text-xl md:flex-col md:space-y-2 ">
            <span className="flex flex-col justify-center px-2 text-center text-white bg-black w-fit md:w-full rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none md:py-1">
              5
            </span>
            <img
              src={Confirm}
              className="self-center px-2 py-1 w-20 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="px-2 text-center ">Click on "Confirm"</span>
            </div>
            <span className="flex flex-col justify-center w-full p-2 text-left text-white bg-black rounded-br-xl md:hidden ">
              Click on "Confirm"
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WalletSetup
