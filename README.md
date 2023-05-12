# duniya-gameFi
 Backend for game where users earn tokens as they watch a video


<!-- SUMMARY OF STEPS -->

<!-- set up hardhat environment -->
- cd name-of-folder               <!-- switch to project folder -->
- npm init -y                     <!-- create package.json file -->
- npm install hardhat - save-dev  <!-- initialize the Hardhat environment -->
- npx hardhat

<!-- create your smart contract -->
- Create new contract(.sol file)  <!-- inside contracts folder and write your code -->
- npx hardhat compile             <!-- compiles your contracts -->
- Write tests(.ts file)           <!-- to verify that your contracts work as expected -->
- npx hardhat test                <!-- run your tests -->

<!-- add Celo testnet to your Metamask -->
- Add Celo (Alfajores Testnet) as a new network
- Fund your wallet with CELO testnet faucet

<!-- deploy your smart contract -->
- npm install dotenv              <!-- to be able to use our private key for our Celo account -->
- Create .env file, paste your private key and ETHERSCAN_API_KEY  <!-- these can be gotten from your metamask and celoscan accounts respectively -->
- Add the Celo network configuration(keys) to your hardhat.config.ts file
- Write your deploy scripts (deploy.ts)
- npx hardhat run scripts/deploy.ts --network alfajores   <!-- deploy your contract on live server -->
- npx hardhat run scripts/deploy.ts --network             <!-- deploy your contract locally -->
- Get your contract's address from your terminal and save somewhere

<!-- verify your contract -->
- Go to (https://alfajores.celoscan.io/) and search for your contract’s address
- Click the Verify Contract button under Contracts tab or Misc menu
- Fill in the required information and click Continue
- Copy the Contract Code from your project and post
- Get the Constructor Arguments ABI-encoded (copy everything after the '0033' in the input data under the tranaction details - it usually starts and ends with zeros and has a lot of zeros in between)
- Click the “Verify and Publish” button and wait for it to be processed

<!-- Interacting with your deployed contract on Celo explorer -->
<!-- Reading your contract (for functions that retrieve data only)-->
- Click on the “Read Contract” tab in Celo Explorer.
- Select the function you want, to see the expected result
<!-- Writing to your contract (for functions that modify variables-->
- Click on the “Write Contract” tab in Celo Explorer.
- Connect to your Celo wallet by clicking on the “Connect Wallet” button and choosing your wallet provider.
- Select the function you want to write data to and fill in any required parameters.
- Click the “Write” button to send the transaction to the blockchain.
- Review the transaction details and confirm the gas fee.
