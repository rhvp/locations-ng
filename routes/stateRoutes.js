const express = require('express');
const router = express.Router();
const state = require('../controllers/stateController');
const auth = require('../controllers/authController');

router.route('/')
    .post(auth.adminAuth, state.create)
    .get(state.getAll)

module.exports = router;