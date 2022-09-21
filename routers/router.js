import express from 'express';
const router = new express.Router();
const content = require('../src/content/controller.content');
	
router.get('/content', content.addData)

module.exports = router