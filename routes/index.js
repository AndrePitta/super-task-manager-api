'use strict';

module.exports = app => {
	app.route('/')
		.get((req, res) => {
			res.json({
				status: 'Welcome to Super Task Manager API',
			});
		});
};
