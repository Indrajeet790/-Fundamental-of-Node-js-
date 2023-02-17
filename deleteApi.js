const express = require("express");
const dbConnect = require("./commonmongoDB.js");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

// app.use(express.json);
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  console.log(result);
  resp.send("done");
});
app.listen(800);
