import React, {useState} from 'react';
// import styled from "styled-components";

export default function connectToLiberty() {

  //  const Button = styled.button `
  //     background-color: black;
  //     color: white;
  //     font-size: 20px;
  //     padding: 10px 60px;
  //     border-radius: 5px;
  //     margin: 10px 0px;
  //     cursor: pointer;
  //   `;

 const chainId = '0x1f90';
 const rpcURL = 'https://liberty10.shardeum.org/';
 const networkName = 'Shardeum Liberty 1.X';
 const currencyName = 'SHM';
 const currencySymbol = 'SHM';
 const explorerURL = 'https://explorer-liberty10.shardeum.org/';

const addNetwork = async () => {
  if (!window.ethereum) {
    alert("Metamask not detected! Install Metamask then try again.")
    return;
  }
  if (window.ethereum.networkVersion == 8080) {
    alert("You are already connected to Liberty 1.X (chainId 8080).", )
    return;
  }
  try{
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: chainId,
          chainName: networkName,
          rpcUrls: [rpcURL],
          blockExplorerUrls: [explorerURL],
          nativeCurrency: {
            name: currencyName,
            symbol: currencySymbol, // 2-6 characters long
            decimals: 18,
          },
        },
      ],
      });
  } catch (error) {
    alert("Failed to add the network with wallet_addEthereumChain request. Add the network with https://chainlist.org/ or do it manually. Error log: " + error.message)
  }

};

  return (

    // <Button onClick={addNetwork}>Connect to Liberty 1.X</Button>    

    // <button onClick={addNetwork}>Connect to Liberty 1.X</button>    

    <button className="button buttonHighContrast" onClick={addNetwork}>Click to Connect to Liberty 1.X</button>

  );

}
