/*
1.what is middleware
2.how to make a middleware
3.apply Middleware on routes
4.Type of middleware:-
a> Application-level middleware
b> Router-level middleware
c> Error-handling middleware
d> Built-in middleware
e>Third-party middleware
*/
const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide age");
  } else if (req.query.age <= 18) {
    resp.send("you cannot access this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to Home page");
});

app.get("/user", (req, resp) => {
  resp.send("welcome to user page");
});
app.listen(2000);
