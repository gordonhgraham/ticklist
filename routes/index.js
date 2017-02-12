'use strict'

const express = require(`express`)
const router = express.Router()

/* GET landing page. */
router.get(`/`, (req, res) => {
  res.render(`index`, { title: `index` })
})

/* GET user logout. */
router.get(`/logout`, (req, res) => {
  req.logout()
  res.redirect(`/`)
})

module.exports = router
