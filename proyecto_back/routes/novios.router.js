const express = require('express');
const router = express.Router();
const noviosController = require('../controllers/novios.controller');

router.post("/", noviosController.createnv);

module.exports = router;