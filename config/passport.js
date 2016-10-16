'use strict'

const passport = require(`passport`)
const LocalStrategy = require(`passport-local`).Strategy

// const knex = require()

passport.use(new LocalStrategy(
  (username, password, done) => {
    // use knex instaed
    User.findOne({ username, }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: `Incorrect username.`, })
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: `Incorrect password.`, })
      }

      return done(null, user)
    })
  }
))
