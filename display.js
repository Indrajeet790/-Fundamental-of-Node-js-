/*Render HTML AND Json
1.How HTML tags
2.show json Data
3.Link Pages
*/

const express = require("express");
const app = express();
// 1.render html tag
// 3 link pages
app.get("", (request, response) => {
  response.send(
    `<h1>welcome this is home page</h1><a href="/about">Goto about page</a>`
  );
});
app.get("/about", (request, response) => {
  response.send(`<input type="text" placeholder="username" value="${request.query.name}">
  <button>click me</button>
  <a href="/">Goto Home page</a>`);
});
// 2.show json data
app.get("/help", (request, response) => {
  response.send([
    {
      name: "vijay",
      email: "vijay1947nayak@gmail.com",
    },
    {
      name: "sam",
      email: "santosh1234@gmail.com",
    },
  ]);
});

app.listen(3500);
