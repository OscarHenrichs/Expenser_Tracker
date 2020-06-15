const express = require('express');
const router = express.Router();
const { getTransactions } = require('../controllers/transactions.js');

router.get('/', (req, res) => {
	res.send('Hello transactions');
});

module.exports = router;
