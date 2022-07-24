import * as testsRepository from "../repositorys/TestsRepository.js";

export async function createTest(data: testsRepository.dataCreateTest) {
  return await testsRepository.createTest(data);
}
export async function OrderByDiscisplinesTests() {
  return await testsRepository.getByDisciplines();
}

export async function GetByDisciplines() {
  return await testsRepository.getByDisciplines();
}
export async function GetByTeacher() {
  return await testsRepository.getByTeacher();
}
