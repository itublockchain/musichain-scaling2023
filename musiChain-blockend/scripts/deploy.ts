import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import { ForUser__factory } from './typechain';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const MusicAppUser = await ethers.getContractFactory("MusicAppUser");
  const musicAppUser = await MusicAppUser.deploy();
  
  
  const User = await ethers.getContractFactory("User");
  const user = await User.deploy();

  // Print the contract address
  console.log('MusicAppUser deployed to address:', musicAppUser.address);
  console.log('User deployed to address:', user.address);
};
export default func;