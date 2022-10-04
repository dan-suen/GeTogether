const express = require('express');
const router = express.Router();
const conversationQueries = require('../db/queries/conversations');
const userQueries = require('../db/queries/users');
const itemsQueries = require('../db/queries/items');

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect('login');
  } else {
    const username = req.session.user_name;

    conversationQueries.getUserBuyConvos(req.session.user_id).then(convos => {
      conversationQueries.getUserSellConvos(req.session.user_id).then(convos2 => {
        const templateVars = { user: username, buyerData: convos, sellerData: convos2};
        res.render('inbox', templateVars);
      });
    });
  }
});

module.exports = router;
