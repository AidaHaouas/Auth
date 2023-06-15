const userModel = require("../../../Data/Models/User.Model");
const bcrypt = require("bcrypt");
const createToken = require("../Utils/tokens");
const login = async (req, res, next) => {
  try {
    const foundUser = await userModel.findOne({
      email: req.body.email,
    });
    if (foundUser) {
      const isPasswordorrect = await bcrypt.compare(
        req.body.password,
        foundUser?._doc.password
      );
      if (isPasswordorrect) {
        delete foundUser._doc.password;
        const token = await createToken(foundUser);
        return res.status(200).send({
          message: "user login succesfully",
          payload: {
            user: foundUser,
            token: token,
          },
        });
      } else {
        return res.status(401).send({
          message: "incorrect password",
        });
      }
    }
    res.status(400).json("user not found");
  } catch (err) {
    console.log("err: ", err);
    res.status(500).json("server error");
  }
};
module.exports = login;
