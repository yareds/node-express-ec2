//import express from "express";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require("./routes/routes.js")(app, fs);

const server = app.listen(3001, () => {
  console.log("listening on port 3001", server.address().port);
});

//app.listen(3001, () => console.log("Api is running on port 3001"));

//app.get("/", (req, res) => res.json("My API is running!"));
