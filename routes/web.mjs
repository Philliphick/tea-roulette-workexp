import express from 'express';
import { handleNewUser } from './api.mjs';

const appRoutes = express.Router();

appRoutes.get('/', async (req, res, next) => {
	const name = req.query.name;
	const drink = req.query.drink;
	const sugar = req.query.sugar;
	const milk = req.query.milk;

	// console.log(name, drink, sugar, milk);

	if (name && drink && sugar && milk) {
		try {
			const res = await handleNewUser(drink, sugar, milk, name);
			console.log('from the web!!!!!', res[0].drink);
		} catch (error) {
			throw new Error(error.message);
		}
	}
	res.render('index.njk', {
		res: res,
	});
});

appRoutes.get('/');

export default appRoutes;
