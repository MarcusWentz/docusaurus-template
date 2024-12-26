---
title: Types
sidebar_position: 1
---

# Node Types

## Validator

:::tip
It is recommended to stake just 10 SHM per Validator node, 
since rewards will be the same with 10 SHM or more staked for a Validator. 
:::

### Active

These nodes validate the transactions in the network by participating in the consensus. They will have to stake SHM to be able to participate. Shardeum will reward them with SHM for participating (network rewards will come from predefined SHM emissions, and the transaction fees earned). Validator nodes don't store the whole history, so they are lightweight. The active validator network size grows and shrinks based on transactions pending that need validation consensus from validators.

### Standby

:::caution
Standby validators require staked SHM to become active.
:::

These are validator nodes standing by in the network and not currently participating in consensus. Standby nodes help scale the Shardeum network quicker when more transactions are pending. At the end of every cycle, the oldest active validators in the network are rotated out for standby validators.

## RPC

These nodes are able to access the EVM Based JSON RPC interface that is used to read and write data on the Shardeum blockchain.
Wallets must be connected to an RPC URL to interact with blockchains for example. 

Public Shardeum RPC URL endpoints:

[Shardeum Endpoints](/network/endpoints)

Read RPC method example:

[eth_chainId RPC method](https://www.quicknode.com/docs/ethereum/eth_chainId)

Write to a blockchain example:

[eth_sendRawTransaction RPC method](https://www.quicknode.com/docs/ethereum/eth_sendRawTransaction)

## Archive

Archive nodes maintain the entire transaction history. Archive nodes may or may not have to stake SHM, but they will earn a portion of the network reward to motivate and incentivize for storing historical data.

:::info
Network node reward schedule is work in progress in collaboration with the community and will be finalized/announced in the next few months.
:::