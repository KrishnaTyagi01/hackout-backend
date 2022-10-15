const express = require('express');
const {addRating, getUpvotes, getDownvotes, getComments } = require('../controllers/rating');
const router = express.Router();

router.post('/addrating', addRating);
router.get('/getupvotes/:url', getUpvotes);
router.get('/getdownvotes/:url', getDownvotes);
router.get('/getcomments/:url', getComments);


module.exports = router;