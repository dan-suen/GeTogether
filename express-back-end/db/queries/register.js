const db = require('../connection.js');

const getUsers = () => {
  return db.query(`SELECT * FROM "Users";`)
    .then(data => {
      return data.rows;
    });
};



module.exports = { getUsers };

