import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import { ForUser__factory } from './typechain';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const Artist = await ethers.getContractFactory("Artist");
  const artist = await Artist.deploy();
  
  
  const User = await ethers.getContractFactory("User");
  const user = await User.deploy();

  // Print the contract address
  console.log('Artist deployed to address:', artist.address);
  console.log('User deployed to address:', user.address);
};
export default func;