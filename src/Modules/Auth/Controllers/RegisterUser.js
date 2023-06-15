const userModel = require("../../../Data/Models/User.Model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  try {
    const user = await userModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      lfullName: req.body.fullName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    return res.status(200).send({
      message: "user created succesfully",
      payload: user,
    });
  } catch (err) {
    res.status(500).send({ message: "Unable To Create User" });
  }
};

module.exports = registerUser;
