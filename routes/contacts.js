const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/', contacts.getContacts);
routes.get('/:id', contacts.getSingleContact);

routes.post('/', contacts.createContact);
routes.put('/:id', contacts.updateContact);
routes.delete('/:id', contacts.deleteContact);


module.exports = routes;