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
    author: String,
    description: String,
    value: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Nft = model("Nft", nftSchema);
module.exports = Nft;