/*
1.what is the template engine
2.install ejs template package
3.set dynamic routing

*/
const express = require("express");
const path = require("path");
// const ejs = require("ejs");

const app = express();
const publicPath = path.join(__dirname, "views");

//set template engine

app.set("view engine", "profile");

app.get("/profile", (_, response) => {
  const user = {
    name: "vijay",
    email: "vijjay12@tst.com",
    city: "Bokaro",
  };
  response.render("profile.ejs", { user });
});

app.listen(2600);
