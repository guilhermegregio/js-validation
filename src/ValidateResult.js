'use strict';
/**
 * @name ValidateResult
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define([], function () {

	var ValidateResult = function () {

		this.hasErrors = function () {
			return true;
		};

		this.getErrors = function () {
			return [];
		};

		this.getError = function () {
			return {};
		};

	};

	return ValidateResult;
});