const request = require('supertest');
const express = require('express');

const app = express();
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello API" });
});

describe('GET /api/hello', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Hello API");
  });
});
