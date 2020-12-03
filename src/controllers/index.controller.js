const indexCtrl = {}

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
}

indexCtrl.renderCartelera = (req, res) => {
    res.render('cartelera')
}

indexCtrl.renderEstrenos = (req, res) => {
    res.render('estrenos')
}

module.exports = indexCtrl