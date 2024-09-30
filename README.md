# NFT Minting Web App
This repository hosts a decentralized application (dApp) that enables users to mint their own NFTs. By connecting to a MetaMask wallet, users can mint image-based NFTs and view them on OpenSea's testnet after successful minting.

## Getting Started
Follow these instructions to set up the NFT minting web app on your local machine and start minting.

## Prerequisites
Node.js: Make sure Node.js is installed on your system. You can download it from nodejs.org.
## Installation

Clone the repository to your local machine:
git clone https://github.com/PreciousMaine/NFT-Minting-Web-Application.git

### Navigate to the Project Directory
cd Minting_Web_App

### Run the following command to install all the project dependencies:
npm install

## Running the Application
Start the local development environment by running:
npm run dev

## Access the Web App
Open your browser and go to http://localhost:3000 (or the port specified in your environment settings).

## Features
MetaMask Wallet Integration: Users can securely connect their MetaMask wallet to interact with the application.
Mint NFTs: Upload and mint images as NFTs directly through the web interface.
View NFTs on OpenSea Testnet: After minting, view your NFTs on OpenSea's testnet platform to verify ownership.
Smart Contract Details
The dApp interacts with an ERC721-compliant smart contract for minting NFTs. This ensures that the tokens minted are non-fungible, unique, and transferable according to the ERC721 standard.

## Additional Notes
Make sure your MetaMask wallet is connected to the appropriate test network (e.g., Rinkeby or Goerli) to interact with the minting contract.
This app is designed for testing purposes on the OpenSea testnet, and any tokens minted will not have real-world value.
