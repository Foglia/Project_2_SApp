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
<<<<<<< HEAD
    author: {
      type: { type: Schema.Types.ObjectId, ref: 'User' }
      }, // can be aditional
=======
    imageUrl: {
      type: String,
      required: true,
    }
>>>>>>> 1039c8cd3ff463367b307d83a78ed15c6b41c658
  },
     ImgURL {
      type: String,
      required: true,
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