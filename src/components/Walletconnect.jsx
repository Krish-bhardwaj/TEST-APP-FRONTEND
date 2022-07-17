import WalletConnectProvider from "@walletconnect/web3-provider";

export default function Walletconnect() {
    const provider = new WalletConnectProvider({
      infuraId: "26157b8cd83d4de1a2e617703d981da8",
    });
    const connect = async () => {
      //  Enable session (triggers QR Code modal)
      await provider.enable();
    }  
  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
      {/* <h4>Address: {account}</h4>
      <button onClick={walletDisconnect}>Reset</button> */}
    </div>
  )
}
