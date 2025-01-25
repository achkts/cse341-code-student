const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const {manKelsier} = require('./controllers/index');
const contactRoute = require('./routes/contacts');

// routes.get('/', nameController1.callingName1);


const port = process.env.PORT
const host = process.env.HOST


app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })

  .use('/contacts', contactRoute);

app.get('/professional', manKelsier
    
); 


