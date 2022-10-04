const Express = require('express');
const App = Express();
const PORT = 8080;
const morgan = require('morgan');

require('dotenv').config({ path: require('find-config')('.env') })

//morgan
App.use(morgan('dev'));
// Express Configuration
App.use(Express.static('public'));



const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const logoutRoutes = require('./routes/logout');
const eventRoutes = require('./routes/event');
const createRoutes = require('./routes/create');
const joinRoutes = require('./routes/join');


App.use('/user', userRoutes);
App.use('/login',loginRoutes);
App.use('/register',registerRoutes);
App.use('/logout',logoutRoutes);
App.use('/event',eventRoutes);
App.use('/create',createRoutes);
App.use('/join',joinRoutes);

// Main

const userQueries = require('./db/queries/users');

App.get('/', (req, res) => {
});
App.get('/about', (req, res) => {
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
