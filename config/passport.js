'use strict'

/* eslint-disable camelcase, max-params */

require(`dotenv`).config()

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

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/facebook/callback`,
  profileFields: [`id`, `email`, `first_name`, `last_name`]
},
(accessToken, refreshToken, profile, cb) => {
  console.log(`1--facebook Strategy callback init`)
  knex(`users`)
    .where(`fb_id`, profile.id)
    .first()
    .then(data => {
      if (data) {
        // if user exists
        console.log(`2--existing user--`, data)

        cb(null, data)
      } else {
        // if user doesn't exist insert user
        knex(`users`)
          .insert({
            fb_id: profile.id,
            email: profile.emails[0].value,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            token: accessToken
          }, `*`)
          .then(user => {
            console.log(`3--new user--`, user)

            return cb(null, user)
          })
      }
    })
    .catch(err => { if (err) { return err } })
}))

module.exports = passport
