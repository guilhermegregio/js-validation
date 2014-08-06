'use strict';
/**
 * Import all validators
 *
 * @name validators/index
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
var imports = [
	'src/validators/notEmpty',
	'src/validators/email'
];

define(imports, function (notEmpty, email) {
	return {
		notEmpty: notEmpty,
		email: email
	}
});