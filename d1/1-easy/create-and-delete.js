const { db } = require('../../db/db');
//Create a table called Users with the fields of name and role. Both are text fields.

async function createTable() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS Users(
            name TEXT,
            role TEXT
        );
    `);
}
//Write a function that will delete the Users table.
async function deleteTable() {
    await db.query(`
        DROP TABLE IF EXISTS Users;
    `);
}

module.exports = { createTable, deleteTable };
