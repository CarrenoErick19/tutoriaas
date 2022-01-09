const express = require('express');
const router = express.Router();


const customerController = require('../controllers/customerController');


//Raiz del Servidor
router.get('/',(req, res) => {
    res.render('Inicio')
})

//Procesos de datos - Docente 
router.post('/inicio_docente', customerController.sesion_docente);
router.post('/registro_docente', customerController.registro_docente);
router.post('/contacto_docente', customerController.contacto_docente);

//Procesos de datos - Estudiante
router.post('/inicio_estudiante', customerController.sesion_estudiante);
router.post('/registro_estudiante', customerController.registro_estudiante);
router.post('/contacto_estudiante', customerController.contacto_estudiante);
router.post('/solicitar_tutoria', customerController.solicitar_tutoria);


//Proceso de Asignacion de Tutoria 
router.get('/customers', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id_tutoria', customerController.delete);
router.get('/update/:id_tutoria', customerController.edit);
router.post('/update/:id_tutoria', customerController.update);


module.exports = router;