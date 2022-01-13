const express = require('express');
require('dotenv').config();

const { crearConexion, cerrarConexion } = require('./db/conn.js')

const app = express();

console.log(process.env.APP_PORT);

app.get('/',function(req,res)
{
    const rescon = crearConexion();
    const resclo = cerrarConexion();
    res.send(`<h1>CIAv2 back</h1><br /><h2>${rescon}</h2><br /><h2>${resclo}</h2>`);
});

app.listen(process.env.APP_PORT, () =>{});