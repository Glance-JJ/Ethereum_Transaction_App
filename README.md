# Ethereum_Transaction_App

The app can transfer ethereum from one account to another using metamask. Each transaction is paired with a gif and a message and is forever stored in Blockchain. The application makes use of Solidity Language to write smart Contracts. It is a dynamic app using React JS and Tailwind for frontend and can run as a mobile application as well.

![Vite + React - Google Chrome 09-09-2023 10_43_30](https://github.com/Glance-JJ/Ethereum_Transaction_App/assets/100403922/1b0715e7-0892-4369-9a5f-73c650b9735e)

![Vite + React - Google Chrome 23-07-2023 18_54_56](https://github.com/Glance-JJ/Ethereum_Transaction_App/assets/100403922/b9d989c4-0b74-435e-994b-5192919e0539)

![Vite + React - Google Chrome 09-09-2023 11_57_06](https://github.com/Glance-JJ/Ethereum_Transaction_App/assets/100403922/e90c89ec-0472-48c7-9c16-acf7404b8478)


To run the application run commands:

cd .\client\  //To change the current folder to client which initializes the application

npm run dev   //To run on local server

Some Configurations to make:

npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

npm install --save-dev @nomicfoundation/hardhat-toolbox

npm install --legacy-peer-deps  

npm install --save-dev "hardhat@^2.16.0" "@nomicfoundation/hardhat-toolbox@^3.0.0"

npx hardhat run scripts/deploy.js --network Sepolia

You also need to to have a MetaMask account to be able to send and recieve transactions.




