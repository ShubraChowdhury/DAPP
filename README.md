npm install -g truffle
truffle unbox webpack 
npm install --save  truffle-hdwallet-provider@1.0.17
npm install openzeppelin-solidity ==> This causes issues with the version
RESOLVING solidity version issue

"Solidity 0.5 use the below mentioned  (Note create a directory "node_modules" under root directory or else the "node_modules" under "app" will fail to create openzeppelin-solidity 
and you will not get the file ERC721.sol"

npm install @openzeppelin/contracts@2.5.1

ERC-721 Token name = "Shubra West Star"
ERC-721 Token symbol = "SHUBW"
Truffle v5.10.1 (core: 5.10.1)
Ganache v7.8.0
Solidity v0.5.16 (solc-js)
Node v18.16.0
Web3.js v1.10.0

Reference https://knowledge.udacity.com/?nanodegree=nd1309&page=1&project=526&rubric=5028
Followed steps shown by Rachana/Instructor

Getting Chain ID

networkId = await web3.eth.net.getId();
chainId = await web3.eth.getChainId();

WINDOWS (npm run dev fails to, work arount is to set NODE_OPTIONS)
set  NODE_OPTIONS=--openssl-legacy-provider
THEN RUN
npm run dev

================= TEST =================================
truffle(develop)> test
Using network 'develop'.



Compiling your contracts...

===========================

> Everything is up to date, there is nothing to compile.





  v can Create a Star (88ms)

  v lets user1 put up their star for sale (104ms)

  v lets user1 get the funds after the sale (156ms)

  v lets user2 buy a star, if it is put up for sale (169ms)

  v lets user2 buy a star and decreases its balance in ether (167ms)

  v can add the star name and star symbol properly (40ms)

  v lets 2 users exchange stars (273ms)

  v lets a user transfer a star (127ms)

  v lookUptokenIdToStarInfo test (86ms)



  9 passing (1s)


======================== MIGRATE TO SEPOLI ============================


truffle(develop)> migrate --reset --network sepolia

Compiling your contracts...

===========================

> Everything is up to date, there is nothing to compile.




Migrations dry-run (simulation)
===============================
> Network name:    'sepolia-fork'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================


   Deploying 'Migrations'
   ----------------------

   > block number:        3788317
   > block timestamp:     1688002616
   > account:             0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
   > balance:             0.179811085996064128
   > gas used:            245992 (0x3c0e8)
   > gas price:           2.500000016 gwei
   > value sent:          0 ETH
   > total cost:          0.000614980003935872 ETH


   -------------------------------------
   > Total cost:     0.000614980003935872 ETH



2_deploy_contracts.js
=====================


   Deploying 'StarNotary'
   ----------------------

   > block number:        3788319
   > block timestamp:     1688002616
   > account:             0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
   > balance:             0.174060625963815778
   > gas used:            2254410 (0x22664a)
   > gas price:           2.500000014 gwei
   > value sent:          0 ETH
   > total cost:          0.00563602503156174 ETH


   -------------------------------------
   > Total cost:     0.00563602503156174 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.006251005035497612 ETH







Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================


   Deploying 'Migrations'
   ----------------------

   > transaction hash:    0x97e016e6c7b90b9b21f9bd26dcf8a69a40f345aa42acf2dfd544eacc33322e26

   > Blocks: 0            Seconds: 24
   > contract address:    0xb64FFC501861b56b3bf163e1D458cb142386F733
   > block number:        3788321
   > block timestamp:     1688002644
   > account:             0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
   > balance:             0.180425909171982264
   > gas used:            245992 (0x3c0e8)
   > gas price:           0.000637533 gwei
   > value sent:          0 ETH
   > total cost:          0.000000156828017736 ETH


   > Saving migration to chain.

   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000000156828017736 ETH



2_deploy_contracts.js
=====================


   Deploying 'StarNotary'
   ----------------------

   > transaction hash:    0xfce7a3585624745c6acaf77accfa7fe595f7eb700c267e0980f9d489165f5daa

   > Blocks: 1            Seconds: 12
   > contract address:    0x985c59dD55124E0EecE3Cd5adDB3a767BFAB4D55
   > block number:        3788323
   > block timestamp:     1688002668
   > account:             0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
   > balance:             0.180424442726521782
   > gas used:            2254410 (0x22664a)
   > gas price:           0.000637534 gwei
   > value sent:          0 ETH
   > total cost:          0.00000143726302494 ETH


   > Saving migration to chain.

   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000143726302494 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.006252599126540288 ETH




truffle(develop)>




================================URL==========================================

https://sepolia.etherscan.io/address/0x83f5ad0723fb7c0903c9f6d98fc01299df87f838

