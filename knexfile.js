'use strict'

module.exports = {

  development: {
    client: `pg`,
    connection: `postgres://localhost/ticklist`,
  },

  production: {
    client: `pg`,
    connection: process.env.DATABASE_URL,
  },
}
