const { Router } = require('express');

const router = Router();


router.get('/', async (req, res) => {
  try {
    return res.json({test: true});
  } catch(e) {
    console.log(e);
    return res.status(500).json({message: 'Get error'});
  }
});


module.exports = router;