const { ethers } = require("ethers");

//v5
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b8ee69377a2e4a1aa06d5f5ae0141fd3");

//v6
// const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/b8ee69377a2e4a1aa06d5f5ae0141fd3");

const queryBlockchain = async () => {
    try {
        // Calling this function creates a block in real, could be checked on Etherscan.io website
        // const block = await provider.getBlockNumber();
        // console.log("Current Block Number: ", block);

        // Know Balance
        const balance = await provider.getBalance("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")//wallet address
        console.log("Account Balance in BN: ", balance.toString())
        
        const balanceEther = ethers.utils.formatEther(balance) //before v6 as it was not running on v6
        // const balanceEther = formatUnits(balance, "ether") // Ether v6
        console.log('Account Balance In Ether: ', balanceEther)

        const amountInWei = ethers.utils.parseEther(balanceEther);
        console.log('Account Balance In Wei: ', amountInWei.toString())



    }
    catch (error) {
        console.log(error)
    }
}

queryBlockchain();