js-validation
=============

[![Build Status](https://travis-ci.org/4data/js-validation.svg?branch=master)](https://travis-ci.org/4data/js-validation)

Validation data object for back-end and front-end



### Use:

```javascript
var validator = new Validator(data, constrains);
var result = validator.validate();
result.hasErrors();
```