const jwt = require('jwt-simple');

module.exports = app => {
	const Users = app.db.models.Users;
	/**
			*	@api	{post}	/token	Token	autenticado
			*	@apiGroup	Credencial
			*	@apiParam	{String}	email	Email	de	usuário
			*	@apiParam	{String}	password	Senha	de	usuário
			*	@apiParamExample	{json}	Entrada
			*				{
			*						"email":	"john@connor.net",
			*						"password":	"123456"
			*				}
			*	@apiSuccess	{String}	token	Token	de	usuário	autenticado
			*	@apiSuccessExample	{json}	Sucesso
			*				HTTP/1.1	200	OK
			*				{"token":	"xyz.abc.123.hgf"}
			*	@apiErrorExample	{json}	Erro	de	autenticação
			*				HTTP/1.1	401	Unauthorized
	*/
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
