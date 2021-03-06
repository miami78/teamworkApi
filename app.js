const express = require("express");
const bodyParser = require("body-parser");
const teamworkRoutes = require("./api/routes/teamworkRoutes");
const EmployeeRoute = require("./api/routes/employeeRoute");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register routes for all request
app.use("/api/v1", teamworkRoutes);
app.use("/api/v1/auth", EmployeeRoute);
module.exports = app;
