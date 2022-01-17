const { Router } = require('express');
const paramsController = require('../controllers/paramsController.js');

const router = Router();

router.get('/', paramsController.getAll);
router.post('/', paramsController.create);

module.exports = router;