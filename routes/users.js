'use strict'

const express = require(`express`)
const router = express.Router()
const knex = require(`../knex.js`)


/* GET list ticks from users/userId. */
router.get(`/`, (req, res, next) => {
  const userId = req.session.passport.user.fb_id

  knex(`ticks`)
  .where(`user_fb_id`, userId)
    .then(data => {
      // console.log(data)
      res.render(`user_home`, { layout: `user_layout.hbs`, data })
    })
})

/* POST create new tick at /users/ticks. */
router.post(`/ticks`, (req, res, next) => {
  const userId = req.session.passport.user.fb_id
  const newTick = req.body

  knex(`ticks`)
    .insert({
      user_fb_id: userId,
      name: newTick.name,
      area: newTick.area,
      grade: newTick.grade,
      style: newTick.style
    })
    .then(() => {
      res.redirect(`/users`)
    })
    .catch(err => {
      if (err) { return next(err) }
    })
})

// /* PUT update user at /users/userId. */
// router.put(`/:id`, (req, res, next) => {
//   res.render(`index`, { title: `users/:id`, })
// })
//
// /* DELETE user at /users/userId. */
// router.delete(`/:id`, (req, res, next) => {
//   res.render(`index`, { title: `users/:id`, })
// })

module.exports = router
