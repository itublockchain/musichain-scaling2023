import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const fs = require("fs");

require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const HardhatUserConfig = {
  solidity: "0.8.18",
};


const defaultNetwork = "scrollAlpha";



function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    if (defaultNetwork !== "scrollAlpha") {
      console.log(
        "☢️ WARNING: No mnemonic file created for a deploy account. Try `yarn run generate` and then `yarn run account`."
      );
    }
  }
  return "";
}


module.exports = {
	networks: {
          scrollAlpha: {
            url: "https://alpha-rpc.scroll.io/l2",
            accounts: {
              mnemonic: mnemonic(),
            },
          },
	}
}

export default config;

