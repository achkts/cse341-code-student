const { ObjectId } = require("mongodb");
const contact = require('../models/contactModel');


const getContacts = async (req, res) => {
        const allContacts = await contact.find({}).exec();

        res.json(allContacts);
}

const getSingleContact = async (req, res) => {
    const id = req.params.id;
    const singleContact = await contact.findById(id);

  res.json(singleContact);
  
}

const requireField = (obj, fieldName) => {
    if(obj[fieldName] == undefined) throw new Error(fieldName+ ' is required.');
}

const createContact = async (req, res) => {
    const contactJson = req.body;
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Contact data',
        required: true,
        schema: {
            "firstName" : "Tony",
            "birthday" : "04-17-1972",
            "email" : "starkt@starlink.com",
            "favoriteColor" : "purple",
            "lastName" : "Stark"
        }
    } */
    try {
        const newContact = new contact(contactJson);
        const result = await newContact.save();
        console.log('created', result)

        res.status(201).send(result._id)

    } catch(e) {
        const messages = [];
        for(const key in e.errors) {
            messages.push(e.errors[key].message);
        }
        res.status(400).json(messages);
    }
}

const updateContact = async (req, res) => {
    const contactJson = req.body;
    const id = req.params.id;
    try {
        const filter = { _id: new ObjectId(id) };
        const result = await contact.updateOne(filter, contactJson);
       
        
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
        const filter = { _id: new ObjectId(id) };
        const result = await contact.deleteOne(filter);
    
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
       
        res.status(204).json({ message: "Delete successful", result });

    } catch(e) {
        res.status(500).send(e.message);
    }
    
};

module.exports = { getContacts, getSingleContact, createContact, updateContact, deleteContact };