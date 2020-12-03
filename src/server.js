// const express = require('express');
// const methodOverride = require('method-override');
// const session = require('express-session');

const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const express = require('express');
const path = require('path');
const morgan = require('morgan');


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
app.use(express.urlencoded({extended: false}));
// app.use(morgan('morgan'))
// app.use(methodOverride('_method'));
// app.use(session({
//     secret: 'cinecucapp',
//     resave: true,
//     saveUninitialized: true,
// }))


// Variables Globales

// Rutas

app.use(require('./routes/index'))
app.use(require('./routes/pelicula'))
// app.use(require('./routes/users'))

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;