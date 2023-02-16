const express = require("express");
const dbConnect = require("./commonmongoDB.js");
const app = express();

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.listen(4000);
