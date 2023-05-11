// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Greeter {
    string greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public  view returns (string memory){
        return greeting;
    }
}