const express = require('express');
const nftRouter = express.Router();
const mongoose = require("mongoose");
const Nft = require('../models/Nft.model');

nftRouter.post('/nft', (req, res, next) => {
    nftRouter.create(req.body)
    .then( newNft => {
      res.redirect('/gallery/new_nft')
    } )
    .catch( err => console.log("Error while creating", err))
  })
    
  nftRouter.get('/nft', (req, res) => {
    Nft.find()
    .then( nftFromDB => {
      res.render('/gallery/new_nft', { nftFromDB });
    })
    .catch( err => console.log("Error while displaying", err))
  })

module.exports = nftRouter;
