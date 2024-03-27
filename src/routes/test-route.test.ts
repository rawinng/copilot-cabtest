import request from "supertest";
import express from "express";
import router from "./test-route";

const app = express();
app.use(router);

describe("GET /api/test", () => {
  it('should respond with "This is a test route"', async () => {
    const res = await request(app).get("/api/test").send();
    expect(res.statusCode).toEqual(200);
  });
});
