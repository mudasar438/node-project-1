const dbconnect = require('./mongoDbConection');
// const database = dbconnect();
const updateDAte = async()=>{
    let data = await dbconnect();
    let result = await data.update({name:"Mudassar"},{$set:{name:"habib",quantity:0}})
    console.log(result);

}

updateDAte()