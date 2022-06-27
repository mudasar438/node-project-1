const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productScema = new mongoose.Schema({
  name: String,
  price: Number,
});

const main = async () => {
  // create scema for

  // create model for connection with database
  const productModle = mongoose.model("mobiles", productScema);
  let data = new productModle({ name: "mp5k gun", price: 10000 });
  let result = await data.save();

  console.log(result);

  console.log("Hello");
};

main();

const update = async () => {
  const product = mongoose.model("mobiles", productScema);
  let data = await product.updateOne(
    { name: "mp5k gun" },
    { $set: { price: 12, name: "Cvice" } }
  );
  console.log(data);
};

// update();

const deleteData = async () => {
    const product = mongoose.model("mobiles", productScema);
    let data = await product.deleteOne({ name: "Cvice" });
    console.log(data);
}

// deleteData()

const findData = async () => {
    const product = mongoose.model("mobiles", productScema);
    let data = await product.find();
    console.log(data);
}

findData()