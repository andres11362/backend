const express = require('express');
require('dotenv').config();

const app = express();

console.log(process.env.APP_PORT);

app.get('/',function(req,res)
{
    console.log('Desarrollo corriendo...')
    res.send('<h1>CIAv2 back</h1>');
});

app.listen(process.env.APP_PORT, () =>{});