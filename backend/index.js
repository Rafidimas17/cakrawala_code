const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserProfile = require("./routes/UserProfile.js");
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database terhubung");
  })
  .catch((e) => {
    console.log("Database error");
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/", UserProfile);
app.listen(process.env.PORT, () =>
  console.log("server running at PORT", process.env.PORT)
);
