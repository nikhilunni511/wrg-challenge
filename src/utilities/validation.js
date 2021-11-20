/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Validations
*/

const Joi = require("joi");

/**
 * Validate request body
 * 
 * @param {object} reqBody request body to validate.
 * @return {boolean | object} return true if success else return an object with error statements
*/
module.exports.validateRequest = Joi.object({
	firstName: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),

	lastName: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),
		phone: Joi.string()
		.alphanum()
		.min(10)
		.max(20)
		.required(),

	achievements: Joi.string()
		.min(0)
		.max(250)
		.allow(null, ''),

	experience: Joi.number()
		.required(),

	email: Joi.string()
		.email({ minDomainSegments: 2 })
		.required()
});