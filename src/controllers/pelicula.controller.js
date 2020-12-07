const peliculaCtrl = {};

const Pelicula = require('../models/pelicula')

peliculaCtrl.renderPeliculaForm = (req, res) => {
    res.render('pelicula/nueva-pelicula');
}

peliculaCtrl.crearNuevaPelicula = async (req, res) => {
    const { nombre, descripcion, director, genero }= req.body;
    const NewPelicula =  new Pelicula({nombre, descripcion, director, genero});
    await NewPelicula.save();
    req.flash('success_msg', 'Pelicula guardada con Exito')
    res.redirect('/pelicula');
}

peliculaCtrl.renderPelicula = async (req, res) => {
    const pelicula = await Pelicula.find();
    res.render('pelicula/all-peliculas', { pelicula })
}

peliculaCtrl.renderEditarPelicula = async (req, res) => {
   const pelicula = await Pelicula.findById(req.params.id)
   res.render('pelicula/edit-pelicula', { pelicula })
}

peliculaCtrl.updatePelicula = async (req, res) => {
    const { nombre, descripcion, director, genero } = req.body;
    await Pelicula.findByIdAndUpdate(req.params.id, {nombre, descripcion, director, genero})
    req.flash('success_msg', 'Pelicula actulizada con Exito')
    res.redirect('/pelicula')
}

peliculaCtrl.deletePelicula = async (req, res) => {
    await Pelicula.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Pelicula Eliminada con Exito')
    res.redirect('/pelicula')

}

module.exports = peliculaCtrl;