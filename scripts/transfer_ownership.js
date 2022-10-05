// scripts/transfer_ownership.js
async function main() {
  const gnosisSafe = '0x0B2339b81fF3Cd2C3cfDFaDA6c183a97D03f9D61'; // FIXME:
 
  console.log("Transferring ownership of ProxyAdmin...");
  // The owner of the ProxyAdmin can upgrade our contracts
  await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
  console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
