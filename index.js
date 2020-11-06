const Web3 = require('web3');
const Inbox = require('./build/contracts/Inbox.json');

web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const init = async () => {
	//Assign default account
	web3.eth.defaultAccount = '0x9c399da478956545d8224852233905bbbaf86f8d';
	// use interface and contacts address
	let InboxContract = new web3.eth.Contract(
		Inbox.abi,
		'0x3E6BC69Bd772572bcB3d905C4702539D0a4aa743'
	);

	await InboxContract.methods
		.setMessage('Hello')
		.send({ from: web3.eth.defaultAccount })
		.then(data => console.log(data))
		.catch(err => console.log(err));

	await InboxContract.methods
		.increment()
		.send({ from: web3.eth.defaultAccount })
		.then(data => console.log(data))
		.catch(err => console.log(err));

	await InboxContract.methods.message().call();
};

init();
