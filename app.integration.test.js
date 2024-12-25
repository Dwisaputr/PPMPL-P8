const request = require('supertest');
const app = require('./app');

describe('Integration Tests', () => {
  describe('GET /', () => {
    it('should respond with Hello, World!', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Hello, World!');
    });
  });

  describe('GET /api/data', () => {
    it('should fetch data successfully', async () => {
      const res = await request(app).get('/api/data');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        message: 'Data fetched successfully',
        data: [1, 2, 3, 4, 5],
      });
    });
  });
});
