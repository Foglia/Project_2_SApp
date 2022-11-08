module.exports = (req, res, next) => {
  // checks if the user is Artist
  if (req.session.currentUser.accountType === "Artist") {
    return res.redirect("/");
  }

  //If it's a collector, goes to next
  next();
};
