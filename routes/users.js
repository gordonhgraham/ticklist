'use strict'

const express = require(`express`)
const router = express.Router()
const knex = require(`../knex.js`)

/* GET list ticks from users/userId. */
router.get(`/`, (req, res, next) => {
  const userId = req.user[0].fb_id

  knex(`ticks`)
    .where(`user_fb_id`, userId)
    .orderBy(`area`)
      .then(data => {
        if (data.length > 0) {
          res.render(`user_home`, { layout: `user_layout.hbs`, data })
        } else {
          const data = { name: `Add a climb with the button in the top right.` }

          res.render(`user_home`, { layout: `user_layout.hbs`, data })
        }
      })
})

/* POST create new tick at /users/ticks. */
router.post(`/ticks`, (req, res, next) => {
  const userId = req.user[0].fb_id
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

/* update tick */
router.post(`/edit/ticks/:id`, (req, res, next) => {
  const userId = req.user[0].fb_id
  const tickId = req.params.id
  const editTick = req.body

  knex(`ticks`)
    .where(`id`, tickId)
    .update({
      user_fb_id: userId,
      name: editTick.name,
      area: editTick.area,
      grade: editTick.grade,
      style: editTick.style
    })
    .then(() => {
      res.redirect(`/users`)
    })
    .catch(err => { if (err) { return next(err) } })
})

/* DELETE delete tick at /users/delete/ticks/:id */
router.get(`/delete/ticks/:id`, (req, res, next) => {
  knex(`ticks`)
    .where(`id`, req.params.id)
    .del()
    .then(() => {
      res.redirect(`/users`)
    })
    .catch(err => { if (err) { return next(err) } })
})

module.exports = router
