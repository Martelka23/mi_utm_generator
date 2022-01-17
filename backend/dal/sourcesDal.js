const db = require('../databases/database.js');

class sourcesdb {
  getAll() {
    return db.query('SELECT * FROM utm_sources');
  }

  create(platform, source, medium, campaign, content, term, image) {
    return db.query(`
      INSERT INTO utm_sources
        (platform, source, medium, campaign, content, term, image)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [platform, source, medium, campaign, content, term, image]);
  }

  update(platform, source, medium, campaign, content, term, image, id) {
    return db.query(`
      UPDATE 
        utm_sources
      SET
        platform = $1, 
        source = $2, 
        medium = $3, 
        campaign = $4, 
        content = $5, 
        term = $6,
        image = $7
      WHERE
        id = $8
      RETURNING *
    `, [platform, source, medium, campaign, content, term, image, id]);
  }
}

module.exports = new sourcesdb();

