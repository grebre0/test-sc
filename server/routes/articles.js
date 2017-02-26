var express = require('express');
var router = express.Router();
var crud = require('../controllers/crud');
var Article = require('../models/Article');

router.route('/:id')
    .get(crud.get(Article))
    .put(crud.update(Article))

module.exports = router;
