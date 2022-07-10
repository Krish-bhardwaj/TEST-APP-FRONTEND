import React from 'react'

const WalletSetup = (props) => {
  return (
    <div className="flex-1 flex justify-center content-start">
      <div className="flex flex-col justify-center items-center md:mt-0 mb-auto w-11/12 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg space-y-2">
        <button
          class="w-fit self-start bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-lg text-md md:text-xl hover-span:text-yellow-400"
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        <h1 className="font-mono text-center md:text-left text-3xl md:text-5xl font-extrabold">
          Wallet steup
        </h1>
        <h2 className="font-mono text-center md:text-left text-sm md:text-lg font-extrabold ">
          Follow these 5 easy steps to get started
        </h2>

        <div className="grid md:grid-flow-col grid-flow-row md:space-x-0 space-y-0 md:space-y-0 p-0 md:p-0 border-4 rounded-3xl border-black">
          <p className="font-mono text-left font-extrabold text-sm md:text-xl flex flex-row md:flex-col  md:space-y-2 ">
            <span className="w-fit md:w-full bg-black text-center text-white rounded-tl-xl md:rounded-tl-xl px-2 md:py-1 flex justify-center flex-col ">
              1
            </span>
            <img
              src="https://dummyimage.com/50x50"
              className="md:w-fit w-min self-center px-2 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="text-center px-2  ">
                Download the MetaMask extension onto your preferred browser.
              </span>
            </div>
            <span className="w-full bg-black text-left text-white rounded-tr-xl p-2 flex justify-center flex-col md:hidden">
              Download the MetaMask extension onto your preferred browser.
            </span>
          </p>

          <p className="font-mono text-left font-extrabold text-sm md:text-xl flex flex-row md:flex-col  md:space-y-2 ">
            <span className="w-fit md:w-full bg-black text-center text-white rounded-l-none px-2 md:py-1 flex justify-center flex-col ">
              2
            </span>
            <img
              src="https://dummyimage.com/50x50"
              className="md:w-fit w-min self-center px-2 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="text-center px-2  ">
                Setup your login password
              </span>
            </div>
            <span className="w-full bg-black text-left text-white rounded-none p-2 flex justify-center flex-col md:hidden">
              Setup your login password
            </span>
          </p>

          <p className="font-mono text-left font-extrabold text-sm md:text-xl flex flex-row md:flex-col  md:space-y-2 ">
            <span className="w-fit md:w-full bg-black text-center text-white rounded-l-none px-2 md:py-1 flex justify-center flex-col ">
              3
            </span>
            <img
              src="https://dummyimage.com/50x50"
              className="md:w-fit w-min self-center px-2 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="text-center px-2  ">
                Click on “Click here to reveal secret words” to show the seed
                phrase.
              </span>
            </div>
            <span className="w-full bg-black text-left text-white rounded-none p-2 flex justify-center flex-col md:hidden">
              Click on “Click here to reveal secret words” to show the seed
              phrase.
            </span>
          </p>

          <p className="font-mono text-left font-extrabold text-sm md:text-xl flex flex-row md:flex-col  md:space-y-2 ">
            <span className="w-fit md:w-full bg-black text-center text-white rounded-l-none px-2 md:py-1 flex justify-center flex-col ">
              4
            </span>
            <img
              src="https://dummyimage.com/50x50"
              className="md:w-fit w-min self-center px-2 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="text-center px-2  ">
                Enter and confirm your secret seed phrase in the order in which
                it was presented to you
              </span>
            </div>
            <span className="w-full bg-black text-left text-white rounded-none p-2 flex justify-center flex-col md:hidden">
              Enter and confirm your secret seed phrase in the order in which it
              was presented to you
            </span>
          </p>

          <p className="font-mono text-left font-extrabold text-sm md:text-xl flex flex-row md:flex-col  md:space-y-2 ">
            <span className="w-fit md:w-full bg-black text-center text-white rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none px-2 md:py-1 flex justify-center flex-col">
              5
            </span>
            <img
              src="https://dummyimage.com/50x50"
              className="md:w-fit w-min self-center px-2 md:px-0"
            />
            <div className="hidden md:contents">
              <span className="text-center px-2 ">Click on "Confirm"</span>
            </div>
            <span className="w-full bg-black text-left text-white rounded-br-xl p-2 flex justify-center flex-col md:hidden ">
              Click on "Confirm"
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WalletSetup
