'use strict'

/* eslint-disable camelcase */

exports.seed = (knex, Promise) => {
  return knex(`users`).del()
    .then(() => {
      return Promise.all([
        knex(`users`).insert({
          email: `gordon.graham@colorado.edu`,
          token: `uh oh...`,
          first_name: `Gordon`,
          last_name: `Graham`,
        }),
      ])
    })
}
