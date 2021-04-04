'use strict';
require('dotenv').config();
const base64 = require('base-64');const { app } = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(app);


describe('api server', () => {
    it('should be able to signup to create a new user on POST /signup', async () => {
        const obj = {
            username: 'ruba',
            password: '12345'
        };
        const response = await request.post('/signup').send(obj);
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('ruba');
    });

    it ('Should create new user and return record', async () => {
        let user = base64.encode(`ruba:12345`);
        let response = await request
          .post('/signin')
          .set(`Authorization`, `Basic ${user}`);
        expect(response.body.username).toEqual('ruba');
        expect(response.status).toEqual(200);
    });
    
    
    it('Do the routes assert the requirements (signup/signin)', async () => {
		const response = await request.get('/');
		expect(response.status).toEqual(404);
	});
});

