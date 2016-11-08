'use strict'

const express = require(`express`)
const passport = require(`../config/passport`)
const router = express.Router()

/* GET landing page. */
router.get(`/`, (req, res, next) => {
  res.render(`index`, { title: `index`, })
})

/* GET user logout. */
router.get(`/logout`, (req, res, next) => {
  req.logout()
  console.log(`req.session`, req.session)
  console.log(`req.user`, req.user)
  res.redirect(`/`)
})

module.exports = router
