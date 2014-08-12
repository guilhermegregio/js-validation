requirejs.config({
	paths: {
		validatorSrc: '../../../src/'
	}
});

var validate = function (Validator, inputs) {
	var constrains = ['notEmpty($name)', 'notEmpty($email)', 'email($email)'],
		data = {
			name: inputs[0].value,
			email: inputs[1].value
		},
		requireNameStyle = document.querySelector('.requiredName').style,
		requireEmailStyle = document.querySelector('.requireEmail').style,
		invalidMailStyle = document.querySelector('.invalidEmail').style,

		vResult = new Validator(data, constrains).validate();

	if (vResult.for('name').hasNotEmptyPassed()) {
		requireNameStyle.display = 'inline';
	} else {
		requireNameStyle.display = 'none';
	}

	if (vResult.for('email').hasNotEmptyPassed()) {
		requireEmailStyle.display = 'inline';
	} else {
		requireEmailStyle.display = 'none';
	}

	if (vResult.for('email').hasEmailPassed()) {
		invalidMailStyle.display = 'inline';
	} else {
		invalidMailStyle.display = 'none';
	}

	console.log(vResult.hasErrors());
	if(vResult.hasErrors()){
		document.querySelector('.validObj').style.display = 'block';
		document.querySelector('.validObj').innerHTML = JSON.stringify(vResult.getAllFailures(), null, 4);
	} else {
		document.querySelector('.validObj').style.display = 'none';
	}

};

require(['validatorSrc/Validator'], function (Validator) {
	var inputs = document.querySelectorAll('input');

	function submitValidate(ev) {
		ev.preventDefault();
		validate(Validator, inputs);
		return false;
	}

	inputs[2].addEventListener("click", submitValidate);
	document.querySelector('form').addEventListener("submit", submitValidate);
});