const express = require("express");
const app = express();
const databaseConnection = require("./config.js");
const smartPhones = require("./smartphones.js");

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await smartPhones.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(3600);
