'use strict';

module.exports = app => {
	/**
		*	@api	{get}	/	API	Status
		*	@apiGroup	Status
		*	@apiSuccess	{String}	status	Mensagem	de	status	da	API
		*	@apiSuccessExample	{json}	Sucesso
		*				HTTP/1.1	200	OK
		*				{"status":	"NTask	API"}
		*/
	app.route('/')
		.get((req, res) => {
			res.json({
				status: 'Welcome to Super Task Manager API',
			});
		});
};
