const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./Routes/user.Route.js");
const { db } = require("./utility/db");
const app = express();

app.use(express.json());

app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
