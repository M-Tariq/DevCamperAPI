//entry point
const express = require("express");
const dotenv = require("dotenv");

// load env vars
dotenv.config({ path: "./config/config.env" });

//connect to db
const connectDb = require("./config/db");
connectDb();

const app = express();
//body parser
app.use(express.json());
const morgan = require("morgan");
//Http request logger middleware for nodejs
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//middleware
const logger = require("./middlewares/logger");
app.use(logger);

//bootcamp routes
const bootcamp = require("./routes/bootcamp");

app.use("/api/v1/bootcamps", bootcamp);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
