/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : User WEB controller
 */


const { validateRequest } = require('../../utilities/validation');
const { response } = require('../../utilities/response');
const usersRepository = require('../../repositories/usersRepository')

const createUser = async (req, res) => {
	res.render('create');
}

const getUsers = async (req, res) => {
	const userData = await usersRepository.getUsers();
	if (!!userData.error) {
		return res.render('index', { error: true });
	}
	return res.render('index', { user: userData });
}

const getUser = async (req, res) => {
	const userData = await usersRepository.getUser(req.params.id);
	if (userData === null) {
		return res.render('shoow', { error: true, user: 'no_data' });
	}
	if (!!userData.error) {
		return res.render('show', { error: true });
	}
	return res.render('show', { user: userData });
}

module.exports = { createUser, getUsers, getUser }

