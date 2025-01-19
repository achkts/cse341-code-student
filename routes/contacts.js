const routes = require('express').Router();
const contacts = require('../controllers/contacts');

const mongoDB = require('../controllers/mongodb');

routes.get('/', contacts.getContacts);
routes.get('/:id', contacts.getSingleContact);


module.exports = routes;