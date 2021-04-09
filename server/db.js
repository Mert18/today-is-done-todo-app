const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "hach",
    host: "localhost",
    database: "todo-app",
    port: 5432
});

module.exports = pool;