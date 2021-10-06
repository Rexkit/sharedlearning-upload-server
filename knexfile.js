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
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};