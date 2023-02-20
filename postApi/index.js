// 1.make config file for mongoDB
// 2.make post ROUTE
//  3.Get data from the postMan and save in DB
const express = require("express");
require("./config.js");
const app = express();

const smartPhones = require("./smartphones");

app.use(express.json());
app.post("/create", async (req, resp) => {
  //  data save in database
  let data = new smartPhones(req.body);
  let result = await data.save();
  // data come from postman
  // console.log(req.body);
  console.log(result);
  // resp.send("done");
  resp.send(result);
});

app.listen(3500);
