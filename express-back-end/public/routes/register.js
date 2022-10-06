const express = require('express');
const userQueries = require('../../db/queries/users');
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


router.get('/', (req, res) => {
  const user_name = req.session.user_name;
  const templateVars = {
    user: user_name
  }
  res.render('register', templateVars);
});


router.post('/', (req, res) => {
  console.log(req.body);
  const userName = req.body.username;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, salt);
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const email = req.body.email;
  console.log('hashed pass:', hashedPassword);

  userQueries.findUserByUsername(userName).then(result => {

    if (result[0]) {
      res.status(403).send(`User ${userName} already exists`);
      return;
    } else {
      userQueries.insertNewUser(
        userName,
        hashedPassword,
        firstName,
        lastName,
        email
      ).then(result => {
        console.log('Added new user', result);
        const data = {
          username: result[0].username, 
          id: result[0].id,
          email: result[0].email
        };
        res.status(201).send(data);
        return;
      });
    }
  });
});


module.exports = router;
