require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    bnbtestnet: {
      url: "https://indulgent-newest-leaf.bsc-testnet.discover.quiknode.pro/8a8483b20d028a2b4ca603f1f86a6f1d702a6624/",
      accounts: [
        "fde37420a21736af5f85818d2415f85a3dcc54356687a4c444780350ec3998ee",
      ],
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gasreporter.txt",
    noColors: true,
  },
  etherscan: {
    apiKey: "Z6H2Q2ND5VCIDXIBETK9RDDRGYR4Z73VKX", // Your Etherscan API key
  },
};