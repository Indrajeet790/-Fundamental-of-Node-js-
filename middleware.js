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
// Basic middleware (Application-level middleware)
/*
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
*/
/*
1.Route Level Middleware
2.Apply Middleware in different file
3.Make middleware in the group of route
4.Apply Middleware in group of route 
*/
/*
const express = require("express");
const app = express();
//Apply middleware in single route


const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide your age");
  } else if (req.query.age < 18) {
    resp.send("you cannot access this page");
  } else {
    next();
  }
};
// app.use(reqFilter);


app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});
app.get("/user", reqFilter, (req, resp) => {
  resp.send("welcome to user page");
});
app.get("/contact", reqFilter, (req, resp) => {
  resp.send("This is contact page");
});

app.listen(3000);
*/
