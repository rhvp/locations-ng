const express = require('express');
const router = express.Router();
const city = require('../controllers/cityController');
const auth = require('../controllers/authController');

router.route('/')
    .post(auth.adminAuth, city.create)
    .get(city.findAll)

router.get('/get-by-state/:state', city.findByState)

module.exports = router;