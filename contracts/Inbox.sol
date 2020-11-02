// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

contract Inbox{
    
    int32 public lazar = 0;    
    address private owner;
    string public message;
    
    constructor(string memory initMessage) public {
        message = initMessage;
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
     require(msg.sender == owner);
        _;
    }


    function increment() public onlyOwner  {
      lazar += 1;
    }
    
    function setMessage(string memory newMessage) public{
        message = newMessage;
    } 



}