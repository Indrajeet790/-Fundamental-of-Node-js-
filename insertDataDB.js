// insert data in MongoDB
// Make New file for insert data
// import MongoDb connection
// insert single and multiple records
const dbConnect = require("./commonmongoDB.js");

const insert = async () => {
  const db = await dbConnect();
  /* inserted single data object in database
  // const result = await db.insertOne({
  //   name: "infinix",
  //   brand: "indian company",
  //   price: 4000,
  //   category: "Mobile",
  // });
  */
  //  inserted many objects in database
  const result = await db.insertMany([
    { name: "realme 5 pro", brand: "realme", price: 9000, category: "Mobile" },
    {
      name: "Motorola elite",
      brand: "Motorola",
      price: 10000,
      category: "Mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
