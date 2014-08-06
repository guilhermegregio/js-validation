'use strict';
/**
 * @name validator.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/Validator', 'src/validators/index', 'src/util'], function (Validator, validators, util) {
	describe('Validator Constructor', function () {
		var data = [
			{name: 'Guilherme M Gregio'}
		];
		var constrains = [];

		it('should return error if not pass data', function () {
			expect(function () {
				new Validator()
			}).toThrow(new Error('Parametro data não pode ser vazio.'));
		});

		it('should return error if not pass constrains', function () {
			expect(function () {
				new Validator(data)
			}).toThrow(new Error('Parametro constrains não pode ser vazio.'));
		});

		it('should return data', function () {
			var v = new Validator(data, constrains);

			expect(v.getData()).toEqual(data);
		});

		it('should return constrains', function () {
			var v = new Validator(data, constrains);

			expect(v.getConstrains()).toEqual(constrains);
		});
	});

	describe('Validator', function () {
		var data = [
			{name: 'Guilherme M Gregio'}
		];
		var constrains = [];

		var validator = new Validator(data, constrains);

		it('should return validateResult', function () {
			var result = validator.validate();

			expect(result.hasErrors()).toBeDefined();
			expect(result.getAllFailures()).toBeDefined();
			expect(result.getError()).toBeDefined();
		});

		it('should return new instance of validateResult on validate()', function () {
			var resultA = validator.validate();
			var resultB = validator.validate();

			expect(resultA).not.toBe(resultB);
		});

	});

	describe('expression', function () {

		describe('validators', function () {
			var data = {};
			var constrains = ['notEmpty($name)'];

			var resultWithoutErrors = new Validator({}, []).validate();
			var resultWithErrors = new Validator(data, constrains).validate();

			it('should return boolean when execute hasErrors of resultValidate', function () {
				expect(resultWithoutErrors.hasErrors()).toBe(false);
				expect(resultWithErrors.hasErrors()).toBe(true);
			});

			it('should return errors', function () {
				var expectErrors = {
					name: ['notEmpty']
				};

				expect(resultWithErrors.getAllFailures()).toEqual(expectErrors);
			});

			it('should return array of invalids validations when given a field', function () {
				expect(resultWithErrors.for('name').all()).toEqual(['notEmpty']);
			});

			it('should return boolean of invalid field validation notEmpty', function () {
				expect(resultWithErrors.for('name').hasNotEmptyPassed()).toEqual(true);
			});
		});


	});
});