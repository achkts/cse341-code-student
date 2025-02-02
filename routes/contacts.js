const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/contacts/', contacts.getContacts);
routes.get('/contacts/:id', contacts.getSingleContact);

routes.post('/contacts/', contacts.createContact);
routes.put('/contacts/:id', contacts.updateContact);
routes.delete('/contacts/:id', contacts.deleteContact);


module.exports = routes;