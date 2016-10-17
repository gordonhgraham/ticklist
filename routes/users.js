'use strict'

const express = require(`express`)
const router = express.Router()
const knex = require(`../knex.js`)

router.get(`/`, (req, res, next) => {
  knex(`ticks`)
    .where(`user_id`, 1)
    .then(data => {
      res.render(`user_home`, { layout: `user_layout.hbs`, data, })
    })
})

/* GET list ticks from users/userId. */
router.get(`/:id`, (req, res, next) => {
  res.render(`index`, { title: `users`, })
})

/* POST create new tick at /users/ticks. */
router.post(`/ticks`, (req, res, next) => {
  const newTick = req.body

  knex(`ticks`)
    .insert({
      user_id: 1,
      name: newTick.name,
      area: newTick.area,
      grade: newTick.grade,
      style: newTick.style,
    })
    .then(() => {
      knex(`ticks`)
        .where(`user_id`, 1)
        .then(data => {
          res.redirect(`/`)
        })
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
