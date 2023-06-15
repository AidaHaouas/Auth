const express = require("express");
const createFullName = require("../Middlewares/CreateFullName");
const authRouter = express.Router();
const RegisterUser = require("../Controllers/RegisterUser");
const LoginUser = require("../Controllers/LoginUser");
const decryptToken = require("../Controllers/Decrypt");

authRouter.post("/sign_up", createFullName, RegisterUser);
authRouter.post("/login", LoginUser);
authRouter.get("/decrypt", decryptToken);

module.exports = authRouter;
