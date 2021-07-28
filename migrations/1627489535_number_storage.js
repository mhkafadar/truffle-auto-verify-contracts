module.exports = async function(deployer) {
  const NumberStorage = artifacts.require("NumberStorage");

  await deployer.deploy(NumberStorage);
  const contract = await NumberStorage.deployed();

  console.log("Contract address:", contract.address)
};
