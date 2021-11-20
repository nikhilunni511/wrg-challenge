/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : User API routes
 */

const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser } = require('../../controllers/apiController/usersController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
