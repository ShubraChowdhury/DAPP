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


truffle compile
truffle migrate --reset //used for Local 

Left the mnemonic and infuraKey in the file truffle-config.js (I did not use the .env file )

// This Migration failed as I do not have real ETH ( in order to get ETH from faucte the sites I have navigated is asking that I should have min ETH)
truffle migrate --reset --network goerli
truffle(develop)> migrate --reset --network goerli

Compiling your contracts...

===========================

> Compiling .\contracts\Migrations.sol

> Compiling .\contracts\StarNotary.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\GSN\Context.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\drafts\Counters.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\introspection\ERC165.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\introspection\IERC165.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\math\SafeMath.sol

> Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\ERC721.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\token\ERC721\IERC721Receiver.sol
> Compiling .\node_modules\openzeppelin-solidity\contracts\utils\Address.sol
> Artifacts written to D:\Training\udacity\BlockChain\projects\DAPP\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang




Migrations dry-run (simulation)
===============================
> Network name:    'goerli-fork'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================


   Deploying 'Migrations'
   ----------------------

 *** Deployment Failed ***

"Migrations" could not deploy due to insufficient funds
   * Account:  0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
   * Balance:  0 wei
   * Message:  insufficient funds for gas * price + value
   * Try:
      + Using an adequately funded account
      + If you are using a local Geth node, verify that your node is synced.
      
      
      
      Exiting: Review successful transactions manually by checking the transaction hashes above on Etherscan.
      
      
      
      Error:  *** Deployment Failed ***
      
      "Migrations" could not deploy due to insufficient funds
         * Account:  0x83F5aD0723fb7C0903C9f6D98fc01299dF87F838
         * Balance:  0 wei
         * Message:  insufficient funds for gas * price + value
         * Try:
            + Using an adequately funded account
            + If you are using a local Geth node, verify that your node is synced.
      
          at C:\Users\shuchowdhury\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\deployer\src\deployment.js:330:1
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
      
      1
truffle(develop)>
