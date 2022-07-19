import React from 'react'
import { useState } from 'react'
import { Main } from './smartcontract/NFT'
import NFT from './assets/NFT.png'

const ClaimNFT = (props) => {
  const [success, setSuccess] = useState(1)
  const [url, setUrl] = useState('')
  // Smart Contract Integration
  const main = async (address) => {
    console.log('TEST')
    setSuccess(0)
    const x = await Main(address)
    setUrl(x)
    setSuccess(2)
  }
  const openInNewTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-10 font-mono">
      <div class="w-full  rounded-lg border shadow-md bg-gray-800 p-2 md:p-5">
        <div class="flex flex-col items-center space-y-10 ">
          <div>
            <img
              class="mb-3 w-40 h-40 rounded-full shadow-lg flex-1"
              src={NFT}
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center flex-1">
              XYZ EVENT
            </h5>
          </div>
          <div className="flex flex-col space-y-4  flex-1">
            <p className="font-bold text-sm md:text-xl text-black bg-purple-400 p-2 text-center rounded-xl">
              Wallet Address <br className="contents md:hidden"></br>
              {props.address.substring(0, 4) +
                '...' +
                props.address.substring(38)}
            </p>
            <button
              className="inline-flex items-center p-2 font-semibold text-black bg-sky-400 text-sm md:text-xl rounded-xl"
              onClick={() => main(props.address)}
            >
              {success === 0 && (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
                    fill="black"
                  />
                  <path
                    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                    fill="black"
                  />
                </svg>
              )}
              {success === 1 && (
                <p className="flex-1 align-center a">Clam your NFT</p>
              )}
              {success === 0 && (
                <p className="flex-1 align-center a">Work in progress</p>
              )}
              {success === 2 && (
                <p
                  className="flex-1 align-center"
                  onClick={() => openInNewTab()}
                >
                  View your NFT on OpenSea
                </p>
              )}
            </button>
          </div>
          <span class="text-gray-300 md:px-10">From KONMA NFT Collection</span>
        </div>
      </div>
    </div>
  )
}

export default ClaimNFT
