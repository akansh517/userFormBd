const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  phone: {
    type: String,
    required: true
  },
});

const User = mongoose.model("User", userSchema);

const userValidationRules = () => {
  return [
    body("name")
      .isLength({ min: 3, max: 30 })
      .withMessage("Name must be between 3 and 30 characters long.")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name can only contain letters and spaces.")
      .trim()
      .escape()
      .customSanitizer((value) => sanitizeHtml(value)),

    body("email")
      .isEmail()
      .withMessage("Email must be a valid email address.")
      .normalizeEmail()
      .customSanitizer((value) => sanitizeHtml(value)),

    body("phone")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be exactly 10 digits.")
      .isNumeric()
      .withMessage("Phone number can only contain numbers.")
      .trim()
      .escape()
      .customSanitizer((value) => sanitizeHtml(value)),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const formattedErrors = errors.array().map((error) => ({
    field: error.path,
    message: error.msg,
  }));

  res.status(400).json({ errors: formattedErrors });
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = {
  userValidationRules,
  validate,
  createUser
};
