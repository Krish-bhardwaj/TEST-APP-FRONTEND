import React from 'react'

const Main = () => {
  return (
    <div className="hidden md:contents">
      <div className="inline-flex justify-center">
        <div className="flex flex-col justify-center items-center w-2/3 md:w-fit bg-white p-2 md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
          <h1 className="font-mono text-center text-xl md:text-3xl font-extrabold">
            Connect Wallet
          </h1>
          <img
            src="https://dummyimage.com/300x300"
            className="w-4/6 md:w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
