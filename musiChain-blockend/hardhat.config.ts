import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


// const defaultNetwork = "scrollAlpha";

import

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    scrollTestnet: {
      url: process.env.SCROLL_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};


// module.exports = {
//   networks: {
//     hardhat: {},
//     scroll: {
//       url: "https://alpha-rpc.scroll.io/l2",
//         accounts: {
//           mnemonic: "robust rifle escape useless fragile inject since north skirt much outdoor lesson",
//         },
//     },
//   },
//   solidity: {
//     compilers: [
//       {
//         version: "0.8.7",
//         settings: {
//           optimizer: {
//             enabled: true,
//             runs: 200,
//           },
//         },
//       },
//     ],
//   },
//   namedAccounts: {
//     deployer: {
//       default: 0,
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
// };



export default config;
