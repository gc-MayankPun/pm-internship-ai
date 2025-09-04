const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");
const testRoutes = require("./routes/testRoutes");

app.disable("x-powered-by");
app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", appRoutes);
app.use("/test", testRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
