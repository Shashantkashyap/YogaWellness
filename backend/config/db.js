const mongoose = require("mongoose");

exports.dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("error in DB connection", err));
};
