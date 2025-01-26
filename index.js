// Commonjs -> default
// const express = require('express')

// Version imports -> module
import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar a la base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch(error => console.log(error))
    
// Definir puerto si no existe el 4000
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) =>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Lugares Turisticos de Nariño";
    return next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router); //use soporta todos los metodos (get, post, pathc, delete, put)

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})