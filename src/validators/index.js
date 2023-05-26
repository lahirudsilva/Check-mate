const required = require('./required');
const equalTo = require('./equalTo');
const email = require('./email');
const date = require('./date');
const passwordStrength = require('./passwordStrength');
const creditCard = require('./creditCard');
const numeric = require('./numeric');
const url = require('./url');
const fileType = require('./fileType');
const minLength = require('./minLength');
const maxLength = require('./maxLength');
const phoneNumber = require('./phoneNumber');

module.exports = {
  required,
  equalTo,
  email,
  date,
  passwordStrength,
  creditCard,
  numeric,
  url,
  fileType,
  minLength,
  maxLength,
  phoneNumber,
};
