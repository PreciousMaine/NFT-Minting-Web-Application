import Web3 from 'web3';
import mintContract from './contracts/mohtore.json'; // Import the JSON file of your contract

const nftContract = web3 => {
    return new web3.eth.Contract(
        mintContract,  
        "0x2e8021aa783cA1f755597103C3066BD36E6E084a"
    )
}


export default nftContract