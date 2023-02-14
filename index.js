// Fundamentals of Node js

// const index = require("./node");
// const index = require("OS");
// console.log(index);

// filter function
/*
// const ages = [32, 24, 36, 23, 16];
// function checkAdult(age) {
//   return age >= 18;
// }
// const result = ages.filter(checkAdult);
// console.log(result);
*/

// const arr = [2, 4, 7, 1, 3, 8, 3];
// let result = arr.filter((item) => {
//   // return item === 3;
//   return item > 3;
//   // console.log(item);
// });
// console.log(result);

// #######################//
// Core modules

/*1.Global module:we can't import
2.Non-global module:we can import 
*/
// How to create a file in node js(modules)
// const fs = require("fs");
// fs.writeFileSync("hello.text", "hello world");
// const fs = require("fs").writeFileSync;
// fs("abc.text", "hey dude");

// directory name
// console.log(__dirname);
// console.log(__filename);

// #################################//
// Make Basic Server
/*
const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello this is vijay");
    resp.end();
  })
  .listen(4600);
*/
/*
const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("hello dear i am vijay");
    resp.end();
  })
  .listen(2300);

// *2nd way to create server
const http = require("http");
function dataControl(req, resp) {
  resp.write("hy dear are you free then call me i am still waiting");
  resp.end();
}
http.createServer(dataControl).listen(2400);
*/

// package json
// const colors = require("colors");
// console.log("hello".red);
// console.log("hello".bgBlue)

// Nodemon package
// why nodemon is used:-nodemon is very essential tool for saving time during of program executing.
// console.warn("Try Nodemon");
// console.warn(" why r u crying");

/*
//input from Command Line
// add file
// delete file
// console.log(process.argv);
// console.log(process.argv[3]);

const fs = require("fs");

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}
*/
