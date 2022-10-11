const express = require('express');
const router  = express.Router();
const {getEvents, getEvent, getEventHost, getEventAttendees, joinEvent, alreadyJoined, unregisterEvent } = require('../../db/queries/event');

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

router.post('/:id/join', (req, res) => {
  joinEvent(req.params.id, req.body.userId).then(data => {
    res.send(data);
  })
});

router.post('/joined', (req, res) => {
  alreadyJoined(req.body.eventId, req.body.userId).then(data => {
    res.send(data);
  });
});

router.post('/unregister', (req, res) => {
  unregisterEvent(req.body.eventId, req.body.userId).then(data => {
    res.send(data);
  });
});

module.exports = router;