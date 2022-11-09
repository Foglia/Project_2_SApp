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

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
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
    accountType: {
    type: String,
    required: true,
    enum: ["Artist", "Collector"]
    },

    
    uploads: [{type: Schema.Types.ObjectId, ref:"Nft"}],
    favorites: [{type: Schema.Types.ObjectId, ref:"Nft"}],
    bought: [{type: Schema.Types.ObjectId, ref:"Nft"}],
  },
  {
    //necesitamos poner artist/colector,
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
