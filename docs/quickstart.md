---
title: Quickstart
sidebar_position: 1
slug: /
---

# Quickstart

## Shardeum Overview

Shardeum is a blockchain that supports EVM smart contracts.

For more general information on Shardeum:

[What is Shardeum?](/Introduction/What-Is-Shardeum)

## Cross Shard Composability with Linear Scaling

Shardeum is sharded, allowing the network to scale linearly with more nodes.
Horizontally scaling in this fashion allows for high transactions per second at low gas prices.

Find out more about Shardeum nodes:

[Shardeum Node Types](/Node/Types)

Running nodes:

[How to run a validator node](/Node/Run/Validator)

## Wallet Setup For Using Shardeum

You will need an EVM wallet like Metamask to:

      -pay for transaction gas fees
      -transfer tokens
      -interact with smart contracts

For more info on Metamask:

[Metamask Introduction](/Wallets/Metamask/Introduction)

## Fund Your Wallet With SHM On Shardeum

Find out how to get testnet tokens from our faucets here:

[Claim LIberty 100 SHM From Shardeum Faucets](/Faucet/Claim)

## Connect Wallet To Shardeum

Connect to Shardeum using the following network endpoints found here:

[Shardeum Endpoints](/Network/Endpoints)

Note: you can quickly connect your Metamask to Shardeum with:

[https://chainlist.org/?testnets=true&search=Shardeum](https://chainlist.org/?testnets=true&search=Shardeum)

## Reading Shardeum Transactions

View transactions on Shardeum using the Shardeum Explorer:

[Shardeum Explorer](/Network/Explorer)

## Deploy Contracts to Shardeum

Since Shardeum is EVM compatible, you can use the following frameworks to deploy to Shardeum:

[Remix IDE](/SmartContracts/Deploy/Remix)

[Foundry](/SmartContracts/Deploy/Foundry)

[Hardhat](/SmartContracts/Deploy/Hardhat)

[Truffle](/SmartContracts/Deploy/Truffle)

To deploy contracts at the same address cross chain:

[Same Address Cross Chain](/SmartContracts/Deploy/SameAddress)

## Deploying Tokens To Shardeum

All EVM based token standards are supported on Shardeum (since Shardeum is EVM compatible).
Popular tokens supported on Shardeum:

[ERC-20 (Fungible Tokens)](/SmartContracts/Tokens/ERC-20)

[ERC-721 (NFTs)](/SmartContracts/Tokens/ERC-721)

[ERC-1155 (Token Emulator)](/SmartContracts/Tokens/ERC-1155)

## Cross Shard Composability Communication With EIP-2930

Smart contract addresses that don't have the same prefix are deployed to different shards.
The EIP-2930 accessList is used for shard routing contracts on different shards and is automated inside Shardeum nodes. 

For more info on how the EIP-2930 accessList works on Shardeum:

[EIP-2930 Overview](/SmartContracts/EIP-2930/MulticallContract)

## Integrate File Storage Into Shardeum

We recommend users to use decentralized file storage standards like IPFS and Filecoin.

Files stored on IPFS can be used in contracts to deploy contracts with CID values as shown in this example:

[IPFS and Filecoin](/Storage/IPFSandFilecoin)

## Oracles on Shardeum

Get off chain data securely on Shardeum using oracle providers.

[SupraOracles](/Oracles/SupraOracles)