//Seteo de express
const express = require('express');
const app = express();
const puerto = 3000;

//Definición de template engine (elegí EJS porque es el que sé usar)
app.set('view engine', 'ejs');

//Definimos cómo capturaremos los datos del formulario
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Defino el folder donde están las vistas
app.set('views', __dirname + '/views');

//Defino el folder estático (éste lo uso para llamar los directorios de bootstrap)
app.use(express.static(__dirname + '/public'));

//Llamo al enrutador, para no llenar de rutas el app.js
app.use('/', require('./router'));

//Middleware de error 404
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Error 404', 
        descripcion: 'Página no encontrada'
    });
});

app.listen(puerto, function () {
    console.log('Servidor corriendo en el puerto: '+puerto);
});