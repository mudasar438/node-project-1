
// ----MongoDB connection  connection file ------

const {MongoClient}= require("mongodb");
const url = "mongodb://localhost:27017/";
const database = "e-comm";
const client = new MongoClient(url);

// ------mongo database connection useing async/await-----
const dbConnection = async()=>{
    let result = await client.connect();
    let db = result.db (database)
    return db.collection("product")
    

}

module.exports = dbConnection;