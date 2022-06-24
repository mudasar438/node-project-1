const database = require('./mongoDbConection');

const add = async()=>{
    console.log("Add Product");
    const db =await database();
    const result = await db.insert({
        name:"samsung",
        price:20000,
        quantity:10,
        description:"samsung mobile",
        model:"s10",
        brand:"samsung",
        // image:"https://www.samsung.com/global/galaxy-s10/images/galaxy-s10-black-1.jpg"
    })
    console.log(db);

}

add()
