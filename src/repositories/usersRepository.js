/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Tuesday October 5th 2021
 * Version : 1.0.0
 * Product : Records controller
 */

const Users = require('../db').user;

/**
 * Function to create customer in DB
 * @param {String} stripeCustomerId Stripe customer id
 * @param {Object} customerData Data to create customer Object
 * @returns {Object} new customer
 */
module.exports.createUser = async (user) => {
	try {
		return await Users.create(user);
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			return { error: true, message: 'Email already in use' };
		}
		return { error: true, message: 'Something went wrong, please try again later!' };
	}
}


module.exports.getUsers = async () => {
	try {
		return await Users.findAll({ attributes: ['id', 'firstName', 'lastName', 'email'], raw: true });
	} catch (error) {
		return { error: true, message: 'Something went wrong, please try again later!' };
	}
}

module.exports.getUser = async (id) => {
	try {
		return await Users.findByPk(id);
	} catch (error) {
		return { error: true, message: 'Something went wrong, please try again later!' };
	}
}