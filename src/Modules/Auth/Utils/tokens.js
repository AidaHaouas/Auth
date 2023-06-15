const jwt = require("jsonwebtoken");
const { JWTCONFIG } = require("../../../../config");

const createToken = async (user) => {
  console.log(user);
  const payload = {
    sub: user._id,
    name: user.firstName + " " + user.lastName,
    iat: Date.now(),
  };
  var token = await jwt.sign(payload, JWTCONFIG.privateKey, {
    algorithm: "RS256",
  });
  return token;
  console.log(token);
};
module.exports = createToken;
