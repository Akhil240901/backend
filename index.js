//file system core module
const fs=require("fs");

//writeFileSync("file name","Content");
      // fs.writeFileSync("read.txt","Hello node");
// this will override previous content 
       //fs.writeFileSync("read.txt","Hello node from akhil this side");

//append content in next line
//fs.appendFileSync("read.txt"," lets go hard");

//read and display content
// const buff_content=fs.readFileSync("read.txt");
// // console.log(buff_content);  //this will display bite code or buffer value
// org_content=buff_content.toString();
// console.log(org_content);

//rename file content
//fs.renameSync("read.txt","read_file.txt")

//delete content
 fs.unlinkSync("read_file.txt");
 