'use strict';

module.exports = {
	database: 'super-tasks',
	username: '',
	password: '',
	params: {
		dialect: 'sqlite',
		storage: 'super-tasks.sqlite',
		define: {
			underscore: true
		}
	},
	jwtSecret: '$uP3r-AP1',
	jwtSession: {session: false}
};
