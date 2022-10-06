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

const insertNewUser = (userName, password, firstName, lastName, email) => {
  const query = `
  INSERT INTO "Users" (
    username,
    password,
    "firstName",
    "lastName",
    email,
    "createdAt"
    )
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *`;

  const queryParams = [userName, password, firstName, lastName, email, new Date()];

  return db.query(query,queryParams).then(data => {return data.rows});
};

module.exports = { getUsers, findUserByUsername, insertNewUser };
