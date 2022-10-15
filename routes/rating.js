const express = require('express');
const {addRating, getRatings } = require('../controllers/rating');
const router = express.Router();

router.post('/addrating', addRating);
router.get('/getrating/:url', getRatings);


module.exports = router;