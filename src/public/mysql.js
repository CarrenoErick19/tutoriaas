const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'aplicacion',
    password:'avancepagina',
    database:'a_tutoria'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

//Consola tabla tutoria:
conection.query('SELECT * from tutoria', (err, rows) =>{
    if(err) throw err
    console.log('Los datos de la tabla son estos:')
    console.log(rows)
})

conection.end()