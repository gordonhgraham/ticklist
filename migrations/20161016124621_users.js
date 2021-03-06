'use strict'

exports.up = knex => {
  return knex.schema.dropTableIfExists(`users`).then(() => {
    return knex.schema.createTable(`users`, table => {
      table.increments()
      table.string(`fb_id`).notNullable().unique()
      table.string(`email`).unique()
      table.string(`token`).notNullable()
      table.string(`first_name`)
      table.string(`last_name`)
      table.timestamps(true, true)
    })
  })
}

exports.down = knex => {
  return knex.schema.dropTable(`users`)
}
