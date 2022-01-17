const infodb = require('../dal/infoDal.js');

class infoController {
  async getAll(req, res) {
    const infos = await infodb.getAll();
    const result = [];

    for (let elem of infos.rows) {
      let platformIdx = result.findIndex(i => i.platform === elem.platform);
      if (platformIdx === -1) {
        result.push({
          platform: elem.platform,
          image: elem.image,
          params: []
        });
        platformIdx = result.findIndex(i => i.platform === elem.platform);
      }

      let paramIdx = result[platformIdx].params.findIndex(i => i.name === elem.name);
      if (paramIdx === -1) {
        result[platformIdx].params.push({
          name: elem.name,
          values: []
        });
        paramIdx = result[platformIdx].params.findIndex(i => i.name === elem.name);
      }

      result[platformIdx].params[paramIdx].values.push({
        value: elem.value,
        description: elem.description
      });
    }

    return res.json(result);
  }

  async create(req, res) {
    const { value, description, param_id, source_id } = req.body;
    const info = await infodb.create(value, description, param_id, source_id);

    return res.json(info.rows[0]);
  }
}

module.exports = new infoController();