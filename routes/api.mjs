import express from 'express';

const apiRoutes = express.Router();

class User {
	constructor(drink, sugar, milk, name) {
		this.drink = drink;
		this.sugar = sugar;
		this.milk = milk;
		this.name = name;
	}
}

const userArray = [];

// takes in names
// takes in tea type
// takes in sugar level
// takes in milk level
// All one function ^^ ?
// randomize

// TODO Write your API code here.
apiRoutes.get('/', (req, res) => {
	console.log('Add some API handling here!');

	return res.json({ hello: 'world!' });
});

export const handleNewUser = async (drink = null, sugar = null, milk = null, name = null) => {
	const newUser = new User(drink, sugar, milk, name);
	console.log('new user:', newUser);
	userArray.push(newUser);
	console.log(userArray);

	return userArray;
};

export default apiRoutes;
