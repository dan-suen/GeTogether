const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/items');
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  const user_name = req.session.user_name;

  if(!user_name){
    return res.status(400).send('Error must be logged in')
  }
  const templateVars = {
    user: user_name
  }

  res.render('post-item',templateVars);
});

router.post('/', (req,res) => {
  //console.log(req.body);
  const user_name = req.session.user_name;
  const itemName = req.body.itemName;
  const imgUrl = req.body.imgUrl;
  const price  =  req.body.price * 100;
  const type =  req.body.type;
  const description =  req.body.description;

  //if(typeof price )
  //console.log(req);

  userQueries.findUserId(user_name).then(result => {
    //console.log(result);
    const user_id = result[0].id;

    itemQueries.insertNewItem(
    user_id,
    itemName,
    imgUrl,
    price,
    type,
    description
    )
  .then( result => {
    console.log('SUCCESS added item', result);
    res.redirect('/user');
  })
  });

  /**REDIRECT TO USER PAGE */
});

module.exports = router;
