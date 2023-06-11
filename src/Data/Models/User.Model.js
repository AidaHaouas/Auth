const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  email: String,
  password: String,
});

const userModel = new mongoose.model("users", UserSchema);
module.exports = userModel;
