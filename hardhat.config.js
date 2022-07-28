require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@nomiclabs/hardhat-etherscan');
require('./tasks');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },

  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  namedAccounts: {
    deployer: {
      default: 0,    // wallet address 0, of the mnemonic in .env
    }
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    ethereum: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [process.env.PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 8000000000
    },
    arbitrum: {
      url: "https://rinkeby.arbitrum.io/rpc",
      chainId: 421611,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    },
    optimism: {
      url: "https://kovan.optimism.io/",
      chainId: 69,
      accounts: [process.env.PRIVATE_KEY],
      // gas: 2100000,
      // gasPrice: 8000000000
    },
    polygon: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 80000000000
    },
    bsc: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY],
      // gas: 2100000,
      // gasPrice: 80000000000
    },
    avax: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
      // gas: 3097020,
      // gasPrice: 25000000000
    },
    fantom: {
      url: `https://rpc.testnet.fantom.network/`,
      chainId: 4002,
      accounts: [process.env.PRIVATE_KEY],
      // gas: 2100000,
      // gasPrice: 8000000000
    }
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
  }
};
