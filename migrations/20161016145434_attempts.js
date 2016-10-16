'use strict'

/* eslint-disable max-len */

exports.up = knex => {
  return knex.schema.dropTableIfExists(`attempts`).then(() => {
    return knex.schema.createTable(`attempts`, table => {
      table.increments()
      table.integer(`tick_id`).references(`ticks.id`).notNullable().onDelete(`cascade`).index()
      table.string(`send_type`)
      table.string(`partner`)
      table.text(`notes`)
      table.timestamps(true, true)
    })
  })
}

exports.down = knex => {
  return knex.schema.dropTable(`attempts`)
}
