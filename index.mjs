//install http server 
import http from "http";

//createserver 
const server=http.createServer((req,res)=>{
                              res.writeHead(200, { 'Content-Type': 'text/plain' });
      if(req.url=="/"){
                              res.end("hey welcome to home page")
      }else if(req.url=="/about"){
                              res.end("welcome to about us page")
      }else{
                              res.end("404 Error")
      }
});

server.listen(5500,()=>{
       console.log("Server is running on port 8080")
})

// import http from 'http';

// // Create a server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, ES Modules!\n');
// });

// // Define the port to listen on
// const PORT = 3000;

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
