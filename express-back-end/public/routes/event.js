const express = require('express');
const router  = express.Router();
const eventQueries = require('../../db/queries/event');

router.get('/', (req, res) => {
  eventQueries.getEvents().then(data => {
    res.send(data);
  })
});

router.post('/update', (req,res) => {
});

module.exports = router;