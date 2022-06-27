const express = require('express');
const multer = require('multer');
const app = express();



app.post('/uplode', (req,res)=>{
    res.send("File uploaded successfully");
})




app.listen(5000, ()=>{
    console.log("Server is running on port 3000");
})