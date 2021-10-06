require('dotenv').config()

module.exports = {
    development: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: "knex_migrations"
        }
    }
};