'use strict';
/**
 * @name validators/email.Spec
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define(['src/validators/email'], function (email) {
	describe('Email', function () {
		it('should return true when valid email value', function () {
			expect(email('guilherme@gregio.net')).toBe(true);
		});

		it('should return false when invalid email value', function () {
			expect(email('guilherme')).toBe(false);
		});
	});
});