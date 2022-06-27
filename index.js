const express = require('express');
const Product = require('./product');
const app = express();
const cors =require('cors')
app.use(express.json());
app.use(cors())
require('./config')


// post single data to mongoDB
// app.post('/product', (req, res) => {
//     const product = new Product(req.body);
//     product.save()
//         .then(() => {
//             res.send(product);
//         }
//         ).catch(err => {
//             res.send(err);
//         }
//         );
// }
// );


app.post('/create',async(req,res)=>{
    console.log(req.body)
    
    let data = await Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
   
})
app.get('/get',async(req,res)=>{
    let data = await Product.find();
    res.send(data);

})

app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);
    console.log("Id deleted")

})


app.listen(5000,()=>{
    console.log("Server is Running on Port 5000")

})