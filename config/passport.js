'use strict'

/* eslint-disable camelcase */

require(`dotenv`).load()

// const app = require(`../app.js`)
// const LocalStrategy = require(`passport-local`).Strategy
const passport = require(`passport`)
const FacebookStrategy = require(`passport-facebook`).Strategy
const knex = require(`../knex.js`)

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
    knex(`users`)
      .where(`fb_id`, profile.id)
      .first()
      .then(data => {
        // if user exists, redirect to user homepage
        if (data) {
          // update user
        } else {
          // if user doesn't exist insert user
          knex(`users`)
            .insert({
              fb_id: profile.id,
              email: profile.emails[0].value,
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              token: accessToken
            })
            .then((err, user) => {
              console.log(`user--`, user)
              return cb(err, user)
            })
        }
      })

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
