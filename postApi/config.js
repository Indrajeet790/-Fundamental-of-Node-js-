// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// DATABASE CONNECTION
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/cart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log(e);
  });
