const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compile = require('../compile');

const interface = compile.abi;
const bytecode = compile.evm.bytecode.object;

let accounts;
let inbox;
beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	inbox = await new web3.eth.Contract(interface)
		.deploy({ data: '0x' + bytecode, arguments: '' })
		.send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		console.log(inbox);
	});
});
