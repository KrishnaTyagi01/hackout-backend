const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const RatingSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true,
    },
    upvotes: {
        type: Number,
        default:0
    },
    downvotes: {
        type: Number,
        default:0
    },
    comments:[{
        type:String
    }]
    
}, {timestamps: true})

module.exports = mongoose.model("Rating", RatingSchema);