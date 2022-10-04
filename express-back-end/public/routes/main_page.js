/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//imported query data
const {
  featuredData, newData, filterData, priceData, priceDataDesc
} = require("../db/queries/main.js");


router.get('/', (req, res) => {
  const userName = req.session.user_name;

  const templateVars = {
    user: userName
  };
  res.render('index', templateVars);
});

//buttons
router.post('/featured', (req, res) => {
  featuredData(1).then(data => {
   // console.log("REQUEST SESSION", req.session);
    const login_id = req.session.user_id
    //console.log("FEATURE BUTTON POST", data);
    return res.json([data, login_id]);
  })
});


router.post('/new', (req, res) => {
  newData(1).then(data => {
        const login_id = req.session.user_id
    //console.log("FEATURE BUTTON POST", data);
    return res.json([data, login_id]);
  })
});


router.post('/price', (req, res) => {
  priceData(1).then(data => {
        const login_id = req.session.user_id
    //console.log("FEATURE BUTTON POST", data);
    return res.json([data, login_id]);
  })
});

router.post('/pricedesc', (req, res) => {
  priceDataDesc(1).then(data => {
        const login_id = req.session.user_id
    //console.log("FEATURE BUTTON POST", data);
    return res.json([data, login_id]);
  })
});


//filter
router.post('/filter', (req, res) => {
  console.log(req.body);
  filterData(1, req.body["filter-by-seller"], req.body["filter-by-min-price"], req.body["filter-by-max-price"], req.body["filter-by-sort"]).then(data => {
        const login_id = req.session.user_id
    //console.log("FEATURE BUTTON POST", data);
    return res.json([data, login_id]);
  })
});



module.exports = router;
