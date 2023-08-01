# Ethereum_Transaction_App

The app can transfer ethereum from one account to another using metamask. Each transaction is paired with a gif and a message and is forever stored in Blockchain. The application makes use of Solidity Language to write smart Contracts. It is a dynamic app using React JS and Tailwind for frontend and can run as a mobile application as well.

![image](https://github.com/Glance-JJ/EthereumTransaction_App/assets/100403922/9be9dedb-4dac-4693-9bb7-69650370e0fa)

![image](https://github.com/Glance-JJ/EthereumTransaction_App/assets/100403922/b467b956-7630-4228-bcdc-aa00e0c402b7)

![image](https://github.com/Glance-JJ/EthereumTransaction_App/assets/100403922/732ff33e-8d63-4fdd-9caa-bdf2cb3c80db)

![image](https://github.com/Glance-JJ/EthereumTransaction_App/assets/100403922/9572fd53-9745-4b7a-9fa9-b48b86f48991)

![image](https://github.com/Glance-JJ/EthereumTransaction_App/assets/100403922/0163cf15-8fb4-43b4-a999-b5683dd077ae)

To run the application run commands:

cd .\client\  //To change the current folder to client which initializes the application

npm run dev   //To run on local server

Some Configurations to make:

npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

npm install --save-dev @nomicfoundation/hardhat-toolbox

npm install --legacy-peer-deps  

npm install --save-dev "hardhat@^2.16.0" "@nomicfoundation/hardhat-toolbox@^3.0.0"

npx hardhat run scripts/deploy.js --network Sepolia

You also need to to have a MetaMask account to be able to send transactions.




