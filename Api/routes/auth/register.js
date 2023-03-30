const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/auth/registerController');

router.post('/', registerController.handleNewCompany);

module.exports = router;