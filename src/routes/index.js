const express = require('express');
const router = express.Router();

const { renderIndex, renderCartelera, renderEstrenos } = require('../controllers/index.controller')

router.get('/',  renderIndex);

router.get('/cartelera', renderCartelera)

router.get('/estrenos', renderEstrenos)

module.exports = router;