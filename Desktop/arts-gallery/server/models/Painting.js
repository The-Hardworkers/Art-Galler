const mongoose =require ("mongoose") ;

// define mongoDB Models 
const Painting = mongoose.model('Painting', 
{   id : Number ,
    name: String, 
    artist : String,
    image: String,
    year : Number,
});

module.exports = Painting; 