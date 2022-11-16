# GeTogether
- GeTogether is a project that is loosely inspired by the Meetups platform and is built using the PERN stack. This is supplemented by a plethora of additional libararies including react-router, react day-picker and even Google maps!

## Final Product
 !["Main Page"](https://github.com/dan-suen/GeTogether/blob/main/public/screens/1.png?raw=true)
 - The main page features a loadout of the event listings with the ability to filter by date or text and there are also preset filters under the 'See What's Happening' dropdown bar. Users can also use any and all filters in conjunction with one another.

 - There is also a next event section on the right side which will link to the event page for the next occuring event. A countdown timer is shown for convenience and is recalculated on page refresh.

!["Main Page 2"](https://github.com/dan-suen/GeTogether/blob/main/public/screens/2.png?raw=true)
 - Each event listing will link to an event details page for more information and logged-in users can join events using the join button. The login dropdown will show for any guests attempting to join an event but is not a logged-in user.

 - Registration is also avaliable next to the login dropdown.

 !["Event Page"](https://github.com/dan-suen/GeTogether/blob/main/public/screens/3.png?raw=true)

 - The event pages will show all event details relating to an event, including the host, attendees, event information and pricing as well as an interactive map of the event location

  !["Users Page"](https://github.com/dan-suen/GeTogether/blob/main/public/screens/5.png?raw=true)
 - Users will be redirected to their user page on login or by clicking their username in the right of the navbar when logged-in

 - Users can view the events they are hosting, attending or have attended to in the past with links to those pages.

 !["Event Creation"](https://github.com/dan-suen/GeTogether/blob/main/public/screens/6.png?raw=true)

 - Events can be created by logged-in users from the main or user page by clicking the '+' button.

 - This allows users to fill in a form with the event information usch as date, time, name, price, etc and have it be posted to the site.



## Running the project

- **TWO** terminal windows are need to run this project in its entirety. 

In one terminal, `cd` into `react-front-end`. Run `npm install` to install the dependencies. Then run `npm start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` to install the dependencies, then `npm start` to launch the server.

## Project Setup

1. This project requires a local or remote installation of PostgreSql.
Log into PostgreSql and run the following commands: 
```
CREATE ROLE labber WITH LOGIN password 'labber';
CREATE DATABASE getogether OWNER labber;
```
Create the .env file inside the 'express-back-end' folder with your correct information: 
e.g. 
  - username: `labber` 
  - password: `labber` 
  - database: `getogether`

2. Follow README.md inside the 'express-back-end' folder to create and seed the database tables locally.


## Dependencies

- Node 16.x or above
- React 18.x or above
