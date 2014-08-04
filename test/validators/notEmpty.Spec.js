'use strict';
/**
 * @name validators/notEmpty.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/validators/notEmpty'], function (notEmpty) {
	describe('Required', function () {

		it('should return false when empty value', function () {
			expect(notEmpty('')).toBe(false);
			expect(notEmpty(null)).toBe(false);
			expect(notEmpty(undefined)).toBe(false);
			expect(notEmpty([])).toBe(false);
			expect(notEmpty({})).toBe(false);
			expect(notEmpty(0)).toBe(false);

		});

		it('should return true when not empty value', function () {
			expect(notEmpty('guilherme')).toBe(true);
			expect(notEmpty(['guilherme'])).toBe(true);
			expect(notEmpty({nome: 'guilherme'})).toBe(true);
			expect(notEmpty(1)).toBe(true);
		});

		it('should get message error when validate error', function () {
			expect(notEmpty.errMessage).toBe(':field deve ser preenchido.');
		});

	});
});