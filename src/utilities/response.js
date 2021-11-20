/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : Response function
 */

/**
 * Returns formatted response object
 *
 * @param {number} status status of the response eg: 0 for success, any other number indicates error
 * @param {object} data data to be sent
 * @param {string} msg message
 * @param {object} error error object with valid error messages
 * @return {object} return an object with error statements fi any
*/
const response = (status = 'success', data = {}, msg = '', error = {}) => {
  return { status, data, message: msg, error };
};

module.exports = { response };
