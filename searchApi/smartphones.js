const mongoose = require("mongoose");
const smartphonesSchema = new mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("smartphones", smartphonesSchema);
