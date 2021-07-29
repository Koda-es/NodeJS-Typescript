import request from 'supertest';

import app from '../src/app';

describe('GET /api', () => {

  it('Should return HTTP 200 OK', () => {
    const result = request(app).get('/api');

    return result.expect(200);
  });

});
