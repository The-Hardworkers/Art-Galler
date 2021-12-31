const mongoose =require ("mongoose") ;
 const express = require ("express");
 const app = express();
 const db = require("./db/index") ;
 const { CloudinaryStorage } = require("multer-storage-cloudinary");
 const Painting = require("./models/Painting") ;
 const cors = require("cors");
 const multer  = require('multer');
 var cloudinary = require('cloudinary').v2
 
 cloudinary.config({
    cloud_name: "ahmedfedzadazdadad",
    api_key: "429831596673864",
    api_secret: "vP39tyN9yOokNrSeCrr6wXk9kT4",
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
  });
  const upload = multer({ storage: storage });
 
 app.use(cors())
 app.use(express.json())
 const PORT = 8000 ;
 
 // create a new Painting :
app.post ("/api/paintings",(req,res) => {
    console.log("the new painting is :",req.body);
    const newPainting = new Painting(req.body);
    newPainting.save().then((painting) =>{
        res.status(201).send(painting)
    })
    .catch((error)=> {
        res.status(500).send(error);
    })
}) ;

//get the list of Paintings:
app.get ("/api/paintings",(req,res) => {
   Painting.find({})
    .then((paintings) =>{
        res.status(200).json(paintings);
        console.log(paintings)
    })
    .catch((error) => {
        res.status(500).send(error)
    })
})
 
// update painting
app.get('/api/painting/:id', function (req, res) {
        Painting.findOne({_id : req.params.id}).then((paintings) =>{
            res.status(200).json(paintings);
            console.log(paintings)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
    })



    app.put('/api/painting/:id', function (req, res) {
        Painting.findOneAndUpdate({_id : req.params.id}, {
            name: req.body.name,
            artist: req.body.artist,
            year: req.body.year,
           image:req.body.image,
        
        }).then((paintings) =>{
            res.status(200).json(paintings);
            console.log(paintings)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
    })

// Delete painting
 
app.delete('/api/paintings/:id', async function (req, res) {
    
    try {
        console.log(req.params.id)
        await Painting.deleteOne({_id:req.params.id});
        console.log("deleted")
        res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }
  })






//  // define mongoDB Models 
//  const Painting = mongoose.model('Painting', 
//  {   id : Number ,
//      name: String, 
//      artist : String,
//      image: String,
//      year : Number,
//  });
 
 
 
 app.listen(PORT, () => {
     console.log(`Started listening to requests on port ${PORT}`);
 })