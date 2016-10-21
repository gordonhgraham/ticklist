'use strict'

const express = require(`express`)
const router = express.Router()
const knex = require(`../knex.js`)

/* GET--read tick and list attempts. */
router.get(`/ticks/:id`, (req, res, next) => {
  const tickId = req.params.id
  let attempts

  knex(`attempts`)
    .where(`tick_id`, tickId)
    .then(data => {
      attempts = data
      knex(`ticks`)
        .where(`id`, tickId)
        .first()
        .then(tick => {
          res.render(`attempts`, { layout: `user_layout`, attempts, tick, })
        })
    })
})

/* POST--create attempt. */
router.post(`/ticks/:id`, (req, res, next) => {
  const tickId = req.params.id
  const newAttempt = req.body

  knex(`attempts`)
    .insert({
      tick_id: tickId,
      send_type: newAttempt.send_type,
      partner: newAttempt.partner,
      notes: newAttempt.notes,
    })
    .then(() => {
      res.redirect(`/attempts/ticks/${tickId}`)
    })
    .catch(err => { if (err) { return next(err) } })
})

/* DELETE attempt. */
router.get(`/delete/:id`, (req, res, next) => {
  console.log(`id`, req.params.id)
  res.redirect(`http://google.com`)
})

// /* PUT update tick. */
// router.put(`/delete/:id`, (req, res, next) => {
//   res.render(`index`, { title: `update tick`, })
// })
//
// /* DELETE tick. */
// router.get(`/ticks/:id`, (req, res, next) => {
//   res.render(`index`, { title: `attempts`, })
// })

module.exports = router
