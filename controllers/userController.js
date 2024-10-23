const { userValidationRules, validate, User } = require("../models/userModel");

exports.getForm = (req, res) => {
  res.render("form");
};

exports.submitForm = [
  userValidationRules(),
  validate,
  async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const user = new User({ name, email, phone });
      await user.save();
      res.render("success");
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
];
