const express = require("express");
const bodyParser = require("body-parser");
const teamworkRoutes = require("./api/routes/teamworkRoutes");
const userRoutes = require("./api/routes/userRoutes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register routes for all request
app.use("/api/v1", teamworkRoutes);
app.use("/api/v1/auth", userRoutes);
module.exports = app;
