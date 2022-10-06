const db = require('../connection.js');

const getEvents = () => {
  return db.query(`SELECT
  "Events".id,
   "Events".host_id,
  "Events".event_name,
  "Events".event_time,
  "Events".location,
  "Events".price,
  (SELECT Count(id) FROM "Comments" WHERE "Comments".event_id = "Events".id) as comment_number,
  ("Events".spots - (SELECT Count(id) FROM "Event_attendees" WHERE "Event_attendees".event_id = "Events".id)) as remaining_spots,
  ("Events".event_time - $1) as time_until,
  ("Events".event_time - $1) > interval '0 seconds' as active,
  "Events".description,
  "Events".photo,
  "Events"."createdAt"
  FROM "Events";`, [new Date()])
    .then(data => {
      return data.rows;
    });
};



module.exports = { getEvents };
