const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/carteleras', (req, res) => {
    res.render('carteleras')
})

module.exports = router;