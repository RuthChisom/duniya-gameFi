import { ethers } from "hardhat";
require("dotenv").config();

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
  const greeter = await Greeter.deploy(process.env.WALLET_1, process.env.WALLET_2);

  await greeter.deployed();

  console.log(
    `Greeter contract is deployed to ${greeter.address}! Weldone!!! `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
