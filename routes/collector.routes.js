const express = require('express');
const collectorRouter = express.Router();
const mongoose = require("mongoose");
const Collector = require('../models/Collector.model');

collectorRouter.post('/collector', (req, res) => {
    collectorRouter.create(req.body)
    .then( newCollector => {
      res.redirect('/collector/new-collector')
    } )
    .catch( err => console.log("Error while creating", err))
  })
    
  collectorRouter.get('/collector', (req, res) => {
    Collector.find()
    .then( collectorFromDB => {
      res.render('collector/new-collector', { collectorFromDB });
    })
    .catch( err => console.log("Error while displaying", err))
  })

module.exports = collectorRouter;
