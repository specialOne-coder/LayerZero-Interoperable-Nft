# LayerZeroNFT

Hi,To start with, I will show you how to retrieve and update the project, then I will explain what all the folders mean, then I will show you the necessary configurations to do before deployment, and all the possible operations.

:warning: All these infos are from the testnets, all that are in the constants folder and in the hardhat.config file 

```
ethereum = rinkeby
polygon = mumbai
arbitrum = arbitrum rinkeby
optimism = optimism kovan
bsc = bsc testnet
avax = fuji testnet
fantom = fantom testnet

```

## Start

First, you recover the project by making a `git clone`
After recovering it, you make a `cd LayerZeroNFT` to enter the project directory 
and you make `npm install` to install all the dependencies

### Folders

> Constants Folder

- **chainIds.json**

it contains all the chains id of the different chains of layerZero
LayerZero endpoints use a chainId to identify different blockchains.
You can find them all [here](https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses)

- **layerzeroEndpoints.json**

it contains all the endpoint address of the different chains of layerZero 
You can find them all [here](https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses)


- **layerZeroArgs.json**

In this file you will find how your nfts are distributed on the different blockchains, you will see that the whole makes 1000, we have start and end ids on all blockchains. If you want to change them, make sure they respect the way I wrote them

- **verifyContract.js**

this file contains the arguments to make the verification of the contracts on the different blockchains, by using it, you will have to be sure that the arguments are the same as during the deployment otherwise the verification will not pass

> Contracts Folder

in this folder is the contract
You can check them out

> Deploy Folder

This folder contains the deployment script


> Tasks Folder

This folder contains all the scripts of operations that you will do, to test on the testnet but also on the mainnet, as for example the communication between the different blockchains, the addition of addresses to a whitelist, whitelistMint, the sending of nfts between the chains and others.

> Test Folder

Nothing

> Utils Folder

this folder contains a script to read the deployment folder that will be automatically created after the deployments 

> hardhat.config.js

this file contains all the configurations made to interact with the different blockchains,
you will find their rpc url, their chain ids, their gas fee etc

## Transactions

To start, create a file named **.env** in the root of the project
in this file put this : 

```shell
PRIVATE_KEY=your private key for deploy
PRIVATE_KEY2=your private key for test for example whitelist if you want
ETHER_API_KEY= your etherscan api key for verify contract on etherscan, its free to creating
POLYGON_API_KEY= your polygon api key for verify contract on polyscan, its free to creating
ARBITRUM_API_KEY=...
OPTIMISM_API_KEY=...
```

You can put all the different api keys of the different blockchains to use the script or you can do it directly on the browsers, up to you, I chose the first option

Don't forget to create a wallet especially for this and to put on this wallet all the funds on the different blockchains.

### Testnet

You don't need to change anything to make the transactions on the testnet


> Deploy 

You have to change the first and the second argument which represent the metadatas, in **deploy.js** the first one corresponds to all the json files you have to put on ipfs, and the second one corresponds to a default json file for all the nfts minted before the reveal. 
For the second one, I created a default json file that I left on pinata.
you can do the tests with

In the terminal, be sure to be in the project directory and
to deploy on the 7 networks you must do.

```shell
npx hardhat --network ethereum deploy --tags LayerZeroNFT
npx hardhat --network arbitrum deploy --tags LayerZeroNFT
npx hardhat --network optimism deploy --tags LayerZeroNFT
npx hardhat --network polygon deploy --tags LayerZeroNFT
npx hardhat --network bsc deploy --tags LayerZeroNFT
npx hardhat --network avax deploy --tags LayerZeroNFT
npx hardhat --network fantom deploy --tags LayerZeroNFT
```
After the deployment a **deployment** folder will be automatically created in the root of your project.

> Set Trusted Source 

To enable communication between different blockchains, 
you need to do the following for all blockchains

- **Ethereum communication**

To allow communication between ethereum and other chains do : 

```shell
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network avax
npx hardhat --network ethereum LayerZeroNftSetTrustedSource --target-network fantom
```

- **Arbitrum communication**

