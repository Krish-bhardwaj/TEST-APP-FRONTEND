import React from 'react'
const Card = () => {
  return (
    <div className="hidden md:contents">
      <div className="inline-flex justify-center">
        <div className="flex flex-col items-center justify-center w-2/3 p-2 bg-white md:w-fit md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
          <div className="flex flex-col p-5 space-y-10 font-mono text-xl text-white bg-black rounded-lg">
            <div className="flex flex-row space-x-10">
              <div className="flex flex-col space-y-3">
                <p>Network</p>
                <img src="https://dummyimage.com/50x50" className="w-fit" />
                <p>{'Etherium mainnet'}</p>
              </div>
            </div>
            <div>Account no </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
