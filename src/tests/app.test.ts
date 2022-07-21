import app from "../app.js";
import supertest from "supertest";

describe("POST Auth", () => {
  it("teste inicial, esperando status(201)", async () => {
    const result = await supertest(app).post("/").send("exemplo");
    const status = result.status;

    expect(status).toEqual(201);
  });
});
