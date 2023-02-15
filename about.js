/*
1.make folder for html file and access italic
2.make html FileSystem
3.load html files
*/

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
// // console.group(publicPath);
// // console.log(__dirname);
// // console.log("hiiii");
// app.listen(2300);

/*
// Remove extension from url
1.Apply get method
2.remove an extension from url
3.make 404 page
4.apply 404 page
*/

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("", (_, response) => {
  response.sendFile(`${publicPath}/home.html`);
});
app.get("/about", (_, response) => {
  response.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (_, response) => {
  response.sendFile(`${publicPath}/help.html`);
});
// by default

app.get("*", (_, response) => {
  response.sendFile(`${publicPath}/pageNotFound.html`);
});
app.listen(2400);
