/*
// put method is used when we want to update Api
1. Make PUT method for API
2.sEND DATA FROM POSTMAN
3.Handle data in node js by request
4.write code for update data in MongoDB
*/
const express = require("express");
const dbConnect = require("./commonmongoDB.js");
// const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.put("/:name", async (req, resp) => {
  // console.log(req.body);
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send((result = "updated"));
});

app.listen(500);
