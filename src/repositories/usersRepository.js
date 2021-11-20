/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : User Repository
 */

const Users = require('../db').user;

/**
 * Function to create customer in DB
 * @param {Object} user Data to create user Object
 * @returns {Object} new user
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

/**
 * Function to create customer in DB
 * @returns {Array} all users
 */
module.exports.getUsers = async () => {
	try {
		return await Users.findAll({ attributes: ['id', 'firstName', 'lastName', 'email'], raw: true });
	} catch (error) {
		return { error: true, message: 'Something went wrong, please try again later!' };
	}
}

/**
 * Function to create customer in DB
 * @param {number} id user id
 * @returns {object} user object
 */
module.exports.getUser = async (id) => {
	try {
		return await Users.findByPk(id);
	} catch (error) {
		return { error: true, message: 'Something went wrong, please try again later!' };
	}
}