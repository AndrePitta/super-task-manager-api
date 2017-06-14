'use strict';

module.exports = app => {
	const Users = app.db.models.Users;

	app.route('/users')
	.all(app.auth.authenticate())
	.get((req, res) => {
		Users.findById(req.user.id, {
			attributes: ['id', 'name', 'email']
		})
			.then(data => res.json(data))
			.catch(err => res.status(412).json({
				msg: err.message
			}));
	})
	.post((req, res) => {
		Users.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(412).json({
				msg: err.message
			}));
	})
	.delete((req, res) => {
		Users.destroy({
			where: req.user.id
		})
			.then(() => res.sendStatus(204))
			.catch(err => res.status(412).json({
				msg: err.message
			}));
	});
};
