const mongoose = require('mongoose');
const productScema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
     brand: String,



})

const Product = mongoose.model('Product', productScema);
module.exports = Product;