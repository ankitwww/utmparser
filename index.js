'use strict';

var querystring = require('querystring');

/**
 *	Parse the utm string or object
 *	@method parse
 *	
 *	@param {String|Object} utm
 *	@param {[Object]} opts
 *	@return {String}
 */
exports.parse = function(utm, opts) {
	if (!utm) return '';

	opts = opts || {};

	if (typeof utm == 'object')
		return exports.parse(querystring.stringify(utm), opts);

	if (typeof utm != 'string') return '';

	if (utm[0] == '?') utm = utm.substr(1);
	utm = utm.replace(/%3F/gi, '');

	if (utm.match(/^\S*\?\S*/gi)) {
		utm = utm.match(/(?:^\S)*(?:\?)\S*=/gi)[0].substr(1);
	};

	utm = querystring.parse(utm);

	var inputs = [];

	for (var key in utm) {
		if (!_validParam(key, opts)) continue;
		inputs.push(_buildInput(key, utm[key]));
	};

	return inputs.join(opts.seperator || ';');
};

/**
 *	Middleware exposure
 *	@method middleware
 *
 */
exports.middleware = function(req, res, next) {
	req.queryUTM = exports.parse(req.query);
	next();
};

/**
 *	Make a html input based off a key and val
 *	@method _buildInput
 *
 *	@param {String} name
 *	@param {String} value
 *	@return {String}
 */
function _buildInput (name, value) {
	if (!name || !value) return;
	if (typeof name != 'string' || typeof value != 'string') return;

	var input = [];

	input.push(name);
	input.push("="+value);
	
	return input.join('');
};

/**
 *	Test the key against a list of valid keys
 *	@method _validParam
 *
 *	@param {String} key
 *	@param {Object} options
 *	@return {Boolean}
 */
function _validParam (key, options) {
	var valid = true;

	if (!~validKeys.indexOf(key.toLowerCase())) valid = false;

	return valid;
};

var validKeys = [
	'utm_medium',
	'utm_source',
	'utm_campaign',
	'utm_content',
	'utm_term'
];
