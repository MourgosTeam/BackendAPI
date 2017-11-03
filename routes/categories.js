var express = require('express');
var router = express.Router();

var knex = require('../db/db.js');

/* GET categories listing. */
router.get('/', function(req, res, next) {
	knex.table('categories').select('*').then(
		(data) => res.send(data)
	);
});

router.get('/catalogue/:catid', function(req, res, next) {
	knex.table('categories').select('*').where({catalogue_id : req.params.catid}).then(
		(data) => res.send(data)
	);
});

router.get('/:id', function(req, res, next) {
	knex.table('categories').select('*').where({id : req.params.id}).then(
		(data) => res.send(data[0])
	);
});

router.post('/', function(req, res, next) {
	knex.table('categories').insert(req.body).then(
		(data) => res.send(data)
	);
});

module.exports = router;
