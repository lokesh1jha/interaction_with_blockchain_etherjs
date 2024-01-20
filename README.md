# Ether.js Blockchain Interaction Project

This project is designed for learning and practicing blockchain interaction using the Ether.js library. It covers basic functionalities, such as querying the Ethereum blockchain and working with Ethereum addresses.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) (Node Package Manager)
- [Infura API key](https://infura.io/) for connecting to the Ethereum network

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ether-js-interaction.git

2. **Install dependencies**

    ```bash
    Install dependenciescd ether-js-interaction
    npm install

3. ***Set up Infura***
    3.1 Create an account on Infura.
    3.2 Obtain an API key from Infura.
    3.3 Replace the placeholder API key in the provider instantiation within readBlockchain.js with your Infura API key.

    ```bash
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY");

4. ***Alternatives to Infura***
    If you're looking for alternatives to Infura, consider the following:

    **Alchemy**: Similar to Infura, Alchemy provides Ethereum infrastructure services. Alchemy

    const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY");
    
    **QuickNode**: Offers Ethereum nodes with various plans. QuickNode

    const provider = new ethers.providers.JsonRpcProvider("https://YOUR_QUICKNODE_API_KEY@YOUR_CLUSTER.quicknode.com");
    
    * Remember to sign up for these services, obtain API keys, and replace the corresponding placeholders in your code.*

5. ***Contributing***
    Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and suggestions are highly appreciated.