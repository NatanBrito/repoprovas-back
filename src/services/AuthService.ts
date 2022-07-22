import * as AuthRepository from "../repositorys/AuthRepository.js";
import * as utils from "../utils/encryptDecrypt.js";
export async function findByEmail(email: string) {
  const searchRegister = await AuthRepository.findByEmail(email);
  return searchRegister;
}

export async function findUser(email: string) {
  const find = await findByEmail(email);
  if (!find) {
    throw {
      type: "notfound",
      status: 404,
      message: " not found register",
    };
  }
  return find;
}

export async function verifyEmail(email: string) {
  const searchRegister = await findByEmail(email);
  if (searchRegister) {
    throw {
      type: "notfound",
      status: 401,
      message: " email has been already register",
    };
  }
  return true;
}
export async function createUser(data: AuthRepository.dataUser) {
  await AuthRepository.InsertUser(data);
  return true;
}

export async function verifyPassword(password: string, crypt: string) {
  const decrypt = utils.DecryptPass(crypt);
  if (decrypt !== password) {
    throw {
      type: "notfound",
      status: 401,
      message: "invalid Data",
    };
  }
  return true;
}

export function encryptPassword(password: string) {
  return utils.EncryptPass(password);
}
