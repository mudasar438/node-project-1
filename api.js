const express = require("express");
const dbconnect = require("./mongoDbConection");
const mongodb = require("mongodb");
const app = express();

// const dbconnect = require('./mongoDbConection');
// const database = dbconnect();

// ----- use for reques body parse express.Json();
app.use(express.json());
app.get("/", async (req, res) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await dbconnect();
  data = await data.insert(req.body);
  res.send(data);
  console.log(data);

  // res.send(req.body);
  // console.log(req.body);
});

app.put("/", async (req, res) => {
  console.log(req.body);

  let data = await dbconnect();
  data = await data.updateOne({ name: "habib" }, { $set: { age: 45 } });

  // --------- if add dynamic data then {$set:req.body} ------------

  res.send({ result: "Hello my name is mudassar" });
});


app.delete("/:id", async (req, res) => {
    let data = await dbconnect();
    console.log(req.params.id);
    data = await data.deleteOne({ _id:new mongodb.ObjectId(req.params.id) });
    res.send(data);
}) 
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is running on port 5000");
});
