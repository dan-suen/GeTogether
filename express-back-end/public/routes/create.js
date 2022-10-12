
const express = require('express');
const router  = express.Router();
const {createEvent} = require('../../db/queries/create');

router.post('/', (req, res) => {
  let newEvent = JSON.parse(Object.keys(req.body)[0]);
  const sendEvent = {...newEvent, fee: String(newEvent.fee * 100)}
  
  console.log('sendEvent', sendEvent);
  createEvent(sendEvent).then((data) => {
    res.send(data);
  })
});


module.exports = router;