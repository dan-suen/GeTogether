const db = require('../connection.js');

const getEvents = () => {
  return db.query(`SELECT * FROM "Events";`)
    .then(data => {
      return data.rows;
    });
};



module.exports = { getEvents };
