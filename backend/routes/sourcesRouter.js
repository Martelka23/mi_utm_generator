const { Router } = require('express');

const sourcesController = require('../controllers/sourcesController.js');


const router = Router();

router.get('/', sourcesController.getAll);
router.post('/', sourcesController.create);
router.put('/', sourcesController.update);

module.exports = router;