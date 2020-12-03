require('dotenv').config();

const app = require('./server');
require('./databese')

// Server is Listenning
app.listen(app.get('port'), () =>{
    console.log('[cinecuc] Server on port', app.get('port'))
})