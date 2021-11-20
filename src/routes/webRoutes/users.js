/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : User WEB routes
 */

const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser } = require('../../controllers/webController/usersController');

router.get('/users/create', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
