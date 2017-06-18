describe('Routes: Token', () => {
	const Users = app.db.models.Users;
	describe('POST /token', () => {
		beforeEach(done => {
			Users
			.destroy({where: {}})
			.then(() => Users.create({
				name:	'Johny',
				email:	'johny@mail.com',
				password:	'123456'
			}))
			.then(() => done());
		});
		describe('status 200', () => {
			it('should return authenticated	user token', done => {
				request
				.post('/token')
				.send({
					email:	'johny@mail.com',
					password:	'123456'
				})
				.expect(200)
				.end((err, res) => {
					expect(res.body).to.include.keys('token');
					done(err);
				});
			});
		});
		describe('status 401', () => {
			it('should throws	error	when	password	is	incorrect', done => {
				request
				.post('/token')
				.send({
					email:	'johny@mail.com',
					password:	'12345'
				})
				.expect(401)
				.end((err, res) => {
					done(err);
				});
			});
			it('should throws	error	when	email	not	exist', done => {
				request
				.post('/token')
				.send({
					email:	'joh@mail.com',
					password:	'123456'
				})
				.expect(401)
				.end((err, res) => {
					done(err);
				});
			});
			it('should throws	error	when	email	and	password	are	blank', done => {
				request
				.post('/token')
				.expect(401)
				.end((err, res) => {
					done(err);
				});
			});
		});
	});
});
