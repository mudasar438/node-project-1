const express = require('express');
const Product = require('./product');
const app = express();
const cors =require('cors')
app.use(express.json());
app.use(cors())
require('./config')



app.get("/search/:key", async (req, res) => {
    // res.send("Search is done")
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
                {"name": { $regex: req.params.key}}
                ,{"description": { $regex: req.params.key}}
                // 
                    
                

            ]
        }
    )
    res.send(data)
})

app.listen(5000,()=>{
    console.log("Server is Running on Port 5000")

})







// --------post multiple data to mongoDB --------

// app.post('/create',async(req,res)=>{
//     console.log(req.body)
    
//     let data = await Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
   
// })
// app.get('/get',async(req,res)=>{
//     let data = await Product.find();
//     res.send(data);

// })  


//-------- delete api from mongodb -----

// app.delete('/delete/:_id',async(req,res)=>{
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     res.send(data);
//     console.log("Id deleted")

// })


