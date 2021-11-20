/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Router Page
*/

const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser } = require('../../controllers/webController/usersController');

/**
 *  @route "/records", name="records_list"
 * @controller getRecords , Gets the filtered records from the database
*/
router.get('/users/create', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
