const db = require('../connection.js');

const getUsers = () => {
  return db.query(`SELECT * FROM "Users";`)
    .then(data => {
      return data.rows;
    });
};

const findUserByUsername = (userName) => {
  const query = `SELECT *
  FROM "Users"
  WHERE username = $1;
  `;
  const queryParams = [userName];
  return db.query(query,queryParams).then(data => {
    return data.rows;
  });
};

module.exports = { getUsers, findUserByUsername };
