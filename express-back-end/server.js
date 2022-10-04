const Express = require('express');
const App = Express();
const PORT = 8080;
const morgan = require('morgan');

require('dotenv').config({ path: require('find-config')('.env') })

//morgan
App.use(morgan('dev'));
// Express Configuration
App.use(Express.static('public'));
//App.use(Express.urlencoded({ extended: true }));



// const userRoutes = require('./routes/user');
// const messagesRoutes = require('./routes/messages');
// const loginRoutes = require('./routes/login');
// const postItemRoutes = require('./routes/post-item');
// const registerRoutes = require('./routes/register');
// const inboxRoutes = require('./routes/inbox');
// const mainRoutes = require('./routes/main_page');
// const logoutRoutes = require('./routes/logout');
// const userFavRoutes = require('./routes/user-fav');


// app.use('/user', userRoutes);
// app.use('/favourites',userFavRoutes);
// app.use('/messages', messagesRoutes);
// app.use('/login',loginRoutes);
// app.use('/post-item',postItemRoutes);
// app.use('/register',registerRoutes);
// app.use('/inbox',inboxRoutes);
// app.use('/logout',logoutRoutes);
const userQueries = require('./db/queries/users');

// Main
App.get('/', (req, res) => {
  return userQueries.getUsers().then(data =>{
    return res.json(data)
  }
)});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
