const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Inicializaciones
const app = express();


// Settings
app.set('port', process.env.PORT || 7700);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'cinecucapp',
    resave: true,
    saveUninitialized: true,
}))


// Gobal Varibles

// Routes
app.use(require('./routes/index'))
app.use(require('./routes/peliculas'))
app.use(require('./routes/users'))

// Stactic Files
app.use(express.static(path.join(__dirname, 'public')))

// Server is Listenning
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
})