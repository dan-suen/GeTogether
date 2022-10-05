const express = require('express');
const router  = express.Router();
const userQueries = require('../../db/queries/users');
//const {displayErr} = require('../public/scripts/error');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

/*****************************
 * ERROR VARIABLES FOR RENDERING THE ERROR ON SCREEN
*****************************/
const renderErr = false;

/*****************************
 * FOR RENDERING LOGIN PAGE
*****************************/
router.get('/', (req, res) => {
  const user_name = req.session.user_name;

    const templateVars = {
      user: user_name,
    }
    res.render('login', templateVars);



});

/*****************************
 * /LOGIN ROUTE (for logining in)
*****************************/
router.post('/', (req,res) => {
  const {username, password} = req.body;

  userQueries.findUserByUsername(username).then((result) => {
    const dbUser = result[0]
    if (!dbUser) {
      res.status(403).send(' Wrong user name or password');
      return;
    } else {
      if(bcrypt.compareSync(password, dbUser.password)) {
        const data = {
          username: dbUser.username, 
          id: dbUser.id,
          user_photo: dbUser.photo,
          email: dbUser.email
        };
        res.status(201).send(data);
      }else {
        res.status(403).send(' Wrong password');
        return;
      }
    }
  });
});

module.exports = router;
