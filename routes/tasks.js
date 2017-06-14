'use strict';

module.exports = app => {
	const Tasks = app.db.models.Tasks;

	app.route('/tasks')
		.all(app.auth.authenticate())
		.get((req, res) => {
			Tasks.findAll({
				where: {
					user_id: req.user.id
				}
			})
				.then(data => res.json(data))
				.catch(err => res.status(412).json({
					msg: err.message
				}));
		})
		.post((req, res) => {
			req.body.user_id	=	req.user.id;
			Tasks.create(req.body)
				.then(data => res.json(data))
				.catch(err => res.status(412).json({
					msg: err.message
				}));
		});

	app.route('/tasks/:id')
		.all(app.auth.authenticate())
		.get((req, res) => {
			Tasks.findOne({
				where: {
					id:	req.params.id,
					user_id:	req.user.id
				}
			})
				.then(data => {
					if (!data) res.sendStatus(404);
					res.json(data);
				})
				.catch(err => res.status(412).json({
					msg: err.message
				}));
		})
		.put((req, res) => {
			Tasks.update(req.body, {
				where: {
					id:	req.params.id,
					user_id:	req.user.id
				}
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(412).json({
					msg: err.message
				}));
		})
		.delete((req, res) => {
			Tasks.destroy({
				where: {
					id:	req.params.id,
					user_id:	req.user.id
				}
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(412).json({
					msg: err.message
				}));
		});
};
