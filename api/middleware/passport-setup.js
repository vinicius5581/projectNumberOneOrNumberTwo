const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../../config/keys");
const User = require("../models/users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      User.findOne({
        googleId: profile.id
      }).then(currentUser => {
        if (currentUser) {
          // already have the user
          console.log("User is: " + currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          const user = new User({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url
          });

          user.save().then(newUser => {
            console.log("New user created: " + newUser);
            done(null, newUser);
          });
        }
      });
    }
  )
);
