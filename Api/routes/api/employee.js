const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/source/employeesController.js');

router.post('/create', employeesController.handleNewEmployee);

module.exports = router;
