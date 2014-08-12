var Validator = function () {
    this.validate = function () {
        return new ValidatorResult();
    };
};

var ValidatorResult = function () {
    this.hasErrors = function () {
        return false;
    };
};