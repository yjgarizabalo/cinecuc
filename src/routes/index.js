const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Inicio')
});

router.get('/carteleras', (req, res) => {
    res.send('Carteleras')
})

module.exports = router;