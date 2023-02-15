const express = require("express");
const path = require("path");

const app = express();

// set template engine

app.set("view engine", "profile", "login");

app.get("/profile", (_, response) => {
  const user = {
    name: "vijay",
    email: "vijay123@gmail.com",
    state: "jharkhand",
    skills: ["html", "css", "js", "node js"],
  };
  response.render("profile.ejs", { user });

  app.get("/login", (_, response) => {
    response.render("login.ejs");
  });
});

app.listen(3400);
