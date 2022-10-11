const db = require('../connection.js');

const createEvent = (obj) => {
  const {basicUrl,
  address,
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
  INSERT INTO "Events" (
    host_id,
    event_time,
    location,
    lat,
    lng,
    price,
    spots,
    description,
    photo,
    "createdAt",
    event_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *
  `;

  // REMEMBER TO FIX QUERY ON MERGE REMAINING SPTS COLUMN DOESNT EXISTS
  const queryParams = [user, eventTime, address, lat, lng, fee, spots, description, basicUrl, new Date(), title];

  return db.query(query, queryParams)
    .then(data => {
      return data.rows;
    });
};


module.exports = {createEvent};