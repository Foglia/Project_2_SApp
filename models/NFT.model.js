const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const nftSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    description: {
    type: String,
   },
    value: {
      type: Number,
      required: true,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId, ref: 'User' 
    }, // can be aditional
     imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

// favorites: [{type: Schema.Types.ObjectId, ref:"Nft"}],
// bought: [{type: Schema.Types.ObjectId, ref:"Nft"}],
// type: String,

const Nft = model("Nft", nftSchema);
module.exports = Nft;