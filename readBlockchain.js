const { ethers } = require("ethers");

//v5
// const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b8ee69377a2e4a1aa06d5f5ae0141fd3");

//v6
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/b8ee69377a2e4a1aa06d5f5ae0141fd3");

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number: ", block);
}

queryBlockchain();
// Calling this function creates a block in real, could be checked on Etherscan.io website