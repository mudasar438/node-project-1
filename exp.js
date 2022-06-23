// ------- HTTP SERVER -----------
// console.log("Netixsol Company")
// console.log(100 + 50 -20)
// const http = require("http")
// const data = require('./data')

// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-Type":"Application\json"});
//     res.write(JSON.stringify(data ))
//     res.end()
// }).listen(4500)


//------------ File System ------------
// console.log("Start Compileing")

// const fs = require("fs");
// const path = require("path")
// const joinpath = path.join(__dirname , 'files');
// for(i=0; i<5; i++){
//     fs.writeFileSync(joinpath + "hello"+i+".text", "A Simple Text File")
// }

// fs.readdir(joinpath,(err,Stack) => {
//     Stack.forEach((item)=>{
//         console.log(item)

//     })

// })

// write a codeto sum two numbers
//  const sum = (a,b) => {
//         return a+b
//     }

 // create a file in desired folder with node js 


// const fs = require("fs");
// const path = require("path")
//  const dirPath =  path.join(__dirname , 'CRUD');
//  console.log(dirPath);


//   const filePath = `${dirPath}/habib.text`;

  //   ........create a file............

//  fs.writeFileSync(filePath, "A Simple Text File",(err)=>{
// if(!err){
//     console.log("File Created")
// }
//  })

// ..............Read a file ...........
// fs.readFile(filePath,'utf8',(err,data)=>{
//     // console.log(data.toString())
//     console.log(data)
// })


// ...............Append a file OR Update..............

// fs.appendFile(filePath, " Mudassar Update File", (err)=>{
//     if(!err){
//         console.log("File Updated")
//     }
// })


// ...............Rename a file..............
// fs.rename(filePath, `${dirPath}/Mudassar.text`, (err)=>{
//     if(!err){
//         console.log("File Renamed")
//     }
// })

// ...............Delete a file..............
// fs.unlinkSync( `${dirPath}/apple.text`)



// ------Express STart ---------

// console.log("Exoress server is Starting")

// const express = require("express");
// const app = express();
// app.get('/', (req, res)=>{
//     res.send("This is Home Page")
// })

// app.get('/about',(req,res)=>{
//     res.send("This is About Page");
// })

// app.listen(5000,(err)=>{
//     if(!err){
//         console.log("Server is Running")
//     }
// })



// ----------HTML pages ------------

// const express = require("express");
// const path = require("path");


// const app = express();

// const publicPath = path.join(__dirname , 'public');
// console.log(publicPath);
// // app.use(express.static(publicPath));
// app.get('/',(req, res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(req, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('*',(req, res)=>{
//     res.sendFile(`${publicPath}/404page.html`)
// })


// app.listen(5000,(err)=>{
//     if(!err){
//         console.log("Server is Running")
//     }
// })


