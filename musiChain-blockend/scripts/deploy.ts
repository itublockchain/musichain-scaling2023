import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import { ForUser__factory } from './typechain';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy the contract
  await deploy('User', {
    from: deployer,
    args: [/* pass any constructor arguments here if needed */],
    log: true,
  });

  // Get a signer to use for interacting with the contract
  const signer = await ethers.getSigner(deployer);

  // Get the deployed contract
  const contractFactory = new ForUser__factory(signer);
  const contract = await contractFactory.deploy();

  // Print the contract address
  console.log('Contract deployed to address:', contract.address);
};

export default func;
