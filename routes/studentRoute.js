const express = require('express');

const router = express.Router();

const studentController = require('../controllers/studentController');

// ------------------ Get requests ------------
router.get('/create', studentController.createStudentPage);

// ------------------- Posts Requests ----------
router.post('/create-student', studentController.createStudent);

module.exports = router;
