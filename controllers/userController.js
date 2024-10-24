const {
  userValidationRules,
  validate,
  createUser
} = require("../models/userModel");

exports.getForm = (req, res) => {
  res.render("form");
};

exports.submitForm = [
  userValidationRules(),
  validate,
  async (req, res) => {
    try {
      await createUser(req.body);
      res.render("success");
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
];
