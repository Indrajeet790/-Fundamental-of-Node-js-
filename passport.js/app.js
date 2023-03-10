const express = require("express");
const app = express();
const port = 8500;

// when you  login details
app.get("/login", (req, resp) => {
  resp.send("Login get");
});
//when you login and register
app.get("/register", (req, resp) => {
  resp.send("Register get");
});

//
app.post("/login", (req, resp) => {
  resp.send("Login post");
});

//
app.post("/register", (req, resp) => {
  resp.send("Register Post");
});

//
app.get("/logout", (req, resp) => {
  resp.send("Lagout get");
});
//
app.get("/protected", (req, resp) => {
  resp.send("protected get");
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not running");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
