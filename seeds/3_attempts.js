'use strict'

/* eslint-disable max-len, camelcase */

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex(`attempts`).del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex(`attempts`).insert({
          tick_id: 1,
          send_type: `red point`,
          partner: `Andrew Lenec`,
          notes: ``,
        }),
        knex(`attempts`).insert({
          tick_id: 2,
          send_type: `red point`,
          partner: `Andrew Lenec`,
          notes: ``,
        }),
        knex(`attempts`).insert({
          tick_id: 3,
          send_type: `red point`,
          partner: `Andrew Zaslov`,
          notes: ``,
        }),
        knex(`attempts`).insert({
          tick_id: 4,
          send_type: `top rope`,
          partner: `Andrew Lenec`,
          notes: ``,
        }),
      ])
    })
}
