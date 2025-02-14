const routes = require('express').Router();
const contacts = require('../controllers/contacts');
const utilities = require('../utilities');

routes.get('/contacts/', utilities.handleErrors(contacts.getContacts));
routes.get('/contacts/:id', utilities.handleErrors(contacts.getSingleContact));

routes.post('/contacts/', utilities.handleErrors(contacts.createContact));
routes.put('/contacts/:id', utilities.handleErrors(contacts.updateContact));
routes.delete('/contacts/:id', utilities.handleErrors(contacts.deleteContact));


module.exports = routes;