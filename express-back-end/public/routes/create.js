
const express = require('express');
const router  = express.Router();
const {createEvent} = require('../../db/queries/create');

router.post('/', (req, res) => {
  const newEvent = JSON.parse(Object.keys(req.body)[0]);
  //console.log(newEvent);
  createEvent(newEvent).then((data) => {
    res.send(data);
  })
});


module.exports = router;