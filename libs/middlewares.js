'use strict';

const bodyParser = require('body-parser');
const express = require('express');

module.exports = app => {
	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.json());
	app.use(express.static('public'));
	app.use((req, res, next) => {
		delete req.body.id;
		next();
	});
};
