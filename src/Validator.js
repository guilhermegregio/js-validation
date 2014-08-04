'use strict';
/**
 * @name Validator
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/ValidateResult'], function (ValidateResult) {
	var Validator = function (data, constrains) {
		var _data = data;
		var _constrains = constrains;

		if (data === undefined)
			throw new Error('Parametro data não pode ser vazio.');

		if (constrains === undefined)
			throw new Error('Parametro constrains não pode ser vazio.');

		this.getData = function () {
			return _data;
		};

		this.getConstrains = function () {
			return _constrains;
		};

		this.validate = function () {

			return new ValidateResult();
		};
	};

	Validator.version = '0.0.1';

	return Validator;
});