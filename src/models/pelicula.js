// const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const PeliculaSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    director: {type: String, required: true},
    genero: {type: String, required: true},
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
})

module.exports = model('Pelicula', PeliculaSchema)