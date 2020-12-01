const express = require('express');
const router = express.Router();

router.get('/pelicula/add', (req, res) => {
    res.render('pelicula/nueva-pelicula');
})

router.post('/pelicula/nueva-pelicula', (req, res) => {
    const { nombre, descripcion, director, genero }= req.body;
    const errors = [];
    if(!nombre) {
        errors.push({text: 'Escribe un nombre'});
    }
    if(!descripcion) {
        errors.push({text: 'Escribe una descripcion'});
    }
    if(!director) {
        errors.push({text: 'Escribe un director'});
    }
    if(!genero) {
        errors.push({text: 'Escribe el genero de la pelicula'})
    }
    if(errors.length > 0) {
        res.render('pelicula/nueva-pelicula', {
            errors,
            nombre,
            descripcion,
            director,
            genero
        });
    }else {
        res.send('ok')
    }
});

router.get('/peliculas', (req, res) => {
    res.send('Funciones del dia');
})

module.exports = router;