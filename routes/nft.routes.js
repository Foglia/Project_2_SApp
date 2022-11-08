const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');
const mongoose = require("mongoose");
const Nft = require('../models/Nft.model');
const User = require('../models/User.model');
const isLoggedIn = require("../middleware/isLoggedIn");
const isArtist = require('../middleware/isArtist')

//Create Nft
// get at /nfts
//render the nfts/new-nft form
router.get('/create', isArtist,  async (req, res, next) => {
  try {
    // const userId = req.params.id;
    const artist = await User.findOne(); //it will reaturn all the artists
    res.render("nfts/new-nft", artist) //render in the gallery (later)
} catch (error) {
    console.log(error);
    next(error);
}
})
//img with cloudnary
router.post('/create', isArtist, fileUploader.single('image'), async (req, res, next) => {
    const author = req.session.currentUser._id;
    let { title, description, value, imgUrl } = req.body;
    try {
      let imgUrl;

      if (req.file) {
        imgUrl = req.file.path;
      } else {
        imgUrl = 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG';
      }

      let createdNft = await Nft.create({title, description, value, author, imgUrl})
      res.redirect('/nfts/gallery');
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
   
//Read all Nfts
router.get('/gallery', async (req, res, next) => {
  const userId = req.session.currentUser._id;
  try {
    const nftsFromDb = await Nft.find().populate("author"); //all nfts
    res.render('nfts/nft-list', { userId, nftsFromDb})
  }
    catch(error) {
      console.log(error);
      next();
  }
});

//edit nft
router.get('/edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const editNft = await Nft.findById(id);
    res.render('nfts/nft-edit', editNft)
  }
  catch(error) {
    console.log(error);
    next();
  }
}); 

router.post("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const {title, description, value, author, imgUrl} = req.body 

    const editNft = await Nft.findByIdAndUpdate(id, {title, description, value, author, imgUrl});
    res.redirect('/nfts/gallery');
} catch {
    console.log(error);
    next(error);
}
})

    
module.exports = router;

