'use strict';

module.exports = app => {
	const Users = app.db.models.Users;

	app.route('/users')
	.post((req, res) => {
		Users.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(402).json({
				msg: err.message
			}));
	});

	app.route('/users/:id')
		.get((req, res) => {
			Users.findById(req.params.id, {
				attributes: ['id', 'name', 'email']
			})
				.then(data => res.json(data))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		})
		.put((req, res) => {
			Users.update(req.body, {
				where: req.params
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		})
		.delete((req, res) => {
			Users.destroy({
				where: req.params
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		});
};
