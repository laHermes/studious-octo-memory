const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compile = require('../compile');

const interface = compile.abi;
const bytecode = compile.evm.bytecode.object;

const INITIAL_STRING = 'Hi';

let accounts;
let inbox;
beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	inbox = await new web3.eth.Contract(interface)
		.deploy({ data: '0x' + bytecode, arguments: ['Hi'] })
		.send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});

	it('has default', async () => {
		const message = await inbox.methods.message().call();
		assert.strictEqual(message, INITIAL_STRING);
	});

	it('set message', async () => {
		await inbox.methods.setMessage('bye').send({ from: accounts[0] });
		const message = await inbox.methods.message().call();
assert.strictEqual(message, 'bye')
	});
});
