const { Web3 } = require("web3");
const contractABI = require("../contractABI.json");
const contractAddress = "0xB6026e3DcBc4b91aC27D19b7a5B136B0F2f27A4E";
const minimumContribution = 1000000000000000;
const ganacheUrl = "http://localhost:7545";
const web3 = new Web3(ganacheUrl);
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

async function contribute() {
  try {
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    const txReceipt = await contractInstance.methods.contribute().send({
      from: userAccount,
      value: minimumContribution,
    });
    return txReceipt;
  } catch (error) {
    throw new Error("Error contributing to the contract", error);
  }
}
module.exports = contribute;
