import app from "../app.js";
import supertest from "supertest";

describe("POST Auth", () => {
  it(" teste do signUp", async () => {
    const result = await supertest(app).post("/signup").send({
      email: "naaatan@gmail.com",
      password: "senhasenha",
      confirmPassword: "senhasenha",
    });
    const status = result.status;

    expect(status).toEqual(201);
  });
  it("given a valid task it should return 201", async () => {
    const body = {
      email: "teste20@gmail.com",
      password: "senhasenha",
    };

    const result = await supertest(app).post("/signin").send(body);
    const status = result.status;

    expect(status).toEqual(200);
  });
});
