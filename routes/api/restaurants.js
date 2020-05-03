const express = require('express')
const router = express.Router();
const restaurantCtlr = require('../../controllers/restaurants')

router.get('/restaurants', restaurantCtlr.index)
router.post('/create-restaurant', restaurantCtlr.create)

module.exports = router;
