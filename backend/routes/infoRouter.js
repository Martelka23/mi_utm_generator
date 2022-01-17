const { Router } = require('express');
const infoController = require('../controllers/infoController.js');

const router = Router();

router.get('/', infoController.getAll);
router.post('/', infoController.create);

module.exports = router;