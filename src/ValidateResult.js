'use strict';
/**
 * @name ValidateResult
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/util'], function (util) {

	var ValidateResult = function (errors) {

		//TODO(guilhermegregio): Change to copy safe for umutable
		var _errors = errors;

		this.hasErrors = function () {

			return !util.isEmpty(this.getErrors());
		};

		this.getErrors = function () {
			return _errors;
		};

		this.getError = function (path) {
			if(path === undefined){
				return '';
			}
			return util.deep(this.getErrors(), path);
		};

	};

	return ValidateResult;
});