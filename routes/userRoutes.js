const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getForm);
router.post("/submit", userController.submitForm);

module.exports = router;
