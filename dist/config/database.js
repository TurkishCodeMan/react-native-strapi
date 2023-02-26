"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
console.log(process.env.DATABASE_HOST);
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DB_DATABASE,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            ssl: {
                rejectUnauthorized: false,
            },
        },
        debug: false,
    },
});
