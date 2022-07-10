import React from 'react'

const Content1 = (props) => {
  return (
    <div className="flex-1 flex justify-center content-start">
      <div className="flex flex-col justify-center mt-5 md:mt-0 mb-auto w-11/12 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg space-y-5 md:space-y-20">
        <h1 className="font-mono text-center md:text-left text-xl md:text-3xl font-extrabold">
          Get a chance to mint this NFT!
        </h1>
        <div className="md:hidden contents ">
          <img
            src="https://dummyimage.com/300x300"
            className="w-4/6 md:w-auto mx-auto my-5"
          />
        </div>

        <p className="font-mono text-center md:text-left text-sm md:text-xl font-extrabold text-purple-900">
          Join Konma x Social Works' meet and greet this weekend.
        </p>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10">
          <button
            class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-lg text-md md:text-xl "
            type="button"
            onClick={() => props.set('connect')}
          >
            Connect Wallet
          </button>
          <button
            class="flex-1 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full md:rounded-lg text-md md:text-xl hover-span:text-yellow-400"
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
