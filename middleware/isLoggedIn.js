<<<<<<< HEAD
=======
const User = require("../models/User.model"); 

>>>>>>> 1039c8cd3ff463367b307d83a78ed15c6b41c658
module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.currentUser) {
    return res.redirect("/auth/login");
  }

  next();
};
<<<<<<< HEAD
=======



>>>>>>> 1039c8cd3ff463367b307d83a78ed15c6b41c658
