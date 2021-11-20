/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Router Page
*/

const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser } = require('../../controllers/apiController/usersController');

/**
 *  @route "/records", name="records_list"
 * @controller getRecords , Gets the filtered records from the database
*/
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
