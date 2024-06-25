const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const db = mongoose.connection;
module.exports = {
  db,
};
