module.exports = (req, res, next) => {
  // checks if the user is collector 
  if (req.session.currentUser.accountType === "Collector") {
    return res.redirect("/");
  }

  //If it's an artist, goes to next
  next();
};
