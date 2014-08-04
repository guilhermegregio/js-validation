'use strict';
/**
 * @name validators/email.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/validators/email'], function (email) {
	describe('Email', function () {
		it('should message error', function () {
			expect(email.errMessage).toBe(':field deve ser um e-mail valido.');
		});

		it('should return true when valid email value', function () {
			expect(email('guilherme@gregio.net')).toBe(true);
		});

		it('should return false when invalid email value', function () {
			expect(email('guilherme')).toBe(false);
		});
	});
});