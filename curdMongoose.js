/*
1.create
2.update record
3.delete record
4.find and read result

*/
const express = require("express");
const { MongoKerberosError } = require("mongodb");
const mongoose = require("mongoose");
const app = express();

//Connect Node js and MongoDB with Mongoose
mongoose.set("strictQuery", false);
mongoose
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
// schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
// model

// const productModel = mongoose.model("products ", productSchema);

const saveInDB = async () => {
  const product = mongoose.model("mobiles", productSchema);
  let data = new product({
    name: "m50",
    price: 10000,
    brand: "samsung",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
// saveInDB();

const updateInDB = async () => {
  const product = mongoose.model("mobiles", productSchema);
  let data = await product.updateOne(
    {
      name: "m50",
    },
    {
      $set: { price: 11999 },
    }
  );
  console.log(data);
};
// updateInDB();

const deleteInDB = async () => {
  const product = mongoose.model("mobiles", productSchema);
  let data = await product.deleteOne({
    price: 11999,
  });
  console.log(data);
};
// deleteInDB(); //calling function

const findInDB = async () => {
  const product = mongoose.model("mobiles", productSchema);
  let data = await product.find({
    name: "m50",
  });
  console.log(data);
};
findInDB(); //calling function
