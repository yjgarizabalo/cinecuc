const peliculaCtrl = {};

const Pelicula = require('../models/pelicula')

peliculaCtrl.renderPeliculaForm = (req, res) => {
    res.render('pelicula/nueva-pelicula');
}

peliculaCtrl.crearNuevaPelicula = async (req, res) => {
    const { nombre, descripcion, director, genero }= req.body;
    const NewPelicula =  new Pelicula({nombre, descripcion, director, genero});
    await NewPelicula.save();
    // const errors = [];
    res.redirect('/pelicula');
}

peliculaCtrl.renderPelicula = async (req, res) => {
    const pelicula = await Pelicula.find();
    res.render('pelicula/all-peliculas', { pelicula })
}

peliculaCtrl.renderEditarPelicula = (req, res) => {
    res.send('editar pelicula');
}

peliculaCtrl.updatePelicula = (req, res) => {
    res.send('Actulizar pelicula')
}

peliculaCtrl.deletePelicula = (req, res) => {
    res.send('Eliminar pelicula')
}

module.exports = peliculaCtrl;