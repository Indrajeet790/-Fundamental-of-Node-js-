/*
1.make folder for html file and access italic
2.make html FileSystem
3.load html files
*/
const { italic } = require("colors");
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
// console.group(publicPath);
// console.log(__dirname);
// console.log("hiiii");
app.listen(2300);
