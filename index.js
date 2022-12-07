import express from "express";

const app = express();

app.listen(3001, () => console.log("Api is running on port 3001"));

app.get("/", (req, res) => res.json("My API is running!"));
