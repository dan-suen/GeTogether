const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const registerQueries = require('../../db/queries/register');


router.get('/', (req, res) => {
});



router.post('/', (req, res) => {
});


module.exports = router;
