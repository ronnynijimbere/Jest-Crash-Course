const axios = require('axios');

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x, //this method takes something and returns whatever it is(null, 0, undefined)
	createUser: () => {
		const user = { firstName: 'Ronny' }
		user['lastName'] = 'Nijimbere';
		return user;
	},
	fetchUser: () => 
	axios
		.get('https://jsonplaceholder.typicode.com/users/1')
		.then(res => res.data)
		.catch(err => 'error')
};

module.exports = functions