'use strict';

module.exposts = app => {
	app.get('/', (req, res) => {
		res.json({
			status: 'Welcome to Super Task Manager API',
		});
	});
};
