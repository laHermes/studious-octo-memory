// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;

contract Inbox{
    
    int32 public lazar = 0;
    
    address private owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
     require(msg.sender == owner);
        _;
    }

    function increment() public onlyOwner  {
      lazar += 1;
    }
    
 

}