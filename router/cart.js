const express = require('express');
const { fullCart }  = require('../controller/Cart');

const router = express.Router();

router.get('/cart', fullCart);

module.exports = router;