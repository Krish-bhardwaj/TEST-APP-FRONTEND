import React from 'react'

const Card = () => {
  return (
    <div className="hidden md:contents">
      <div className="inline-flex justify-center">
        <div className="flex flex-col justify-center items-center w-2/3 md:w-fit bg-white p-2 md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
          <div className="flex flex-col space-y-10 bg-black text-white font-mono text-xl p-5 rounded-lg">
            <div className="flex flex-row space-x-10">
              <div className="flex flex-col space-y-3">
                <p>Network</p>
                <img src="https://dummyimage.com/50x50" className="w-fit" />
                <p>{'Etherium mainnet'}</p>
              </div>
              <div className="flex flex-col space-y-3">
                <p>Balance</p>
                <p>{2.39909} ETH</p>
                <img
                  src="https://dummyimage.com/50x50"
                  className="w-fit ml-auto"
                />
              </div>
            </div>
            <div>Account no | {'0x4f4...Dfda'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
