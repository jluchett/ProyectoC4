var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hello World¡' });
  res.send("Prueba sin motor de busqueda")
});

module.exports = router;