const express = require('express');
const userQueries = require('../db/queries/users');
const router  = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


/*****************************
 * /REGISTER ROUTE (for rendering register page)
*****************************/
router.get('/', (req, res) => {
const user_name = req.session.user_name;
  const templateVars = {
    user: user_name
  }
  res.render('register',templateVars);
});


/*****************************
 * /REGISTER ROUTE for registering a new user
*****************************/
router.post('/', (req, res) => {
  console.log(req.body);
  const userName = req.body.userName;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password,salt);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userPic = req.body.userPic;
  const address = req.body.address;
  const aboutMe = req.body.aboutMe;
  console.log('hashed pass:', hashedPassword);

  userQueries.findUserNameExists(userName).then(result => {

    if(result[0]) {
       res.status(403).send(`User ${userName} already exists`);
       return;
    }else {
      userQueries.insertNewUser(
        userName,
        hashedPassword,
        userPic,
        firstName,
        lastName,
        address,
        aboutMe
        ).then(result => {
          console.log('Added new user', result);
          req.session.user_name = result[0].username;
          req.session.user_id = result[0].id;
          res.status(201).send('SUCCESS');
          return;
        });
    }
  });

});


module.exports = router;
