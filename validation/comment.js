const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCommentInput(data) {
  let errors = {};

  // Make sure that the data is a string
  data.text = !isEmpty(data.text) ? data.text : "";

  // Check length
  if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
    errors.text = "Comment must be between 1 and 300 characters";
  }

  // Check the text validation
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
