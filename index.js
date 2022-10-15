const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 8000;
const {MONGOURI} = require('./keys');
const ratingRoutes = require('./routes/rating');

const app = express();
app.use(cors())
app.use(express.json()); // body-parser

app.use('/api', ratingRoutes);


mongoose.connect(process.env.MONGODB_URI || MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo');
})

mongoose.connection.on('error', ()=>{
    console.log('MongoDB connection err');
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})