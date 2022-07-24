// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async () => {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory(
      "ChainBattles"
    );
    const contract = await nftContractFactory.deploy();
    await contract.deployed();
    console.log("Contract Address:", contract.address);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exitCode(1);
  }
};
main();
