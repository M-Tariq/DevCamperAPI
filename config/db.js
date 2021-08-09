const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log("Connected to db");
      console.log(connection.connection.host);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = connectDB;
