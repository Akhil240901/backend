const fs=require("fs");
const { console } = require("inspector");

//create file in asynchronous way 
  //writefile("file_name","content","callback function")
fs.writeFile("bio.txt","Its is my personel file where i write many things with my consent thats it!!",(err)=>{
      console.log("Written in file successfully");
      console.log(err)
})

//append or update 
// fs.appendFile("bio.txt","  go ahead ",(err)=>{
//       console.log("added successfully")
// });

//read
fs.readFile("bio.txt","UTF-8",(err,data)=>{
      console.log(err);
      console.log(data+"hygug");
})

// fs.unlink("bio.tx",(err)=>{
//      console.log(err)
// });