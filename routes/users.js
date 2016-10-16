'use strict'

const express = require(`express`)
const router = express.Router()

// router.get(`/`, (req, res, next) => {
//   res.render(`user_home`, { layout: `user_layout.hbs`, title: `User Home`, })
// })

/* GET list ticks from users/userId. */
router.get(`/:id`, (req, res, next) => {
  res.render(`index`, { title: `users`, })
})

/* POST create new tick at /users/ticks. */
router.post(`/ticks`, (req, res, next) => {
  res.render(`index`, { title: `/users/ticks`, })
})

/* PUT update user at /users/userId. */
router.put(`/:id`, (req, res, next) => {
  res.render(`index`, { title: `users/:id`, })
})

/* DELETE user at /users/userId. */
router.delete(`/:id`, (req, res, next) => {
  res.render(`index`, { title: `users/:id`, })
})

module.exports = router
