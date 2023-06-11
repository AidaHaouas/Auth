const express = require("express");
const createFullName = require("../Middlewares/CreateFullName");
const authRouter = express.Router();
const RegisterUser = require("../Controllers/RegisterUser");
authRouter.post("/sign_up", createFullName, RegisterUser);
module.exports = authRouter;
