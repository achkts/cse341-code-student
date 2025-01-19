const { ObjectId } = require("mongodb");
const mongoDB = require("./mongodb");
const getContacts = async (req, res, next) => {
     const myColl = await mongoDB.getClient();
     const projection = { _id: 1, firstName: 1, lastName: 1, email: 1, favoriteColor: 1, birthday: 1 };
        const cursor = myColl.find().project(projection);
        const results = [];
        for await (const doc of cursor) {
            results.push(doc);
            
        }
        res.json(results);
}

const getSingleContact = async (req, res, next) => {
    const id = req.params.id;
    const myColl = await mongoDB.getClient();
    const options = {
        projection: { _id: 0, firstName: 1 },
    };
  
  const findResult = await myColl.findOne({_id: new ObjectId(id)}, options);
  res.json(findResult);
  console.log(id, findResult)
}


module.exports = { getContacts, getSingleContact };