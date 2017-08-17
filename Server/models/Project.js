const queryDB = require('../db');

class Project {
    constructor(name, listmem) {
        this.name = name;
        this.listmem = listmem;
    }

    static getAllProject(cb) {
        const sql = 'SELECT * FROM "Project"';
        queryDB(sql, [], (err, result) => {
            if (err) return cb(err);
            cb(null, result.rows);
        });
    }

    addPro(cb) {
        const sql = `INSERT INTO public."Project"(name, list_mem)
                        VALUES ($1, $2);`
        queryDB(sql, [this.name, this.listmem], cb)
    }
}

module.exports = Project;
