// const router = require('express').Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// module.exports = router;

const swaggerAutogen = require('swagger-autogen')();
const port = process.env.PORT
const host = process.env.HOST

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Swagger Contacts API'
  },
  host: `${host}:${port}`
};

const outputFile = './swagger.json';
const routes = ['./routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./server.js')    
});