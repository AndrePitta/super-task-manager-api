'use strict';

module.exports = app => {
	return {
		findAll: (params, callback) => {
			return callback([
				{title: 'Buy something'},
				{title:	'Watch a movie'},
			]);
		}
	};
};
