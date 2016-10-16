'use strict'

const express = require(`express`)
const passport = require(`../config/passport`)
const router = express.Router()

router.get('/login/facebook',
  passport.authenticate('facebook'));


/* GET landing page. */
router.get(`/`, (req, res, next) => {
  res.render(`index`, { title: `index`, })
})

/* POST new user signup */
router.post(`/signup`, (req, res, next) => {
  res.render(`index`, { title: `signup`, })
})

/* POST user login */
router.post(`/login`, (req, res, next) => {
  res.render(`index`, { title: `login`, })
})

/* GET user logout. */
router.get(`/logout`, (req, res, next) => {
  res.render(`index`, { title: `logout`, })
})

module.exports = router
