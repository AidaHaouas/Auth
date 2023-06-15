const jwt = require("jsonwebtoken");
const { JWTCONFIG } = require("../../../../config");
const decryptToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    let decodedToken = await jwt.verify(token, JWTCONFIG.publicKey);
    res.status(200).send({
      decryptToken: decodedToken,
    });
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = decryptToken;
