const Rating = require('../models/rating');



exports.addRating = (req, res) => {
    const {url, upvotes, downvotes, neutral , comments} = req.body;
    console.log("reached here");

    const newrating = new Rating({url, upvotes, downvotes, neutral , comments});

    newrating.save()
    .then(result => {
        console.log("ratings", result)
        res.json({rating: result})
    })
    .catch(err =>  {
        console.log("err", err)
        res.json({ error: err })
    })


}
exports.getRatings = (req, res) => {
    console.log("reached here 2");
    const url = req.params.url;

    Rating.find({url})
    .exec((err, ratings) => {
        if(err || !ratings)
        {
            console.log("error: ",err)
            res.json({error:err})
        }
          res.json(ratings); 
})

}