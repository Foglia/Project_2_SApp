// Data must be called as to seed the DB with NFT properties
// Remeber CRUD must be ordered: Create, Read, Update and Delete

// const mongoose = require('mongoose');
// const Book = require('../models/Nft.model')

// const MONGO_URI =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Project_2_SApp";

// const nfts = [
//         {
//           title: "Nyan Cat",
//           description:
//             "Nyan Cat is the name of an animation uploaded on April 2 2011, and became a viral internet sensation. The design of Nyan Cat was inspired by my cat Marty, who crossed the Rainbow Bridge but lives on in spirit.  I am the original artist behind the iconic GIF and have remastered the image for its 10 year anniversary. Owning this piece grants the following stats: Charisma +10 Luck +10 Happiness +15 1400x1400 - 12 Frames ",
//           author: "Chris Torres",
//           value: 0.4221, //type 0.4221 WETH must see how to do tthis
//         },
//         {
//           title: "Automatism #137",
//           description:
//             'Automatism is inspired by the practice of artists where they are given a writing implement and a blank surface, and they go freestyle, almost mindlessly filling up the space with whatever comes to their minds and out of their hands. Ive often wondered where a machines mind and "hand" would wander given the same opportunity. This project explores the age-old computer art phenomenon of inviting the viewer to actively participate in the interpretation of the visual output. The way "Sharp-E" draws the strokes is through a mix of various movements — irregular curves, straight lines, sudden changes in direction — in a classic random walk algorithm, while avoiding overlaps with previously drawn strokes. There are no pre-programmed forms per se, but nevertheless it can be common for the viewer to perceive images, symbols, meaning in the generated output. So where does your mind wander? What forms, symbols, and meaning do you see?'
//           author: "Yazid",
//           value: 4.4, //ETH
//         },
//       ];

// mongoose
//     .connect(MONGO_URI)
//     .then(x => {
//         console.log(`Connected to Mongo database: "${x.connections[0].name}"`)

//         return Nft.create(books);
//     })
//     .then(nftsFromDB => {
//         console.log(`Created ${nftsFromDB} books`);
//         return mongoose.connection.close();
//     })

//     .then(() => {
//         console.log('DB Conection closed!');
//     })
//     .catch(err => {
//         console.log(`An error occured while creating NFTs from DB: ${err}`)
//     });