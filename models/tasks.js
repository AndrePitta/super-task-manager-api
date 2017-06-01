'use strict';

module.exports = app => {
	return {
		findAll: (params, callback) => {
			return callback([
				{title: 'Buy something'},
				{title:	'Consertar	o	pc'},
			]);
		}
	};
};
