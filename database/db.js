const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tested'
});

conexion.connect((err) => {
    if(err){
        console.error(`Error de conexión: ${err}`);
        return;
    }
    console.log('Conectado a la BD MySQL');
});

//Exporto el módulo para poder usarlo en la APP
module.exports = conexion;