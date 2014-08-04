'use strict';
/**
 * Import all validators
 *
 * @name validators/index
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
var imports = [
	'src/validators/notEmpty'
];

define(imports, function (notEmpty) {
	return {
		notEmpty: notEmpty
	}
});