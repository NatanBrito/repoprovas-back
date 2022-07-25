import app from "../src/app.js";
import supertest from "supertest";
import dotenv from "dotenv";

dotenv.config();
describe("/category", () => {
  it(" test  response /testsByTeacher", async () => {
    const result = await supertest(app)
      .get("/categories")
      .set("Authorization", `Bearer ${process.env.TOKEN}`);
    expect(result.status).toEqual(200);
    expect(result.body).toBeDefined();
  });
  it(" test without Token /categories", async () => {
    const result = await supertest(app).get("/categories");
    expect(result.statusCode).toEqual(401);
  });
  it(" test invalid Token /categories", async () => {
    const result = await supertest(app)
      .get("/categories")
      .set("Authorization", `Bearer ${"TOKEN"}`);
    expect(result.statusCode).toEqual(401);
  });
});
