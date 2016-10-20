'use strict'

/* eslint-disable max-len */

exports.up = knex => {
  return knex.schema.dropTableIfExists(`ticks`).then(() => {
    return knex.schema.createTable(`ticks`, table => {
      table.increments()
      table.string(`name`).notNullable()
      table.string(`area`).notNullable()
      table.string(`grade`)
      table.string(`style`)
      table.string(`user_fb_id`).references(`users.fb_id`).notNullable().onDelete(`cascade`).index()
      table.timestamps(true, true)
    })
  })
}

exports.down = knex => {
  return knex.schema.dropTable(`ticks`)
}
