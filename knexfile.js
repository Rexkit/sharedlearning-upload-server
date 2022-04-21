require("dotenv").config();

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: false,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
