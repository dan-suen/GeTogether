const express = require('express');
const router  = express.Router();
const {getEvents, getEvent, getEventHost, getEventAttendees } = require('../../db/queries/event');

router.get('/', (req, res) => {
  getEvents().then(data => {
    res.send(data);
  })
});
router.get('/:id/', (req, res) => {
  getEvent(req.params.id).then(data => {
    res.send(data);
  })
});
router.get('/:id/host', (req, res) => {
  getEventHost(req.params.id).then(data => {
    res.send(data);
  })
});
router.get('/:id/attendees', (req, res) => {
  getEventAttendees(req.params.id).then(data => {
    res.send(data);
  })
});

router.post('/update', (req,res) => {
});

module.exports = router;