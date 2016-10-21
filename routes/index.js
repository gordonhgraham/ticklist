'use strict'

const express = require(`express`)
const passport = require(`../config/passport`)
const router = express.Router()

// router.post(`/login/facebook`,
//   passport.authenticate(`facebook`, { scope: [`email`] }),
//   (req, res, next) => {
//     // custom callback
//   }
// )

/* GET landing page. */
router.get(`/`, (req, res, next) => {
  res.render(`index`, { title: `index`, })
})

/* POST new user signup */
// router.post(`/signup`, (req, res, next) => {
//   res.render(`index`, { title: `signup`, })
// })

/* POST user login */
// router.post(`/login/`, (req, res, next) => {
//   res.render(`index`, { title: `login`, })
// })

/* GET user logout. */
router.get(`/logout`, (req, res, next) => {
  req.logout()
  console.log(`req.session`, req.session)
  console.log(`req.user`, req.user)
  res.redirect(`/`)
})

module.exports = router