```shell
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network avax
npx hardhat --network arbitrum LayerZeroNftSetTrustedSource --target-network fantom
```

- **Optimism communication**

```shell
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network avax
npx hardhat --network optimism LayerZeroNftSetTrustedSource --target-network fantom
```

- **Polygon communication**

```shell
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network avax
npx hardhat --network polygon LayerZeroNftSetTrustedSource --target-network fantom
```

- **Bsc communication**

```shell
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network avax
npx hardhat --network bsc LayerZeroNftSetTrustedSource --target-network fantom
```

- **Avax communication**

```shell
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network avax LayerZeroNftSetTrustedSource --target-network fantom
```

- **Fantom communication**

```shell
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network ethereum
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network arbitrum
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network polygon
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network optimism
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network bsc
npx hardhat --network fantom LayerZeroNftSetTrustedSource --target-network avax
```

ok if you have no error it means that the communication between all blockchains is now good.

> Start Public Mint

After your whitlisted users have made their mint, you can start the public mint by doing :

```shell
 npx hardhat --network avax startMint
```

> Mint

You can test the mint by doing : 

- on polygon 

```shell
 npx hardhat --network polygon LayerZeroNftMint
```

- on arbitrum 

```shell
 npx hardhat --network polygon LayerZeroNftMint 
```

- on ethereum

```shell
 npx hardhat --network ethereum LayerZeroNftMint 
```

and so on...

> OpenSea view

you can see them on [OpenSea testnet](https://testnets.opensea.io/)
Copy and paste the address of your ethereum and polygon contract, so you will see your collection displayed on opensea,
You can keep 2 tabs open in the browser for these 2 blockchains. We will test the sending between the chains.


> Send nfts between different blockchains

as we have already posted our collection on opensea,
 we will test the sending between ethereum and polygon
 
 for example to send a nft from ethereum to polygon
 make : 

```shell
 npx hardhat --network ethereum LayerZeroNftSend --target-network polygon --token-id 1
```

be sure that the token id exists and that you put the right one 
look carefully at the id of the token you want to transfer to opensea

if all is well you can now see that your token which was on ethereum is now on polygon, you can see it on Opensea

> Reveal 

After mint you can reveal with 

```shell
 npx hardhat --network ethereum reveal 
```

after the reveal if all your metadatas are near 
you can see them or if not you can metadatas with 

> Set base Uri

you can change your metadatas with the uri base, 
for that you have to put in parameter of the method  **setBaseURI** that is in **setBaseURI.js** 
which is located in **tasks**

```shell
 npx hardhat --network ethereum setBaseURI 
```

> Verify contrat

To check the contract, don't forget to: 

- In the **verifyContract.js** file of the **constants** folder, put the same arguments as the one used during the deployment 
- create the api keys on different explorers like etherscan, polyscan, arbiscan, snowtrace, etc...
- Put these keys in the **.env** environment variable as explained above. 
- in **hardhat.config.js** configure the etherscan variable by replacing each time the apiKey by the one of the blockchain you want

For example verify ethereum contract make : 

 in **hardhat.config.js** : 

``` shell
 etherscan: {
    apiKey: process.env.ETHER_API_KEY,
  }
```

and make : 

```shell
 npx hardhat verify --network ethereum --constructor-args constants/verifyContract.js addressofcontract
```

For polygon example 

 in **hardhat.config.js** : 

``` shell
 etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
  }
```

and make : 

```shell
 npx hardhat verify --network polygon --constructor-args constants/verifyContract.js addressofcontract
```

if all this is difficult for you, you can learn how to check contracts from blockchain explorers


### Mainnet

To deploy on the mainnet, you must absolutely change : 

- All the chains ids that are in **chainIds.json** with those of the mainnet : [LayerZero mainnet ids](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids)

- All the endpoints that are in **layerzeroEndpoints.json** with those of the mainnet : [LayerZero mainnet endpoints](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids)

- All networks config that are in **hardhat.config.js** (all url and chainId)

the transactions remain the same.


### Thank you

Contact me if you have question
Source : https://github.com/LayerZero-Labs/solidity-examples

 :rocket: :rocket: :rocket:
