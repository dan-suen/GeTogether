const db = require('../connection.js');

const createEvent = (obj) => {
  const {basicUrl,
  description,
  fee,
  hour,
  lat,
  lng,
  min,
  selectDay,
  spots,
  title,
  user} = obj

  const eventTime = new Date(new Date(selectDay) + (60000 * Number(min)) + (3600000 * Number(hour)));

  const query = `
  INSERT INTO items (
    host_id,
    event_time,
    location,
    lat,
    lng,
    price,
    spots,
    remaining_spots,
    description,
    photo,
    createdAt,
    event_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *
  `;

  const queryParams = [user, eventTime, imageUrl, price, type, description, date, sold];

  return db.query(query, queryParams)
    .then(data => {
      return data.rows;
    });
};


module.exports = {createEvent};