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
// here we can verify our token
app.post("/profile", verifyToken, (req, resp) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      resp.send({ result: "Invalid token" });
    } else {
      resp.json({
        message: "profile accessed",
        authData,
      });
    }
  });
});

// for verify token
// here we found token
function verifyToken(req, resp, next) {
  const bearerHeader = req.headers["authorization"];
  // checked undefined or not

  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    resp.send({
      result: "Token is not valid",
    });
  }
}

app.listen(port, (err) => {
  if (err) {
    console.log("Error while running on server");
  }
  console.log(`server is running on ${8020}`);
});
