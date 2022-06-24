// const express = require("express");
// const path = require("path");
// const route = express.Router();
// const app = express();


// const reqFilter = (req, res, next) => {
//     if(!req.query.age){
//         res.send("Age is Required")
//     } else if(req.query.age < 18){
//         res.send("You are not allowed")

//     }
//     else{

//         next()
//     }
//     // app.use(reqFilter
// }
// route.use(reqFilter)
// // app.use(reqFilter)
// app.get('/',(req,res)=>{
//     res.send("This is Home Page")
// })
// route.get('/about',reqFilter,(req,res)=>{
//     res.send("This is about Page")
// })
// route.get('/contact',(req,res)=>{
//     res.send("This is Contact Page")
// })

// app.use('/',route)

// app.listen(5000, (err)=>{
//     if(!err){
//         console.log("Server is Running")
//     }
// })