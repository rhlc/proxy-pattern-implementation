// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0x5d8D990dD47Be1a9450C2649d1d4ED4106b2F585'; // FIXME: 
 
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at:", boxV2Address);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
