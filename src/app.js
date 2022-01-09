const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const dotenv = require ('dotenv'); 
const cookieParser = require ('cookie-parser');
/*
const passport = require ('passport'); 
const session = require ('express-session');      
*/

const app = express ();

//importing routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');


// settings para express (framework)
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Set View
app.get('/inicio_docente', (req, res) => {
    res.render('inicio_docente', { text: 'inicio docente'})
})
app.get('/inicio_estudiante', (req, res) => {
    res.render('inicio_estudiante', { text: 'inicio estudiante'})
})
app.get('/asignar_tutoria', (req, res) => {
    res.render('asignar_tutoria', { text: 'Asignacion de Tutorias'})
})
app.get('/solicitar_tutoria', (req, res) => {
    res.render('solicitar_tutoria', { text: 'Solicitar de Tutoria'})
})
app.get('/registro_docente', (req, res) => {
    res.render('registro_docente', { text: 'Registro docente'})
})
app.get('/contacto_docente', (req, res) => {
    res.render('contacto_docente', { text: 'contacto docente'})
})
app.get('/registro_estudiante', (req, res) => {
    res.render('registro_estudiante', { text: 'registro estudiante'})
})
app.get('/contacto_estudiante', (req, res) => {
    res.render('contacto_estudiante', { text: 'contacto estudiante'})
})


/*
//-------------------------LOGIN-DOCENTE
app.get("/", (req, res) => { 
    //Si ya se inicio sesion muestre la bienvenida 
    //Si no inicio sesion se le redireccionara para que inicie sesion
});
app.get("/inicio_docente", (req, res) => { 
    //Mostrar el formulario para iniciar sesion
    res.render("inicio_docente");
});
app.post("/inicio_docente", (req, res) => { 
    //Recibir credenciales e iniciar sesion
});
*/

//middlewares (peticiones)
app.use(morgan('dev'));
app.use(myConnection(mysql, { 
    host: 'localhost',
    user: 'aplicacion',
    password: 'avancepagina',
    port: 3306,
    database: 'a_tutoria'
}, 'single'));

//Nos permite procesar los datos enviados de los formularios
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//seteamos las variables de enterno
dotenv.config({path:'./env/.env'})

//para poder trabajar con los cookies
//app.use(cookieParser)

//routes
app.use('/', customerRoutes);

// statics files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})


