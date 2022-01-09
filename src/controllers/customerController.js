const connection = require("express-myconnection");
const controller = {};


//--------PROCESOS DE INSERTAR DATOS - ESTUDIANTE
controller.sesion_estudiante = (req, res) =>{
    req.getConnection((err, conn) => {
        res.redirect('./principalestudiante.html');
        const name = req.body.name
        const password = req.body.password
        console.log(name+" - "+password)
        //res.send('USUARIO NO CORRECTAMENTE INGRESADO');
        const rows = conn.query('SELECT * FROM registro_estudiante where cedula=?',[name])
            //res.redirect('/asignar_tutoria');            
        if(rows.length>0){
            const cedula = rows[0];
            helpers.matchpassword(password)
        }
    });
};
controller.registro_estudiante = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO registro_estudiante set ?', [data], (err, tutorias) =>{
            res.redirect('/principalestudiante.html');
        });
    })
};
controller.contacto_estudiante = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contacto_estudiante set ?', [data], (err, tutorias) =>{
            res.redirect('/contacto_estudiante');
        });
    })
};
controller.solicitar_tutoria = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO solicitar_tutoria set ?', [data], (err, tutorias) =>{
            res.redirect('/solicitar_tutoria');
        });
    })
};



////--------PROCESOS DE INSERTAR DATOS - DOCENTE
controller.sesion_docente = (req, res) =>{
    req.getConnection((err, conn) => {
        res.redirect('./principaldocente.html');
        const name = req.body.name
        const password = req.body.password
        console.log(name+" - "+password)
        //res.send('USUARIO NO CORRECTAMENTE INGRESADO');
        const rows = conn.query('SELECT * FROM registro_docente where cedula=?',[name])
            //res.redirect('/asignar_tutoria');            
        if(rows.length>0){
            const cedula = rows[0];
            helpers.matchpassword(password)
        }
    });
};
controller.registro_docente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO registro_docente set ?', [data], (err, tutorias) =>{
            res.redirect('/principaldocente.html');
        });
    })
};
controller.contacto_docente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contacto_docente set ?', [data], (err, tutorias) =>{
            res.redirect('/contacto_docente');
        });
    })
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tutoria set ?', [data], (err, tutorias) =>{
            res.redirect('/customers');
        });
    })
};
controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tutoria', (err, tutorias) => {
            if (err){
                res.json(err);
            }
            res.render('customers', {
                data: tutorias
            });
        });
    });
};
controller.edit = (req, res) => {
    const { id_tutoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tutoria WHERE id_tutoria = ?', [id_tutoria], (err, tutorias) => {
            res.render('customer_edit', {
                data: tutorias[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { id_tutoria } = req.params;
    const newTutoria = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tutoria set ? WHERE id_tutoria = ?', [newTutoria, id_tutoria], (err, rows) => {
            res.redirect('/customers');
        });
    });
};
controller.delete = (req, res) => {
    const { id_tutoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tutoria WHERE id_tutoria = ?', [id_tutoria], (err, rows) => {
            res.redirect('/customers');
        });
    })
};
module.exports = controller;