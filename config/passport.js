'use strict'

require(`dotenv`).load()

// const app = require(`../app.js`)
// const LocalStrategy = require(`passport-local`).Strategy
const passport = require(`passport`)
const FacebookStrategy = require(`passport-facebook`).Strategy

// const knex = require(`../knex.js`)

// const knex = require()

// passport.use(new LocalStrategy(
//   (username, password, done) => {
//     // use knex instaed
//     User.findOne({ username, }, (err, user) => {
//       if (err) { return done(err) }
//       if (!user) {
//         return done(null, false, { message: `Incorrect username.`, })
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: `Incorrect password.`, })
//       }
//
//       return done(null, user)
//     })
//   }
// ))

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `http://localhost:3000/auth/facebook/callback`,
  profileFields: [`id`, `email`, `first_name`, `last_name`]
},
  (accessToken, refreshToken, profile, cb) => {
    console.log(`accessToken`, accessToken)
    console.log(`refreshToken`, refreshToken)
    console.log(`profile`, profile)

    // User.findOrCreate({ facebookId: profile.id }, (err, user) => {
    //   return cb(err, user)
    // })
  }
))

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((obj, done) => {
  done(null, obj)
})

module.exports = passport
