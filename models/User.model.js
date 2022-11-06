const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    select: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Artist' || 'Collector' }]
    },
    }, 

    {
    uploads: [String],
    favorites: [{type: Schema.Types.ObjectId, ref:"Nft"}],
    bought: [{type: Schema.Types.ObjectId, ref:"Nft"}],
    type: String,
    required: true,
    },
  {
    //necesitamos poner artist/colector,
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
