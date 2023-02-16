//  Read Data from MongoDb
// Read Data from MongoDB
// Make file for Db connection

const dbConnect = require("./commonmongoDB.js");
/*
// common mongodb connection code 
// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017";
// const database = "e-comm";
// const client = new MongoClient(url);
*/

// async function dbConnect() {
//   let result = await client.connect();
//   db = result.db(database);
//   return db.collection("product");
// }
// Handle promise

// console.log(dbConnect());
// handle promises
// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//  another way to handle promises
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
