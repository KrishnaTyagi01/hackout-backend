const Rating = require('../models/rating');



exports.addRating = (req, res) => {
    const {url, upvotes, downvotes, neutral , comments} = req.body;
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
exports.getUpvotes = (req, res) => {
   
    const url = req.params.url;

    Rating.find({url})
    .select('upvotes')
    .exec((err, ratings) => {
        if(err || !ratings)
        {
            console.log("error: ",err)
            res.json({error:err})
        }
          res.json(ratings); 
})

}
exports.getDownvotes = (req, res) => {
   
    const url = req.params.url;

    Rating.find({url})
    .select('downvotes')
    .exec((err, ratings) => {
        if(err || !ratings)
        {
            console.log("error: ",err)
            res.json({error:err})
        }
          res.json(ratings); 
})

}
exports.getComments = (req, res) => {
   
    const url = req.params.url;

    Rating.find({url})
    .select('comments')
    .exec((err, ratings) => {
        if(err || !ratings)
        {
            console.log("error: ",err)
            res.json({error:err})
        }
          res.json(ratings); 
})

}