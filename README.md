# GeTogether
- GeTogether is a project that is loosely inspired by the Meetups platform and is built using the PERN stack. This is supplemented by a plethora of additional libararies including react-router, react day-picker and even Google maps!

## Final Product
 !["Main Page"](https://github.com/dan-suen/marketplace/blob/master/public/screens/1.png?raw=true)
 - The main page features a randomized loadout of the first 10 item listings with the ability to filter by price or username and the results can be filtered in a descending order using the checkbox. Users can also choose preset filter options via yellow buttons.

 - Each item listing has a variety of information shown, such as a picture, seller, description, sold-out status, etc.

 !["Login"](https://github.com/dan-suen/marketplace/blob/master/public/screens/2.png?raw=true)
 - Users can login via a login page to access user specific featuers on the site

 !["Logged in Main Page"](https://github.com/dan-suen/marketplace/blob/master/public/screens/3.png?raw=true)
 !["Favourites"](https://github.com/dan-suen/marketplace/blob/master/public/screens/4.png?raw=true)

 -These features include access to the favourites system shown in the upper right of each item, which allows users to add the item to their favourites, and the ability to message sellers about an item in the lower right(provided the item is NOT sold out already)

  !["Profile"](https://github.com/dan-suen/marketplace/blob/master/public/screens/6.png?raw=true)
  !["Item Creation"](https://github.com/dan-suen/marketplace/blob/master/public/screens/7.png?raw=true)
 - Users also have access to their personal page where they can edit their own profile and see a listing of the items they are selling
 - Items being sold by the user can be deleted, marked as sold and related messages can be viewed.
 !["Inbox"](https://github.com/dan-suen/marketplace/blob/master/public/screens/8.png?raw=true)

 - The robust messaging systems allows for real-time messaging via web-sockets
 !["Messages"](https://github.com/dan-suen/marketplace/blob/master/public/screens/9.png?raw=true)



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
