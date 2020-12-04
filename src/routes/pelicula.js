const express = require('express');
const router = express.Router();

// Controllers
const { renderPeliculaForm, 
        crearNuevaPelicula, 
        renderPelicula, 
        renderEditarPelicula, 
        updatePelicula, 
        deletePelicula,
    } = require('../controllers/pelicula.controller')

// Añadir una pelicula
router.get('/pelicula/add', renderPeliculaForm)

// Crear una nueva pelicula
router.post('/pelicula/nueva-pelicula', crearNuevaPelicula)

// Ver todas las peliculas
router.get('/pelicula', renderPelicula)

// Editar peliculas
router.get('/pelicula/edit/:id', renderEditarPelicula)

// Actulizar pelicula
router.put('/pelicula/edit-pelicula/:id', updatePelicula)

//Eliminar pelicula
router.delete('/pelicula/delete/:id', deletePelicula)

module.exports = router;

// router.post  ('/pelicula/nueva-pelicula', async (req, res) => {
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

//        res.redirect('/pelicula')
//     }
// });