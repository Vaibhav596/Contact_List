const express = require('express');
const router = express.Router();
const contactHandler = require('../controllers/contactHandler');
router.get('/',contactHandler.home);
router.post('/create-contact', contactHandler.createContact);
router.post('/delete-contact',contactHandler.deleteContact);
module.exports = router;