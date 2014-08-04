'use strict';
/**
 * @name validator.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/Validator'], function (Validator) {
	describe('Validator Constructor', function () {
		var data = [
			{name: 'Guilherme M Gregio'}
		];
		var constrains = {};

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
		var constrains = {name: ['required']};

		var validator = new Validator(data, constrains);

		it('should return validateResult', function () {
			var result = validator.validate();

			expect(result.hasErrors()).toBeDefined();
			expect(result.getErrors()).toBeDefined();
			expect(result.getError()).toBeDefined();
		});

		it('should return new instance of validateResult on validate()', function () {
			var resultA = validator.validate();
			var resultB = validator.validate();

			expect(resultA).not.toBe(resultB);
		});

	});
});