const { randomBytes } = require('crypto');
const express = require('express');
const router = express.Router();

const { renderPeliculaForm, crearNuevaPelicula, renderPelicula } = require('../controllers/pelicula.controller')

// Añadir una pelicula
router.get('/pelicula/add', renderPeliculaForm)

// Crear una nueva pelicula
router.post('/pelicula/nueva-pelicula', crearNuevaPelicula)

// Ver todas las peliculas
router.get('/pelicula/all-peliculas', renderPelicula)

module.exports = router;

// const Pelicula = require('../models/pelicula')

// router.post  ('/pelicula/nueva-pelicula', async (req, res) => {
//     const { nombre, descripcion, director, genero }= req.body;
//     const errors = [];
//     if(!nombre) {
//         errors.push({text: 'Escribe un nombre'});
//     }
//     if(!descripcion) {
//         errors.push({text: 'Escribe una descripcion'});
//     }
//     if(!director) {
//         errors.push({text: 'Escribe un director'});
//     }
//     if(!genero) {
//         errors.push({text: 'Escribe el genero de la pelicula'})
//     }
//     if(errors.length > 0) {
//         res.render('pelicula/nueva-pelicula', {
//             errors,
//             nombre,
//             descripcion,
//             director,
//             genero,
//         });
//     }else {
//        const NewPelicula = new Pelicula({nombre, descripcion, director, genero});
//        await NewPelicula.save();
//        res.redirect('/pelicula')
//     }
// });

// router.get('/pelicula', async (req, res) => {
//    const pelicula = await Pelicula.find();
//    res.render('pelicula/all-peliculas', { pelicula })
// })