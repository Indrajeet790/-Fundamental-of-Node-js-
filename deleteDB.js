const dbConnect = require("./commonmongoDB.js");
const deleteData = async () => {
  // console.log("function called");
  let data = await dbConnect();
  const result = await data.deleteOne({ name: "Motorola elite" });
  console.log(result);

  //  delete many record in database
  /*
  const result=data.deleteMany([{name:""},{brand:""},{price:""}])
  console.log(result)
  */
  if (result.acknowledge) {
    console.log("data deleted");
  }
};
deleteData();
