/*
1.Route Level Middleware
2.Apply Middleware in different file
3.Make middleware in the group of route
4.Apply Middleware in group of route 
*/
// Apply Middleware in different file
const express = require("express");
const reqFilter = require("./RLmiddleware1");
const app = express();
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});
app.get("/user", reqFilter, (req, resp) => {
  resp.send("welcome to user page");
});
route.get("/contact", reqFilter, (req, resp) => {
  resp.send("This is contact page");
});
route.get("/about", (req, resp) => {
  resp.send("welcome to about page");
});

app.use("/", route);
app.listen(3000);
