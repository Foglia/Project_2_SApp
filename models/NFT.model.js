const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const nftSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const NFT = model("nft", nftSchema);

module.exports = NFT;