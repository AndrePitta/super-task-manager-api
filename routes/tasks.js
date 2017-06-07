'use strict';

module.exports = app => {
	const Tasks = app.db.models.Tasks;

	app.route('/tasks')
		.get((req, res) => {
			Tasks.findAll({})
				.then(data => res.json(data))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		})
		.post((req, res) => {
			Tasks.create(req.body)
				.then(data => res.json(data))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		});

	app.route('/tasks/:id')
		.get((req, res) => {
			Tasks.findOne({
				where: req.params
			})
				.then(data => {
					if (!data) res.sendStatus(404);
					res.json(data);
				})
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		})
		.put((req, res) => {
			Tasks.update(req.body, {
				where: req.params
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		})
		.delete((req, res) => {
			Tasks.destroy({
				where: req.params
			})
				.then(() => res.sendStatus(204))
				.catch(err => res.status(402).json({
					msg: err.message
				}));
		});
};
