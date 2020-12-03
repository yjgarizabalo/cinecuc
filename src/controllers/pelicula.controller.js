const peliculaCtrl = {};

peliculaCtrl.renderPeliculaForm = (req, res) => {
    res.render('pelicula/nueva-pelicula');
}

peliculaCtrl.crearNuevaPelicula = (req, res) => {
    res.send('nueva pelicula');
}

peliculaCtrl.renderPelicula = (req, res) => {
    res.send('todas pelicula');
}


module.exports = peliculaCtrl;