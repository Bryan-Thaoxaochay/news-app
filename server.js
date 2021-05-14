const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const compression = require('compression');
const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
secret: 'Super secret secret',
cookie: {},
resave: false,
saveUninitialized: true,
store: new SequelizeStore({
db: sequelize
})
};

app.use(session(sess));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});