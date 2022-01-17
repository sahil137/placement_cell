const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers');

// ------------------------- Get Requests -----------------------

router.get('/home', userController.homePage);
router.get('/signin', userController.signin);
router.get('/signup', userController.signup);

// ------------------------- Post Request -----------------------

module.exports = router;
