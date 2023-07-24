
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/iBFs1uhaFw0FntNNtrinC-6Q2gisLh9O',
      accounts: [ 'd8137757962d6b4ac0a71abc9cdba7e2603803f577f4a39663d6ee4798357ad7' ]
    }
  }
}