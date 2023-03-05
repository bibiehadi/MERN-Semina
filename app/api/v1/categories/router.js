const express = require('express');
const router = express();
const { index, create, findById, update, deleteById } = require('./controller');

router.get('/categories', index);

router.post('/categories', create);

router.get('/categories/:id', findById);
router.put('/categories/:id', update);
router.delete('/categories/:id', deleteById);

module.exports = router;
