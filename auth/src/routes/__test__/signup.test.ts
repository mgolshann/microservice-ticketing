import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: global.email, 
            password: global.password
        })
        .expect(201)
});

it('returna a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'wrong_email', 
            password: global.password
        })
        .expect(400)
});

it('returns a 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: global.email, 
            password: '12'
        })
        .expect(400)
});

it('returns 400 if we missing email or password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: global.email
        })
        .expect(400)
    
    await request(app)
        .post('/api/users/signup')
        .send({
            password: global.password
        })
        .expect(400)
});

it('disallows duplicate emails', async () => {
    
    const user = { 
        email: global.email, 
        password: global.password
    };

    await request(app)
        .post('/api/users/signup')
        .send(user)
        .expect(201)
    
    await request(app)
        .post('/api/users/signup')
        .send(user)
        .expect(400)
});

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: global.email, 
            password: global.password
        })
        .expect(201)
    
    expect(response.get('Set-Cookie')).toBeDefined();
})
