'use strict';

const bodyParser = require('body-parser');

module.exports = app => {
	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		delete req.body.id;
		next();
	});
};
