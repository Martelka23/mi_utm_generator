const db = require('../databases/database.js');

class infodb {
  getAll() {
    return db.query(`
      SELECT
        s.platform,
        s.image,
        p.name,
        i.value,
        i.description
      FROM
        utm_info AS i
      INNER JOIN
        utm_sources AS s
        ON i.source_id = s.id
      INNER JOIN
        utm_params AS p
      ON i.param_id = p.id
    `);
  }

  create(value, description, param_id, source_id) {
    return db.query(`
      INSERT INTO utm_info
        (value, description, param_id, source_id)
      VALUES
        ($1, $2, $3, $4)
      RETURNING *
    `, [value, description, param_id, source_id]);
  }
}

module.exports = new infodb();