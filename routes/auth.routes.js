const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default - 10 rounds)
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");



// GET /auth/signup
router.get("/signup", isLoggedOut, (req, res) => {
  res.render("auth/signup");
});

// POST /auth/signup
router.post("/signup", isLoggedOut, (req, res) => {
  const { username, email, password, accountType } = req.body;

  // Check that username, email, and password are provided
  if (username === "" || email === "" || password === "") {
    res.status(400).render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });

    return;
  }

  if (password.length < 6) {
    res.status(400).render("auth/signup", {
      errorMessage: "Your password needs to be at least 6 characters long.",
    });

    return;
  }

  //   ! This regular expression checks password for special characters and minimum length
  /*
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(400)
      .render("auth/signup", {
        errorMessage: "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter."
    });
    return;
  }
  */

  // Create a new user - start by hashing the password
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      // Create a user and save it in the database
      return User.create({ username, email, password: hashedPassword, accountType });
    })
    .then((user) => {
      res.redirect(`/auth/user/${user._id}`)
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage:
            "Username and email need to be unique. Provide a valid username or email.",
        });
      } else {
        next(error);
      }
    });
});

// GET /auth/login
// Only checks if the user is in the session
router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

// POST /auth/login // U can choose how to log in the user (ex. delete the username)
router.post("/login", isLoggedOut, (req, res, next) => {
  const { username, email, password } = req.body;

  // Check that username, email, and password are provided
  if (username === "" || email === "" || password === "") {
    res.status(400).render("auth/login", {
      errorMessage:
        "All fields are mandatory. Please provide username, email and password.",
    });

    return;
  }

  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 6) {
    return res.status(400).render("auth/login", {
      errorMessage: "Your password needs to be at least 6 characters long.",
    });
  }

  // Search the database for a user with the email submitted in the form
  User.findOne({ email })
    .then((user) => {
      // If the user isn't found, send an error message that user provided wrong credentials
      if (!user) {
        res
          .status(400)
          .render("auth/login", { errorMessage: "Wrong credentials." });
        return;
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt
        .compare(password, user.password)
        .then((isSamePassword) => {
          if (!isSamePassword) {
            res
              .status(400)
              .render("auth/login", { errorMessage: "Wrong credentials." });
            return;
          }

          // Add the user object to the session object
          req.session.currentUser = user.toObject();
          // Remove the password field
          delete req.session.currentUser.password;

          //app.locals acts like a session but for the views
          req.app.locals.user = user.toObject()
          delete req.app.locals.user.password;


          res.redirect("/");
        })
        .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
    })
    .catch((err) => next(err));
});

// GET /auth/logout
router.get("/logout", isLoggedIn, (req, res) => {
  req.app.locals.user = false
  req.session.destroy((err) => {
    if (err) {
      res.status(500).render("auth/logout", { errorMessage: err.message });
      return;
    }

    res.redirect("/");
  });
});

//Get /artist

router.get("/user/:userId", async (req, res, next) => {
  const {userId} = req.params
  const currentUser = req.session.user
  try {
    const user = await User.findById(userId)
if (user.accountType === "Artist") {
  res.render("artist/new-artist", user)
} else {
  res.render("collector/new-collector", user)
}
    
  } catch (error) {
    console.log(error);
        next(error)
  }
});


router.post("/artist/:id", async (req, res, next) => {
  try {
    const {firstName, lastName, bio} = req.body;
    const id = req.params.id
    const updatedUser = await User.findByIdAndUpdate(id, {firstName, lastName, bio});
    res.redirect("/auth/login")
  } catch(error) {
    console.log(error);
        next(error)
  }
});

//Get artist profile

router.get("/profile/:userId", async (req, res, next) => {
  const {userId} = req.params
  const currentUser = req.session.currentUser
  try {
    const user = await User.findById(userId).populate("uploads")

if (user.accountType === "Artist") {
  res.render("artist/artist-profile", {user, currentUser, userId})
} else {
  res.render("collector/collector-profile", {user, currentUser, userId})
}
    
  } catch (error) {
    console.log(error);
        next(error)
  }
});

//Edit artist profile

router.get('/edit/:userId', async (req, res, next) => {
  try {
    const  id  = req.params.userId
    const editArtist = await User.findById(id);

    res.render('artist/edit', {editArtist})
  }
  catch(error) {
    console.log(error);
    next();
  }
}); 

router.post("/edit/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params
    const {username, firstName, lastName} = req.body 

    const editUser = await User.findByIdAndUpdate(userId, {username, firstName, lastName});
    res.redirect(`/auth/profile/${userId}`);
} catch (error) {
    console.log(error);
    next(error);
}
});




//Get collector

router.get("/user/:userId", async (req, res, next) => {
  const {userId} = req.params
  const currentUser = req.session.user
  try {
    const user = await User.findById(userId)
if (user.accountType === "Collector") {
  res.render("collector/new-collector", user)
} else {
  res.render("artist/new-artist", user)
}
    
  } catch (error) {
    console.log(error);
        next(error)
  }
});

router.post("/collector/:id", async (req, res, next) => {
  try {
    const {firstName, lastName} = req.body;
    const id = req.params.id
    const updatedUser = await User.findByIdAndUpdate(id, {firstName, lastName});
    res.redirect("/auth/login")    
  } catch(error) {
    console.log(error);
        next(error)
  }
});








module.exports = router;
