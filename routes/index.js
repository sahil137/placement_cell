const express = require('express');

const router = express.Router();
const userRoutes = require('./userRoutes');

const homeController = require('../controllers/homeController');

router.get('/', homeController.homePage);

router.use('/users', userRoutes);

module.exports = router;
