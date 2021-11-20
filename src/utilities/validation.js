/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : Validations
 */

const Joi = require("joi");

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

	introduction: Joi.string()
		.min(10)
		.max(250)
		.required(),

	experience: Joi.number()
		.required(),

	email: Joi.string()
		.email({ minDomainSegments: 2 })
		.required()
});