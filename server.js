const express = require('express');

const app = express();

const port = 8080;

app.get('/professional', (req, res) => {
    res.send('hellow world')
}); 
// app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on this port: ${port}`);

});