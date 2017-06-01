'use strick';

module.exports = app => {
	app.listen(app.get('port'), () => console.log(`SUPER TASK IS ALIVE :) ON PORT ${app.get('port')}`));
};
