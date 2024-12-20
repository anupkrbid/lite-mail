const express = require('express');
const {
  fetchSpecificEmail,
  fetchAllEmails,
  updateSpecificEmail
} = require('../controllers/email.controller');

const router = express.Router();

router.get('/', fetchAllEmails);
router.get('/:id', fetchSpecificEmail);
router.patch('/:id', updateSpecificEmail);

module.exports = router;
