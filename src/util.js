'use strict';
/**
 * @name util
 * @author Guilherme Mangabeira Gregio <guilherme@gregio.net>
 */
define([], function () {
	var util = {};

	util.isArray = Array.isArray;

	// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Object'].forEach(function (name) {
		util['is' + name] = function (obj) {
			return toString.call(obj) === '[object ' + name + ']';
		};
	});

	util.isEmpty = function (obj) {
		if (obj == null) {
			return true;
		}

		if (util.isArray(obj) || util.isString(obj) || util.isArguments(obj)) {
			return obj.length === 0;
		}

		if (util.isNumber(obj)) {
			return obj === 0;
		}

		for (var key in obj) {
			if (util.has(obj, key)) {
				return false;
			}
		}

		return true;
	};

	util.has = function(obj, key) {
		return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
	};

	util.deep = function (obj, key, value) {
		var keys = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.'),
			root,
			i = 0,
			n = keys.length;

		if (arguments.length > 2) {
			// Set deep value
			root = obj;
			n--;

			while (i < n) {
				key = keys[i++];
				obj = obj[key] = util.isObject(obj[key]) ? obj[key] : {};
			}

			obj[keys[i]] = value;

			value = root;
		} else {
			// Get deep value
			while ((obj = obj[keys[i++]]) != null && i < n) {
			}
			value = i < n ? void 0 : obj;
		}

		return value;
	};

	util.expressionToArray = function (expression) {
		return expression.replace(/[\(\),]/g, '|').replace(/ /g, '').replace(/\|$/, '').split('|');
	};

	return util;
});