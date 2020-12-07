const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require("connect-flash");


// Inicializaciones
const app = express();


// Configuraciones
app.set('port', process.env.PORT || 7700);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars : allowInsecurePrototypeAccess(Handlebars),
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(session({
    secret: 'cinecucapp',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());

// Variables Globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.success_msg = req.flash("error_msg");
    next();
  });

// Rutas

app.use(require('./routes/index'))
app.use(require('./routes/pelicula'))
app.use(require('./routes/users'))

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;