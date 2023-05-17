// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Greeter is ERC721 {
    using SafeMath for uint256;

    string greeting;

    address public wallet1;
    address public wallet2;

/*
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public  view returns (string memory){
        return greeting;
    }
*/

    constructor(address _wallet1, address _wallet2) ERC721("SplitPaymentNFT", "SPNFT") {
        wallet1 = _wallet1;
        wallet2 = _wallet2;
    }

    function createNFT(address to, uint256 tokenId) external payable {
        require(msg.value > 0, "Payment required");
        require(!_exists(tokenId), "Token already exists");

        uint256 paymentAmount1 = msg.value * 8 / 10; // 80% to wallet 1
        uint256 paymentAmount2 = msg.value * 2 / 10; // 80% to wallet 2

        // Transfer payment to wallet1 and wallet2
        payable(wallet1).transfer(paymentAmount1);
        payable(wallet2).transfer(paymentAmount2);

        _safeMint(to, tokenId);
    }
}