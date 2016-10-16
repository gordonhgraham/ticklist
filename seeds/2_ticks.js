'use strict'

/* eslint-disable camelcase */


exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex(`ticks`).del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex(`ticks`).insert({
          name: `Choss Temple Pilots`,
          user_id: 1,
          area: `Sport Park`,
          grade: `5.8`,
          style: `sport`,
        }),
        knex(`ticks`).insert({
          name: `Frictionary`,
          user_id: 1,
          area: `Sport Park`,
          grade: `5.7`,
          style: `sport`,
        }),
        knex(`ticks`).insert({
          name: `Rubber Chicken`,
          user_id: 1,
          area: `Sport Park`,
          grade: `5.10c`,
          style: `sport`,
        }),
        knex(`ticks`).insert({
          name: `The Bait`,
          user_id: 1,
          area: `Coney Island`,
          grade: `5.11a`,
          style: `sport`,
        }),
      ])
    })
}
