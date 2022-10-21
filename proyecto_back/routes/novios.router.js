const express = require('express');
const router = express.Router();
const noviosController = require('../controllers/novios.controller');

router.post("/", noviosController.createnv);
router.get("/", noviosController.findnv);
router.get("/:id", noviosController.findOnenv);
router.put("/:id", noviosController.updatenv);
router.delete("/:id", noviosController.removenv);

module.exports = router;