const { ObjectId } = require("mongodb");
const mongoDB = require("./mongodb");


const getContacts = async (req, res) => {
     const myColl = await mongoDB.getClient();
     const projection = { _id: 1, firstName: 1, lastName: 1, email: 1, favoriteColor: 1, birthday: 1 };
        const cursor = myColl.find().project(projection);
        const results = [];
        for await (const doc of cursor) {
            results.push(doc);
            
        }
        res.json(results);
}

const getSingleContact = async (req, res) => {
    const id = req.params.id;
    const myColl = await mongoDB.getClient();
    const options = {
        projection: { _id: 0, firstName: 1 },
    };
  
  const findResult = await myColl.findOne({_id: new ObjectId(id)}, options);
  res.json(findResult);
  console.log(id, findResult)
}

const requireField = (obj, fieldName) => {
    if(obj[fieldName] == undefined) throw new Error(fieldName+ ' is required.');
}

const createContact = async (req, res) => {
    const contactJson = req.body;
    try {
        requireField(contactJson, 'firstName');
        requireField(contactJson, 'lastName');
        requireField(contactJson, 'email');
        requireField(contactJson, 'birthday');
        requireField(contactJson, 'favoriteColor');

        const myColl = await mongoDB.getClient();
        const result = await myColl.insertOne(contactJson)
    

        res.send(result.insertedId)

    } catch(e) {
        res.send(e.message);
    }
}

const updateContact = async (req, res) => {
    const contactJson = req.body;
    const id = req.params.id;
    try {
        const myColl = await mongoDB.getClient();
        const result = await myColl.updateOne(
            { _id: new ObjectId(id) },
            { $set: contactJson }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
    
        res.status(200).json({ message: "Update successful", result });

    } catch(e) {
        res.status(500).send(e.message);
    }
}

const deleteContact = async (req, res) => {
    const id = req.params.id;
    try {
        const myColl = await mongoDB.getClient();
        const result = await myColl.deleteOne(
            { _id: new ObjectId(id) }
        );
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
       
        res.status(204).json({ message: "Delete successful", result });

    } catch(e) {
        res.status(500).send(e.message);
    }
    
};

module.exports = { getContacts, getSingleContact, createContact, updateContact, deleteContact };