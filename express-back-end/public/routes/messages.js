const express = require('express');
const messagesQueries = require('../db/queries/messages');
const userQueries = require('../db/queries/users');
const itemsQueries = require('../db/queries/items');
const router = express.Router();

router.get('/:id', (req, res) => {

  //current user's info:
  const username = req.session.user_name;
  const user_id = req.session.user_id;
  const user_pic = req.session.user_pic;

  messagesQueries.getConversation(req.params.id).then(convo => {
    if (user_id !== convo[0].sender_id && user_id !== convo[0].receiver_id) {
      res.status(500).json({ error: 'This is not your conversation!' });
    } else {
      //get receiver id based on the other user's id of the conversation
      let cur_receiver_id;
      convo[0].sender_id === user_id ? cur_receiver_id = convo[0].receiver_id : cur_receiver_id = convo[0].sender_id;
      const item_id = convo[0].item_id;

      itemsQueries.getItemByID(item_id).then(items => {
        const item_title = items[0].title;

        userQueries.findUserViaId(cur_receiver_id).then(user => {
          const receiver_username = user[0].username;
          const receiver_user_pic = user[0].user_pic;

          messagesQueries.getAllMessages(req.params.id).then(messages => {
            const templateVars = { allMessages: messages, convo_id: req.params.id, user_id: user_id, user: username, receiver_username: receiver_username, receiver_user_pic: receiver_user_pic, item_id: item_id, item_title: item_title, user_pic: user_pic }
            res.render('messages', templateVars);
          });
        });
      });
    }
  }).catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});

router.post('/:id', (req, res) => {
  const user_id = req.session.user_id;

  messagesQueries.getConversation(req.params.id).then(convo => {
    if (user_id !== convo[0].sender_id && user_id !== convo[0].receiver_id) {
      res.status(500).json({ error: 'This is not your conversation!' });
    } else {
      messagesQueries.insertMessage(req.params.id, req.body.sender_id, req.body.new_message).then(message => {
        console.log(message);
        res.status(201).json(message[0]);
      })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    }
  });
});

module.exports = router;
