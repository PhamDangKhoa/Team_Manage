const queryDB = require('../db');

class Member {
    constructor(name, phone, project) {
        this.name = name;
        this.phone = phone;
        this.project = project
    }

    static getAllMem(cb) {
        const sql = 'SELECT * FROM "Member"';
        queryDB(sql, [], (err, result) => {
            if (err) return cb(err);
            cb(null, result.rows);
        });
    }

    addMem(cb) {
        const sql = `INSERT INTO public."Member"(name, phone, project)
                        VALUES ($1, $2, $3);`
        queryDB(sql, [this.name, this.phone, this.project], cb)
    }
}

module.exports = Member;