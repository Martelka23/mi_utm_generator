const paramsdb = require('../dal/paramsDal.js');

class paramsController {
  async getAll(req, res) {
    const params = await paramsdb.getAll();

    return res.json(params.rows);
  }

  async create(req, res) {
    const { name } = req.body;
    const param = await paramsdb.create(name);

    return res.json(param.rows[0]);
  }
}

module.exports = new paramsController();