import app from "../app.js";
import supertest from "supertest";

describe("POST /tasks", async () => {
  it("o que vc fornece e espera de resposta", async () => {
    const result = await supertest(app).post("/exemplo").send("exemplo");
    const status = result;

    expect(status).toEqual(201);
  });
});
