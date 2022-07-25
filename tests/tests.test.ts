import app from "../src/app.js";
import supertest from "supertest";
import dotenv from "dotenv";

dotenv.config();
describe("/tests", () => {
  it(" test response /testsByDisciplines", async () => {
    const result = await supertest(app)
      .get("/testsByDisciplines")
      .set("Authorization", `Bearer ${process.env.TOKEN}`);
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
  });
  it(" test without Token /testsByDisciplines", async () => {
    const result = await supertest(app).get("/testsByDisciplines");
    expect(result.statusCode).toEqual(401);
  });
  it(" test invalid Token /testsByDisciplines", async () => {
    const result = await supertest(app)
      .get("/testsByDisciplines")
      .set("Authorization", `Bearer ${"TOKEN"}`);
    expect(result.statusCode).toEqual(401);
  });
  it(" test  response /testsByTeacher", async () => {
    const result = await supertest(app)
      .get("/testsByTeacher")
      .set("Authorization", `Bearer ${process.env.TOKEN}`);
    expect(result.status).toEqual(200);
    expect(result.body).toBeDefined();
  });
  it(" test without Token /testsByDisciplines", async () => {
    const result = await supertest(app).get("/testsByTeacher");
    expect(result.statusCode).toEqual(401);
  });
  it(" test invalid Token /testsByDisciplines", async () => {
    const result = await supertest(app)
      .get("/testsByTeacher")
      .set("Authorization", `Bearer ${"TOKEN"}`);
    expect(result.statusCode).toEqual(401);
  });
});
