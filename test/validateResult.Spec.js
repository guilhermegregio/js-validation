'use strict';
/**
 * @name ValidateResult
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/ValidateResult'], function (ValidateResult) {

	describe('ValidateResult suite', function () {

		var vResultWithoutErrors = new ValidateResult({});

		var vResultWithErrors = new ValidateResult({
			name: ['notEmpty'],
			mail: ['notEmpty', 'email']
		});

		describe('failures', function () {
			it('should defined methods', function () {
				expect(vResultWithoutErrors.hasErrors()).toBeDefined();
				expect(vResultWithoutErrors.getAllFailures()).toBeDefined();
				expect(vResultWithoutErrors.for()).toBeDefined();
				expect(vResultWithoutErrors.for('name').all).toBeDefined();
			});

			it('should return boolean when execute hasErrors of resultValidate', function () {
				expect(vResultWithoutErrors.hasErrors()).toBe(false);
				expect(vResultWithErrors.hasErrors()).toBe(true);
			});

			it('should return errors', function () {
				var expectErrors = {
					name: ['notEmpty'],
					mail: ['notEmpty', 'email']
				};

				expect(vResultWithErrors.getAllFailures()).toEqual(expectErrors);
			});

			it('should return array of invalids validations when given a field', function () {
				expect(vResultWithErrors.for('name').all()).toEqual(['notEmpty']);
			});

			it('should return boolean of invalid field validation notEmpty', function () {
				expect(vResultWithErrors.for('name').hasNotEmptyPassed()).toEqual(true);
			});
		});
	});
});