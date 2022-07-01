//Este módulo almacenará las rutas de la API
const express = require('express');
const router = express.Router();

//Llamo al módulo de conexión
const conexion = require('./database/db');

//Listar trabajadores
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM trabajador', (err, results) => {
        if(err){
            throw err;
        }else{
            res.render('index', {results: results});
        }
    });
});

//Crear trabajador
router.get('/create', (req, res) => {
    res.render('create');
});

//Editar trabajador
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM trabajador WHERE id=?', [id], (err, results) => {
        if(err){
            throw err;
        }else{
            res.render('edit', {trabajador: results[0]});
        }
    });
});

//Detalle trabajador
router.get('/detalle/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM trabajador WHERE id=?', [id], (err, results) => {
        if(err){
            throw err;
        }else{
            res.render('detalle', {trabajador: results[0]});
        }
    });
});

//Eliminar trabajador
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM trabajador WHERE id=?', [id], (err, results) => {
        if(err){
            throw err;
        }else{
            res.redirect('/');
        }
    });
});

//Llamar al módulo CRUD
const crud = require('./controllers/crud');

//Agregar los métodos del CRUD (primer parámetro es el method del form, segundo parámetro es el nombre que le di en el CRUD)
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;