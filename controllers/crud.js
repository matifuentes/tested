//Llamo al módulo de conexión
const conexion = require('../database/db');

//Creamos el método Save, al cual estamos llamando en el formulario de creación
exports.save = (req, res) => {
    const nombreTrabajador = req.body.campoNombre;
    const cargoTrabajador = req.body.campoCargo;

    conexion.query('INSERT INTO trabajador SET ?', {nombre: nombreTrabajador, cargo: cargoTrabajador}, (err, results) => {
    if(err){
        console.log(err);
    }else{
        res.redirect('/');
    }
   });
}

//Creamos el método Update, el cuál se llama del formulario de edición
exports.update = (req, res) => {
    const idTrabajador = req.body.campoId;
    const nombreTrabajador = req.body.campoNombre;
    const cargoTrabajador = req.body.campoCargo;

    conexion.query('UPDATE trabajador SET ? WHERE id = ?', [{nombre: nombreTrabajador, cargo: cargoTrabajador}, idTrabajador], (err, results) => {
    if(err){
        console.log(err);
    }else{
        res.redirect('/');
    }
    });
}