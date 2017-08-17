const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'TeamManage',
    password: '5126874309',
    user: 'postgres',
    max: 10,
    idleTimeoutMillis: 1000
})

function queryDB(sql, arrayData, cb) {
    pool.connect((err, client) => {
        if (err) return cb(err);
        client.query(sql, arrayData, cb);
    });
}

module.exports = queryDB;