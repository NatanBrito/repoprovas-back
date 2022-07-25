import app from "../src/app.js";
import supertest from "supertest";
import fake from "./factory/authData.js";

describe("POST Auth", () => {
  const email = fake.email();
  const password = fake.password();
  it(" teste do signUp", async () => {
    const bodySignUp = {
      email: email,
      password: password,
      confirmPassword: password,
    };
    const result = await supertest(app).post("/signUp").send(bodySignUp);
    expect(result.status).toEqual(201);
  });
  it("teste do signIn", async () => {
    const body = {
      email: email,
      password: password,
    };

    setTimeout(async () => {
      const result = await supertest(app).post("/signIn").send(body);
      expect(result.status).toEqual(200);
    }, 500);
  });
  it("test invalidPassword", async () => {
    const body = {
      email: email,
      password: fake.password(),
    };

    const result = await supertest(app).post("/signIn").send(body);
    expect(result.status).toEqual(404);
  });
  it("test send token", async () => {
    const body = {
      email: email,
      password: password,
    };

    setTimeout(async () => {
      const result = await supertest(app).post("/signIn").send(body);
      expect(result.status).toEqual(200);
      expect(result.body.token).toBeDefined();
    }, 500);
  });
  it(" test invalid schema signUp", async () => {
    const bodySignUp = {
      email: email,
      confirmPassword: password,
    };
    const result = await supertest(app).post("/signUp").send(bodySignUp);
    expect(result.status).toEqual(422);
  });
  it(" test invalid schema signIn", async () => {
    const bodySignUp = {
      password: password,
    };
    const result = await supertest(app).post("/signIn").send(bodySignUp);
    expect(result.status).toEqual(422);
  });
});
