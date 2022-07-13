require('dotenv').config()
// const fs = require('fs')
// const FormData = require('form-data')
const axios = require('axios')
const { ethers } = require('ethers') //Grab the contract ABI
const contract = require('./Contract.json')
const user = require('./User.json')
// user / reciver address
const USER_ADDRESS = '0xdc06B6763633f7573d3E66Db16DbBEde848502db'

const MintNFT = async () => {
  console.log('Mint Fucntion')
  const {
    PINATA_API_KEY,
    PINATA_SECRET_KEY,
    API_URL,
    PRIVATE_KEY,
    PUBLIC_KEY,
    CONTRACT_ADDRESS,
  } = process.env

  const metadata = {
    image:
      'https://gateway.pinata.cloud/ipfs/QmXPzuDDmxqZxwfmpLY8P8q52GNcV1oB4zzWYys65oahPH',
    name: 'KONMA',
    description: 'POAP NFT',
  }
  const pinataJSONBody = {
    pinataContent: metadata,
  }
  const jsonResponse = await axios.post(
    'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    pinataJSONBody,
    {
      headers: {
        'Content-Type': `application/json`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_KEY,
      },
    },
  )
  const { data: jsonData = {} } = jsonResponse
  const { IpfsHash } = jsonData
  const tokenURI = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`

  const provider = new ethers.providers.JsonRpcProvider(API_URL)
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
  const etherInterface = new ethers.utils.Interface(contract.abi)
  // Get latest nonce
  const nonce = await provider.getTransactionCount(PUBLIC_KEY, 'latest')
  // Get gas price
  const gasPrice = await provider.getGasPrice()
  // Get network
  const network = await provider.getNetwork()
  const { chainId } = network
  //Transaction object
  const transaction = {
    from: PUBLIC_KEY,
    to: CONTRACT_ADDRESS,
    nonce,
    chainId,
    gasPrice,
    data: etherInterface.encodeFunctionData('mintNFT', [PUBLIC_KEY, tokenURI]),
  }
  //Estimate gas limit
  const estimatedGas = await provider.estimateGas(transaction)
  transaction['gasLimit'] = estimatedGas
  //Sign & Send transaction
  const signedTx = await wallet.signTransaction(transaction)
  const transactionReceipt = await provider.sendTransaction(signedTx)
  await transactionReceipt.wait()
  const hash = transactionReceipt.hash
  console.log('Your Transaction Hash is:', hash)
  // Get transaction receipt
  const receipt = await provider.getTransactionReceipt(hash)
  const { logs } = receipt // Get token ID
  const tokenInBigNumber = ethers.BigNumber.from(logs[0].topics[3])
  const tokenId = tokenInBigNumber.toNumber()
  console.log('Token ID minted:', tokenId)
  console.log(
    `See your NFT at opensea here : https://testnets.opensea.io/assets/rinkeby/${CONTRACT_ADDRESS}/${tokenId}`,
  )
  return tokenId
}
const Transfer = async (tokenId) => {
  console.log('Transfer Fucntion')
  const { API_URL, PRIVATE_KEY, PUBLIC_KEY, CONTRACT_ADDRESS } = process.env
  const provider = new ethers.providers.JsonRpcProvider(API_URL)
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
  //Get gas price
  const gasPrice = await provider.getGasPrice()
  //Grab contract ABI and create an instance
  const nftContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    wallet,
  )
  //Estimate gas limit
  const gasLimit = await nftContract.estimateGas[
    'safeTransferFrom(address,address,uint256)'
  ](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasPrice })
  //Call the safetransfer method
  const transaction = await nftContract[
    'safeTransferFrom(address,address,uint256)'
  ](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasLimit })
  //Wait for the transaction to complete
  await transaction.wait()
  console.log('Transaction Hash: ', transaction.hash)
  return transaction.hash
}
// Transfer(MintNFT());
const Main = async () => {
  console.log('-- PROCESS START --')
  console.log('Main Fucntion')

  const { API_URL, PRIVATE_KEY, USER_PROFILE, CONTRACT_ADDRESS } = process.env
  const provider = new ethers.providers.JsonRpcProvider(API_URL)
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
  //Get gas price
  const gasPrice = await provider.getGasPrice()
  //Grab contract ABI and create an instance
  const userContract = new ethers.Contract(USER_PROFILE, user.abi, wallet)
  const Tx1 = await userContract['showTokenId(address)'](USER_ADDRESS)
  const value = ethers.BigNumber.from(Tx1).toNumber()
  console.log(value)
  if (value == 0) {
    console.log('Yes he is allowed to mint !!!')

    let tokenid = await MintNFT()
    let txnhash = await Transfer(tokenid)
    console.log(
      `You have recived NFT of our collection \nToken id : ${tokenid} \nTransaction Hash : ${txnhash}\nView on OpenSea : https://testnets.opensea.io/assets/rinkeby/${CONTRACT_ADDRESS}/${tokenid}`,
    )
    const Tx2 = await userContract['update(address,uint256)'](
      USER_ADDRESS,
      tokenid,
    )
    console.log(Tx2)
  } else {
    console.log('No he is not allowed to mint ')
    // console.log(
    //   `You have recived NFT of our collection its token id is : ${value}`,
    // )
    console.log(
      `You have recived NFT of our collection \nToken id : ${value}\nView on OpenSea : https://testnets.opensea.io/assets/rinkeby/${CONTRACT_ADDRESS}/${value}`,
    )
  }

  // const Tx2 = await userContract['update(address,uint256)'](USER_ADDRESS, 0)
  // console.log(Tx2)
  //   const Tx3 = await userContract['showTokenId(address)'](USER_ADDRESS)
  //   console.log(ethers.BigNumber.from(Tx3).toNumber())

  console.log('-- PROCESS FINISH --')
}
Main()
