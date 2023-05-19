import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

type HttpNetworkAccountConfig = any;
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.PRIVATE_KEY] as HttpNetworkAccountConfig | undefined,
    //   accounts: {
    //     mnemonic: process.env.PRIVATE_KEY,
    //     path: "m/44'/52752'/0'/0/"
    // },
      chainId: 44787,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
