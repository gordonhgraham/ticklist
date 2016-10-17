'use strict'

const express = require(`express`)
const session = require(`express-session`)
const path = require(`path`)
const logger = require(`morgan`)
const cookieParser = require(`cookie-parser`)
const bodyParser = require(`body-parser`)
// const passport = require(`./config/passport.js`)

const routes = require(`./routes/index`)
const users = require(`./routes/users`)
const attempts = require(`./routes/attempts`)

const app = express()

// view engine setup
app.set(`views`, path.join(__dirname, `views`))
app.set(`view engine`, `hbs`)

app.use(logger(`dev`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, `public`)))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, saveUninitialized: false,
}))
// app.use(passport.initialize())
// app.use(passport.session())

app.use(`/`, routes)
app.use(`/users`, users)
app.use(`/attempts`, attempts)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found`)

  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get(`env`) === `development`) {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render(`error`, {
      message: err.message,
      error: err,
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.render(`error`, {
    message: err.message,
    error: {},
  })
})

module.exports = app
