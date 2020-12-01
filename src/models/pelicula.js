const mongoose = require('mongoose');
const {Schema} = mongoose;

const PeliculaSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    director: {type: String, required: true},
    genero: {type: String, required: true},
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Pelicula', PeliculaSchema)