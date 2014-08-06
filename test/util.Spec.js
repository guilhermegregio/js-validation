'use strict';
/**
 * @name util.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/util'], function (util) {
	describe('Util', function () {

		it('should return true when object is array', function () {
			expect(util.isArray([])).toBe(true);
			expect(util.isArray([1, 2])).toBe(true);
			expect(util.isArray([
				{}
			])).toBe(true);
			expect(util.isArray([
				{nome: 'guilherme'}
			])).toBe(true);
		});

		it('should return true when value is Arguments, Function, String, Number, Date, RegExp', function () {
			var stringVar = 'string';
			var functionVar = function () {
			};
			var numberVar = 10;
			var dateVar = new Date();
			var erVar = /[a-z]/;
			var expectArguments = function () {
				expect(util.isArguments(arguments)).toBe(true);
			};
			var objVar = {};

			expect(util.isString(stringVar)).toBe(true);
			expect(util.isFunction(functionVar)).toBe(true);
			expect(util.isNumber(numberVar)).toBe(true);
			expect(util.isDate(dateVar)).toBe(true);
			expect(util.isRegExp(erVar)).toBe(true);
			expect(util.isObject(objVar)).toBe(true);
			expectArguments();
		});

		it('should return true when value is empty : "", 0, [], {}, null, undefined', function () {
			expect(util.isEmpty('')).toBe(true);
			expect(util.isEmpty([])).toBe(true);
			expect(util.isEmpty({})).toBe(true);
			expect(util.isEmpty(null)).toBe(true);
			expect(util.isEmpty(undefined)).toBe(true);
			expect(util.isEmpty(0)).toBe(true);
		});

		it('should return value of deep object', function () {
			var person = {
				name: 'pessoa da silva',
				contacts: [
					{type: 'mail', value: 'email1@gmail.com'},
					{type: 'mail', value: 'email2@gmail.com'},
					{type: 'mail', value: 'email3@gmail.com'}
				],
				address: {
					city: {
						state: {
							country: {
								name: 'Brasil'
							}
						}
					}
				}
			};

			expect(util.deep(person, 'name')).toBe('pessoa da silva');
			expect(util.deep(person, 'address.city.state.country.name')).toBe('Brasil');
			expect(util.deep(person, 'contacts[2].value')).toBe('email3@gmail.com');
		});

		it('should set deep value in object', function () {
			var person = {
				address: {
					street: 'rua street'
				}
			};

			util.deep(person, 'address.street', 'rua xpto');

			expect(person).toEqual({
				address: {
					street: 'rua xpto'
				}
			});

		});

		it('should return array when given expression', function () {
			expect(util.expressionToArray('expression(person.name)')).toEqual(['expression', 'person.name']);
			expect(util.expressionToArray('expression(path.one, path.two)')).toEqual(['expression', 'path.one', 'path.two']);
		});

		it('should return boolean if object contains a key', function () {
			expect(util.has({name: 'nome'}, 'name')).toBe(true);
			expect(util.has({name: 'nome'}, 'teste')).toBe(false);
		});

		it('should clone object', function () {
			var source = {a: 1, b: 'b', c: {test: true}};
			var target = util.clone(source);

			expect(target).toEqual(source);
			expect(target).not.toBe(source);
		});

	});
});