/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : User API controller
 */


const { validateRequest } = require('../../utilities/validation');
const { response } = require('../../utilities/response');
const usersRepository = require('../../repositories/usersRepository')

const createUser = async (req, res) => {
	const { body: user } = req;
	const validate = validateRequest.validate(user);
	if (validate.error) {
		return res.status(422).json(response('failure', {}, 'Invalid arguments', validate.error.details));
	}
	const userData = await usersRepository.createUser(user);
	if (!!userData.error) {
		return res.status(422).json(response('failure', {}, userData.message));
	}
	return res.json(response('success', userData, 'User created successfully'));
}

const getUsers = async (req, res) => {
	const userData = await usersRepository.getUsers();
	if (!!userData.error) {
		return res.status(500).json(response('failure', {}, userData.message));
	}
	return res.json(response('success', userData, 'List all users'));
}

const getUser = async (req, res) => {
	const userData = await usersRepository.getUser(req.params.id);
	if (userData === null) {
		return res.status(400).json(response('failure', {}, 'The User ID doesnot exist'));
	}
	if (!!userData.error) {
		return res.status(500).json(response('failure', {}, userData.message));
	}
	return res.json(response('success', userData, 'Get user'));
}

module.exports = { createUser, getUsers, getUser }

