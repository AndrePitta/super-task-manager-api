describe('Routes: Index', () => {
	describe('GET /', () => {
		it('should return the API status', done => {
			request.get('/')
			.expect(200)
			.end((err, res) => {
				const expected = {status: 'Welcome to Super Task Manager API'};
				expect(res.body).to.be.eql(expected);
				done(err);
			});
		});
	});
});
