const Express = require('express');
const App = Express();
const PORT = 8080;
const morgan = require('morgan');
const cookieSession = require('cookie-session');

require('dotenv').config({ path: require('find-config')('.env') })

//morgan
App.use(morgan('dev'));
// Express Configuration
App.use(Express.static('public'));
App.use(Express.urlencoded({ extended: true }));


const userRoutes = require('./public/routes/user.js');
const loginRoutes = require('./public/routes/login');
const registerRoutes = require('./public/routes/register');
const logoutRoutes = require('./public/routes/logout');
const eventRoutes = require('./public/routes/event');
const createRoutes = require('./public/routes/create');
const joinRoutes = require('./public/routes/join');


App.use('/users', userRoutes);
App.use('/login',loginRoutes);
App.use('/register',registerRoutes);
App.use('/logout',logoutRoutes);
App.use('/events',eventRoutes);
App.use('/create',createRoutes);
App.use('/join',joinRoutes);


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});