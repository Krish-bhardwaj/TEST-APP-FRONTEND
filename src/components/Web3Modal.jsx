import React from 'react'

const Web3Modal = (props) => {
  return (
    <div className="flex content-start justify-center flex-1">
      <div className="flex flex-col items-center justify-center w-11/12 p-5 mb-auto space-y-2 bg-white md:mt-0 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <button
          className="self-start px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-full w-fit hover:bg-black hover:text-white md:rounded-lg text-md md:text-xl "
          type="button"
          onClick={() => props.set('main')}
        >
          Back
        </button>
        
      </div>
    </div>
  )
}

export default Web3Modal