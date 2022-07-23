import * as testsRepository from "../repositorys/TestsRepository.js";

export async function createTest(data: testsRepository.dataTest) {
  return await testsRepository.createTest(data);
}
