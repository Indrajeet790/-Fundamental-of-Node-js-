// Show file List
/* 
 1.Make files in a
 2.FileSystemDirectoryReaderUse path Module
 3.Get file names and print
*/
const fs = require("fs");
// fs.writeFileSync("data.txt", "This data file contains some fruits");
const path = require("path");
const dirPath = path.join(__dirname, "files");
// console.log(dirPath);
// create file with the help of loop
for (i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + "/name" + i + ".txt", "A simple txt file");
  // fs.writeFileSync(`${dirPath}hello${i}.txt`, "A simple txt file");
}
fs.readdir(dirPath, (err, files) => {
  // console.log(files);
  files.forEach((items) => {
    console.log("file name is this", items);
  });
});
