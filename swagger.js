const swaggerAutogen = require('swagger-autogen')();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
const host = process.env.HOST

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Swagger Contacts API'
  },
  // host: `${host}:${port}`
  host: 'https://cse341-code-student-ccpz.onrender.com/'
};

const outputFile = './swagger.json';
const routes = ['./routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./server.js')    
});