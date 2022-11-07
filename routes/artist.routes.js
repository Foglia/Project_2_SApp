/* const express = require('express');
const mongoose = require("mongoose");
const artistRouter = express.Router();

artistRouter.post('/artist', (req, res) => {
    Artist.create(req.body)
    .then( newArtist => {
      res.redirect('/artist/new-artist')
    } )
    .catch( err => console.log("Error while creating", err))
  })
    
  artistRouter.get('/artist', (req, res) => {
    Artist.find()
    .then( artistsFromDB => {
      res.render('artist/new-artist', { artistsFromDB });
    })
    .catch( err => console.log("Error while displaying", err))
  })

module.exports = artistRouter;
 */