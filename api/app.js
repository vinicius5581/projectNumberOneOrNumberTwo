const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const restroomsRoutes = require("./routes/restrooms");

// Instantiate express app
const app = express();

// dev log
app.use(morgan("dev"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to mongodb
mongoose.connect(
  `mongodb://${keys.mongodb.MONGO_US}:${keys.mongodb.MONGO_PW}@${
    keys.mongodb.MONGO_SR
  }/${keys.mongodb.MONGO_DB}`,
  {
    useNewUrlParser: true
  },
  () => console.log("Connected to mongodb...")
);

// CORS config
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/restrooms", restroomsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
