const jwt = require('jwt-simple');

module.exports = app => {
	const Users = app.db.models.Users;

	app.post('/token', (req, res) => {
		if (req.body.email && req.body.password) {
			Users.findOne({
				where: {
					email: req.body.email
				}
			})
			.then(user => {
				if (Users.isPassword(user.password, req.body.password)) {
					const payload = {
						id: user.id
					};
					res.json({
						token: jwt.encode(payload, app.libs.config.jwtSecret)
					});
				} else {
					res.sendStatus(401);
				}
			})
			.catch(() => res.sendStatus(401));
		} else {
			res.sendStatus(401);
		}
	});
};
