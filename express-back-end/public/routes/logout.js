const express = require('express');
const router  = express.Router();
const logoutQueries = require('../../db/queries/logout');

router.post('/', (req,res) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
