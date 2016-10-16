'use strict'

const express = require(`express`)
const router = express.Router()


// router.get(`/`, (req, res, next) => {
//   res.render(`attempts`, { layout: `user_layout`, title: `attempts`})
// })

/* GET read tick and list attempts at /attempts/ticks/tickId. */
router.get(`/ticks/:id`, (req, res, next) => {
  res.render(`index`, { title: `/users/ticks/:id`, })
})

/* POST create attempt. */
router.post(`/`, (req, res, next) => {
  res.render(`index`, { title: `post: attempts`, })
})

/* DELETE attempt. */
router.delete(`/:id`, (req, res, next) => {
  res.render(`index`, { title: `delete: attempts`, })
})

/* PUT update tick. */
router.put(`/ticks/:id`, (req, res, next) => {
  res.render(`index`, { title: `update tick`, })
})

/* DELETE tick. */
router.get(`/ticks/:id`, (req, res, next) => {
  res.render(`index`, { title: `attempts`, })
})

module.exports = router
