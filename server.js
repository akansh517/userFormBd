const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
