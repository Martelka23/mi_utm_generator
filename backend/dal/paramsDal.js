const db = require('../databases/database.js');

class paramsdb {
  getAll() {
    return db.query('SELECT * FROM utm_params');
  }

  create(name) {
    return db.query(`
      INSERT INTO utm_params
        (name)
      VALUES
        ($1)
      RETURNING *
    `, [name]);
  }
}

module.exports = new paramsdb();