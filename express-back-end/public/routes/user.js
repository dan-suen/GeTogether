const express = require('express');
const router  = express.Router();
const userQueries = require('../../db/queries/users');


router.get('/', (req, res) => {
  userQueries.getUsers().then(data => {
    res.send(data);
  })
});

router.post('/update', (req,res) => {
});

module.exports = router;
