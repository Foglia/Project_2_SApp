const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Nft = require('../models/Nft.model');
const User = require('../models/User.model');
const isLoggedIn = require("../middleware/isLoggedIn");

//Create Nft
router.get('/nfts',  async (req, res, next) => {
  try {
    // const userId = req.params.id;
    const artist = await User.findOne(); //it will reaturn all the artists
    res.render("nfts/new-nft", artist) //render in the gallery (later)
} catch (error) {
    console.log(error);
    next(error);
}
})

router.post('/nfts', async (req, res, next) => {
  try {
    const { title, description, value, author, ImgURL } = req.body;
    let createdNft = await Nft.create({title, description, value, author, ImgURL})
    res.redirect('/nfts-list');
} catch(error) {
        console.log(error);
        next(error);
    }
});
   
// //Read all Nfts
// router.post('/nfts', async (req, res, next) => {
//   try {
//     const nftsFromDB = await Nft.find(); //all nfts
//     res.render('nfts/nfts-list', {nftsFromDB})
//   }
//     catch(error) {
//       console.log(error);
//       next();
//   }
// });
    
module.exports = router;

