const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');
const mongoose = require("mongoose");
const Nft = require('../models/Nft.model');
const User = require('../models/User.model');
const isLoggedIn = require("../middleware/isLoggedIn");

//Create Nft
// get at /nfts
//render the nfts/new-nft form


router.get('/',  async (req, res, next) => {
  try {
    // const userId = req.params.id;
    const artist = await User.findOne(); //it will reaturn all the artists
    res.render("nfts/new-nft", artist) //render in the gallery (later)
} catch (error) {
    console.log(error);
    next(error);
}
})

// //img with cloudnary
// router.post('/nft', async (req, res, next) => {
//     const { title, description, value, author, imgUrl } = req.body;
//     try {
//       let imgUrl;
//       if (req.file) {
//         imgUrl = req.file.path;
//       } else {
//         imgUrl = 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG';
//       }
//       let createdNft = await Nft.create({title, description, value, author, imgUrl})
//       res.redirect('nfts/gallery');
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
//   });

router.post('/nft', async (req, res, next) => {
  try {
    const { title, description, value, author, ImgURL } = req.body;
    let createdNft = await Nft.create({title, description, value, author, ImgURL})
    res.redirect('nfts/gallery');
} catch(error) {
        console.log(error);
        next(error);
    }
});
   
//Read all Nfts
router.get('/gallery', async (req, res, next) => {
  try {
    const nftsFromDb = await Nft.find(); //all nfts
    res.render('nfts/nft-list', {nftsFromDb})
  }
    catch(error) {
      console.log(error);
      next();
  }
});
    
module.exports = router;

