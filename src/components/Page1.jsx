import React from 'react'

const Page1 = (props) => {
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center md:mx-10 space-x-0 md:space-x-5 space-y-5 md:space-y-0">
      <div className="flex-none">
        <img
          src="https://dummyimage.com/300x300"
          className="h-40 w-40 md:h-96 md:w-96 m-5"
        />
      </div>
      <div className="flex-1 flex flex-col md:justify-center md:items-start space-y-5">
        <h1 className="text-center md:text-left font-mono font-bold text-black text-3xl md:text-7xl">
          Blockchain Web3
          <br /> Enthusiast
          <br />
          Meet & Greet
        </h1>
        <p className="text-center md:text-left font-mono font-bold text-black text-lg">
          <span className="hidden md:contents">
            Get your NFT, preserve your memory.
          </span>
          <span className="content md:hidden">Drop in secure your NFT</span>
          <br />
        </p>
        <button
          className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-none text-xl "
          onClick={() => props.set('Page2')}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Page1
