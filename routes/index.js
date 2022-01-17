const express = require('express');

const router = express.Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoute');
const homeController = require('../controllers/homeController');

router.get('/', homeController.homePage);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);

module.exports = router;
