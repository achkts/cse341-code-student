const express = require('express');
const env = require("dotenv").config()
const app = express()
const {manKelsier} = require('./controllers/index.js');

// routes.get('/', nameController1.callingName1);


const port = process.env.PORT
const host = process.env.HOST


app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})

app
//   .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
//   .use('/professional', professionalRoutes);

app.get('/professional', manKelsier
    
); 


