const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'alt64',
    host: 'localhost',
    port: '5432',
    database: 'bdposts'
});

module.exports = pool;