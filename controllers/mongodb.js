const {MongoClient} = require('mongodb');



async function getClient() {
    const mongoConnect1 = process.env.MONGO

    const client = new MongoClient(mongoConnect1);


    try {
        await client.connect();
        const myDB = client.db("cse341")
        const myColl = myDB.collection("contacts");

        return myColl;


    } catch (e) {
        console.error(e);
    } 
}
// 
getClient().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

module.exports = { getClient }