const express = require('express');
const router  = express.Router();
const userQueries = require('../../db/queries/users');


router.get('/', (req, res) => {
  userQueries.getUsers().then(data => {
    res.send(data);
  })
});

router.get('/:id', (req, res) => {
  userQueries.findUserData(req.params.id).then(data => {
    res.send(data);
  })
});

router.get('/:id/host', (req, res) => {
  userQueries.findUserHostEvents(req.params.id).then(data => {
    res.send(data);
  })
});

router.get('/:id/join', (req, res) => {
  userQueries.findUserJoinEvents(req.params.id).then(data => {
    res.send(data);
  })
});


router.post('/update', (req,res) => {
});

module.exports = router;
