const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8020;
const secretKey = "secretKey";

app.get("/", (req, resp) => {
  resp.json({
    message: "A simple api",
  });
});
// create login api
app.post("/login", (req, resp) => {
  const user = {
    id: 1,
    username: "vijay",
    email: "vijay1947nayak@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    resp.json({
      token,
    });
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error while running on server");
  }
  console.log(`server is running on ${8020}`);
});
