const express = require("express");
const app = express();
app.get("", (request, response) => {
  console.log("data sent by browser =>>", request.query.name);
  response.send("welcome ==>" + request.query.name);
});
// app.get("", (request, response) => {
//   console.log("data sent by browser =>>", request.query.name);
//   response.send("welcome this is home page");
// });
app.get("/about", (request, response) => {
  response.send(" this is About pages");
});
app.get("/help", (request, response) => {
  response.send("hello this is abcd pages");
});

app.listen(3000);
