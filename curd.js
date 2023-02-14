//  In this lecture we can learn about CURD with file system
/*
1.C:= create file
2.R:=Read files
3.U:= Updated files
4.D:= Delete files
5.Rename files
*/
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "CURD");
const filePath = `${dirPath}/Name.txt`;

// create file
// fs.writeFileSync(filePath, "This file contains students name");

// read file
// fs.readFile(filePath, "utf8", (err, item) => {
// console.log(item);
// });

// append file(updated file)
// fs.appendFile(filePath, " and file name is name.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// Rename file
// fs.rename(filePath, `${dirPath}/studentName.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated");
//   }
// });

// buffer:Temporary memory location
// delete file
fs.unlinkSync(`${dirPath}/studentName.txt`);
*/

// ##################################
// Asynchronous Basics in NODE JS
/*
1 synchronous: in Synchronous operations tasks are performed one at a time
 ex:= users=>products=>cities

2.Asynchronous:- In asynchronous operation,second task do not wait to finish first task
=>
*/

// console.log("start exe....");

// setTimeout(() => {
//   console.log("logic exe....");
// }, 3000);

// console.log("complete exe....");

// drawback
// let a = 10;
// let b = 0;
// setTimeout(() => {
//   b = 20;
// }, 2000);
// console.log(a + b);

// ##############################################//
