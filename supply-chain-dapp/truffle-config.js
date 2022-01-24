const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "3c027a5f39664a19b8f1e7b4d267d4af";
//
const fs = require('fs');
const mnemonic = fs.readFileSync("./.secret.txt").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
