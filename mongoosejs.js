/*
1.What is mongoose
2. Difference between Mongoose vs MongoDb package
3.What is schemas
4.what is model
5.Connect Node js and MongoDB with Mongoose
*/
/*
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/e-comm"),
  {
    userNewUrlParser: true,
    UseUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully connected");
    }
  };
*/
/*
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm"),
    {
      userNewUrlParser: true,
      UseUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully connected");
      }
    };
  const productSchema = new mongoose.Schema({ name: String });

  const productModel = mongoose.model("product", productSchema);
  let data = new productModel({ name: "vijay50" });
  let result = await data.save();
  console.log(result);
};
main();
*/
const express = require("express");
const { MongoKerberosError } = require("mongodb");
const mongoose = require("mongoose");
const app = express();

// Connect Node js and MongoDB with Mongoose
const main = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://127.0.0.1:27017/e-comm", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((e) => {
      console.log(e);
    });

  const productSchema = new mongoose.Schema({ name: String, price: Number });

  const productModel = mongoose.model("products ", productSchema);
  let data = new productModel({ name: "vijay50", price: 500 });
  let result = await data.save();
  console.log(result);
};
main();
