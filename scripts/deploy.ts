import { ethers } from "hardhat";
require("dotenv").config();
const { verifyContract } = require("../utils/verifyContract");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.utils.parseEther("0.001");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
  
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy('0x675D50bD75F96DE5f21d9BfdB2C9b761e4aF4834', '0x9872421a71E1b12CBF62E649B121e394c9BC1ed7');
  // const greeter = await Greeter.deploy(process.env.WALLET_1, process.env.WALLET_2);

  await greeter.deployed();

  const contractAddress = greeter.address;


  console.log(
    `Greeter contract is deployed to ${greeter.address}! Weldone!!! `
  );
  // console.log("Verifying contract -----------");

  // await verifyContract(greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
