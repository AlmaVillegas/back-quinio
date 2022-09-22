import express from 'express';
const router = new express.Router();
const transactions = require('../src/transactions/controller.transactions');
	
router.get('/transaction', transactions.addData)

router.get('/addTransaction', transactions.getData)

module.exports = router