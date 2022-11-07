const { Schema, model } = require("mongoose");
// TODO: Please make sure you edit the User model to whatever makes sense in this case

const artistSchema = new Schema(
    {
    artist: {type: Schema.Types.ObjectId, ref:"Artist"},
    firstName: String,
    lastName: String,
    Country: String,
    artworks: {
    title: String,
    Year: Number,
    },
   },
);

const Artist = model("Artist", artistSchema);
module.exports = Artist;

//Timestamps missing