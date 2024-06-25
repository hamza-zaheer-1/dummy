const express = require("express");

const userController = require("../Controller/user.Controller.js");
const userRouter = express.Router();

userRouter.post("/", userController.signUp);
userRouter.get("/", (req, res) => {
  return res.json({
    message: "hiii",
  });
});

module.exports = { userRouter };
