import request from "supertest";
import express from "express";
import router from "./hello-route";

const app = express();
app.use(router);

describe("GET /api/hello", () => {
  it('should respond with "This is a hello route"', async () => {
    var res = await request(app).get("/api/hello").send();
    expect(res.statusCode).toEqual(200);
  });
});
