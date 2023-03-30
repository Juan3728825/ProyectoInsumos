const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req,res)=>{
    res.render('index.ejs');
})
//Esto es una prueba

// VISTAS INSTRUCTOR

router.get('/ambientes', (req,res)=>{
    res.render('ambientes.ejs');
})

router.get('/controlAula', (req,res)=>{
    res.render('controlAula.ejs');
})

  router.get('/herramientas', (req, res) => {
    res.render('herramientas.ejs');
  });

  router.get('/material', (req, res) => {
    res.render('material.ejs');
  });

  router.get('/menu-instructor', (req, res) => {
    res.render('menu-instructor.ejs');
  });
  
  router.get('/registroinstructor', (req, res) => {
    res.render('registroinstructor.ejs');
  });
  
  router.get('/registrocoordinador', (req, res) => {
      res.render('registrocoordinador.ejs');
    });
  
      // VISTAS COORDINADOR
  router.get('/aprobar', (req, res) => {
    res.render('aprobar.ejs');
  });
  router.get('/reportes', (req, res) => {
    res.render('reportes.ejs');
  });

  router.get('/seguimiento', (req, res) => {
    res.render('seguimiento.ejs');
  });

  // VISTAS APRENDIZ

  router.get('/index', (req, res) => {
    res.render('index.ejs');
  });
  router.get('/prestamoPC1', (req, res) => {
    res.render('prestamoPC1.ejs');
  });
  router.get('/prestamoPC2', (req, res) => {
    res.render('prestamoPC2.ejs');
  });
  router.get('/prestamoPC3', (req, res) => {
    res.render('prestamoPC3.ejs');
  });
  router.get('/menu-aprendiz', (req, res) => {
    res.render('menu-aprendiz.ejs');
  });


  //VISTAS ADMINISTRADOR

  router.get('/rol', (req, res) => {
    res.render('rol');
  });

  router.get('/registroaprendiz', (req, res) => {
    res.render('registroaprendiz');
  });
  
  router.get('/registroinstructor', (req, res) => {
    res.render('registroinstructor');
  });
  
  router.get('/registrocoordinador', (req, res) => {
      res.render('registrocoordinador');
    });
  
    router.get('/registroadministrador', (req, res) => {
      res.render('registroadministrador');
    });
  
    router.get('/devolucionInsumos', (req, res) => {
      res.render('devolucionInsumos');
    });
  
    router.get('/inventario', (req, res) => {
      res.render('inventario');
    });


module.exports = router;