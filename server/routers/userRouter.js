const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.route('/login').post(userController.getUser, (req, res) => {
	return res.status(200).json();
});

router.route('/register').post(userController.createUser, (req, res) => {
	return res.status(200).json();
});

module.exports = router;
