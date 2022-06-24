const dbconnect = require("./mongoDbConection")
const database = dbconnect();

const delData = async()=>{
    let data = await database;
    let result = await data.deleteOne({name:"habib"})
    console.log(result);
}

delData();