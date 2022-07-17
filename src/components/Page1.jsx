import React from 'react'
import logo from './assets/Konma_Logo-01_square_0.png'
const Page1 = (props) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 space-y-5 -space-x-0 md:flex-row md:mx-10 md:space-x-5 md:space-y-0">
      <div className="flex-none">
        <img
          src={logo}
          className="w-40 h-40 m-5 md:h-96 md:w-96"
        />
      </div>
      <div className="flex flex-col flex-1 space-y-5 md:justify-center md:items-start">
        <h1 className="font-mono text-3xl font-bold text-center text-black md:text-left md:text-7xl">
          Blockchain Web3
          <br /> Enthusiast
          <br />
          Meet & Greet
        </h1>
        <p className="font-mono text-lg font-bold text-center text-black md:text-left">
          <span className="hidden md:contents">
            Get your NFT, preserve your memory.
          </span>
          <span className="content md:hidden">Drop in secure your NFT</span>
          <br />
        </p>
        <button
          className="px-4 py-2 text-xl font-semibold text-black bg-transparent border border-black rounded-full hover:bg-black hover:text-white md:rounded-none "
          onClick={() => props.set('Page2')}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Page1
