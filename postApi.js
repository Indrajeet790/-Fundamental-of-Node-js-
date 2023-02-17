//
/*
1. make post method for API
2.Send data from postman
3. Get data in node js by request
4.write code for insert data in MongoDB
*/

const express = require("express");
const dbConnect = require("./commonmongoDB.js");
const app = express();

// use middleware
app.use(express.json());

app.post("/", async (req, resp) => {
  // resp.send({ name: "vijay" });
  // console.log(req.body);
  //   resp.send(req.body);

  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.listen(3000);
