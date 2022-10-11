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

const findUserData = (id) => {
  const query = `SELECT *
  FROM "Users"
  WHERE id = $1;
  `;
  return db.query(query,[id]).then(data => {
    return data.rows;
  });
};

const findUserHostEvents = (id) => {
  const query = `SELECT *,
  ("Events".spots - (SELECT Count(id) FROM "Event_attendees" WHERE "Event_attendees".event_id = "Events".id)) as remaining_spots
  FROM "Events"
  WHERE host_id = $1;
  `;
  return db.query(query,[id]).then(data => {
    return data.rows;
  });
};

const findUserJoinEvents = (id) => {
  const query = `SELECT DISTINCT event_id
  FROM "Event_attendees"
  WHERE user_id = $1;`;
  return db.query(query,[id]).then(data => {
    let results = data.rows.map(element => {
      return element.event_id;
    })
    let query = `SELECT *,  
    ("Events".spots - (SELECT Count(id) FROM "Event_attendees" WHERE "Event_attendees".event_id = "Events".id)) as remaining_spots, 
    (event_time - $1) > interval '0 seconds' as active
    FROM "Events"`
    if (results.length > 0){
      results = results.join(", ")
      query = query + ` WHERE id in (${results})`
    } else {
      query = query + ` WHERE id is null`
    }
    return db.query(query, [new Date()])
      .then(data => {
      return data.rows;
    });
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

module.exports = { getUsers, findUserData, findUserByUsername, insertNewUser, findUserHostEvents, findUserJoinEvents};
