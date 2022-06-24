const {MongoClient} = require('mongodb');
//--------- url mongo db connection ---------
const url = "mongodb://localhost:27017/";
const database = "e-comm";
const client = new MongoClient(url)

const getdata = async()=>{
    let result = await client.connect();

    let db = result.db(database);
    let collection = db.collection('product');
    return collection
    // let data = await collection.find({}).toArray();
    // console.log(data);
    // return data;

}
getdata();

//----- get data acces from mongodb using promise ---
// getdata().then(data=>{
//     data.find().toArray().then((result)=>{
//         console.log(result);

//     })
//     .catch((err)=>{
//         console.log(err)

//     })
//     console.log(data);
// })


// ------- DATA ACCESS With Async/Await ----------
// const main = async()=>{
// let data = await getdata();
// let result = await data.find().toArray();
// console.log(result);
// }

// main()
