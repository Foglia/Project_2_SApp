 const express = require('express');
 const nftRouter = express.Router();
 const mongoose = require("mongoose");
//const { router } = require('../app');
const Nft = require('../models/Nft.model');
//const { route } = require('./auth.routes');

nftRouter.post('/nft', async (req, res, next) => {
  try {
    const allNfts = await Nft.modelName.find(); //all nfts
    res.render('gallery/nft', {allNfts})
  }
    catch(error) {
      console.log(error);
      next();
  }
}); 
module.exports = nftRouter;

