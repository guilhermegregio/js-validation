var requirejs = require('requirejs');
var prompt = require('prompt');

requirejs.config({
	nodeRequire: require
});

var properties = [
	{
		name: 'username'
	},
	{
		name: 'email'
	}
];

requirejs(['../../src/Validator'], function (Validator) {

	var data = {};
	var constrains = ['notEmpty($username)', 'notEmpty($email)', 'email($email)'];

	prompt.start();

	var validator = new Validator(data, constrains);

	prompt.get(properties, function (err, result) {
		if (err) {
			return onErr(err);
		}

		data.username = result.username;
		data.email = result.email;
		console.log('--------------------------------');
		console.log('Command-line input received:');
		console.log('  Username: ' + data.username);
		console.log('  E-mail: ' + data.email);

		var vResult = validator.validate();

		if (vResult.hasErrors()) {
			console.log('Ocorreu erros:');

			if (vResult.for('username').hasNotEmptyPassed()) {
				console.log('  username deve ser preenchido.');
			}

			if (vResult.for('email').hasNotEmptyPassed()) {
				console.log('  e-mail deve ser preenchido.');
			}

			if (vResult.for('email').hasEmailPassed()) {
				console.log('  e-mail deve ser um e-mail valido.');
			}

			console.log('--------------------------------');
			console.log('ValidatorResult JSON');
			console.log('--------------------------------');
			console.log(JSON.stringify(vResult.getAllFailures(), null, 4));
		} else {
			console.log('--------------------------------');
			console.log('Você preencheu tudo corretamente');
		}
		console.log('--------------------------------');
	});
});