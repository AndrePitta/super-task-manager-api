'use strick';

module.exports = app => {
	if(process.env.NODE_ENV !== 'test'){
		app.db.sequelize
		.sync()
		.done(() => {
			app.listen(app.get('port'), () => {
				console.log(`SUPER TASK IS ALIVE :) ON PORT ${app.get('port')}`);
			});
		});
	}
};
