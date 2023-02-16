//Make file for Db connection
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("product");
}

module.exports = dbConnect;
