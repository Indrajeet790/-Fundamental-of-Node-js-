const mongoose = require("mongoose");
// database connection code
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/cart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
