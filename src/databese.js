const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cinecuc-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

.then(db => console.log('BD conectada'))
.catch(err => console.error(err));