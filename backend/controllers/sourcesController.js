const sourcesdb = require('../dal/sourcesDal.js');

class sourceController {
  async getAll(req, res) {
    const sources = await sourcesdb.getAll();

    return res.json(sources.rows);
  }

  async create(req, res) {
    const {platform, source, medium, campaign, content, term, image} = req.body;
    const newSource = await sourcesdb.create(platform, source, medium, campaign, content, term, image);
    
    return res.json(newSource.rows[0]);
  }

  async update(req, res) {
    const {platform, source, medium, campaign, content, term, image, id} = req.body;
    const updatedSource = await sourcesdb.update(platform, source, medium, campaign, content, term, image, id);

    return res.json(updatedSource.rows[0]);
  }
}

module.exports = new sourceController();